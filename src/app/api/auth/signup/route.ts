import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, password, phone, company, trade, state } = await request.json()
    if (!email || !password || !firstName) return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })

    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) return NextResponse.json({ error: 'Email already in use' }, { status: 400 })

    const hashed = await bcrypt.hash(password, 12)
    const user = await prisma.user.create({ data: { name: `${firstName} ${lastName}`, email, password: hashed, phone, company, trade, state } })

    return NextResponse.json({ message: 'Account created', userId: user.id }, { status: 201 })
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
