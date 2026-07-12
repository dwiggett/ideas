import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    if (!userId) return NextResponse.json({ error: 'User ID required' }, { status: 400 })

    const quotes = await prisma.quote.findMany({
      where: { userId },
      include: { items: true },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(quotes)
  } catch (error) {
    console.error('Quotes GET error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { userId, clientName, clientEmail, clientPhone, clientAddress, projectName, projectDescription, items, markup, taxRate, notes, validUntil } = body

    if (!userId) return NextResponse.json({ error: 'User ID required' }, { status: 400 })

    const quote = await prisma.quote.create({
      data: {
        userId,
        clientName,
        clientEmail,
        clientPhone,
        clientAddress,
        projectName,
        projectDescription,
        markup: markup || 20,
        taxRate: taxRate || 0,
        notes,
        validUntil: validUntil ? new Date(validUntil) : null,
        items: {
          create: items?.map((item: { name: string; description?: string; unitPrice: number; quantity: number; unit?: string }, index: number) => ({
            name: item.name,
            description: item.description,
            unitPrice: item.unitPrice,
            quantity: item.quantity,
            unit: item.unit || 'each',
            totalPrice: item.unitPrice * item.quantity,
            sortOrder: index,
          })) || []
        }
      },
      include: { items: true }
    })

    // Calculate totals
    const subtotal = quote.items.reduce((sum, item) => sum + item.totalPrice, 0)
    const markupAmount = subtotal * (quote.markup / 100)
    const taxableAmount = subtotal + markupAmount
    const taxAmount = taxableAmount * (quote.taxRate / 100)
    const total = taxableAmount + taxAmount

    await prisma.quote.update({
      where: { id: quote.id },
      data: { subtotal, markupAmount, taxAmount, total }
    })

    return NextResponse.json({ ...quote, subtotal, markupAmount, taxAmount, total }, { status: 201 })
  } catch (error) {
    console.error('Quotes POST error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
