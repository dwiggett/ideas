'use client'

import { useState } from 'react'
import Link from 'next/link'

const serviceTypes = [
  'House Cleaning', 'Office Cleaning', 'Deep Cleaning', 'Move-In/Out Cleaning',
  'Pressure Washing', 'Lawn Maintenance', 'Landscape Design', 'Tree Trimming',
  'Portrait Photography', 'Wedding Photography', 'Event Photography', 'Videography',
  'Logo Design', 'Brand Design', 'Web Design', 'App Design',
  'SEO Audit', 'PPC Management', 'Social Media Management', 'Content Marketing',
  'Business Consulting', 'IT Consulting', 'Marketing Consulting', 'Life Coaching',
  'Academic Tutoring', 'Music Lessons', 'Personal Training', 'Yoga Instruction',
  'Event Planning', 'Catering', 'Moving', 'Junk Removal',
  'Handyman', 'Pest Control', 'Pool Service', 'Carpet Cleaning',
  'Window Cleaning', 'Dog Grooming', 'Pet Sitting', 'Dog Walking',
]

export default function NewQuote() {
  const [step, setStep] = useState(1)
  const [service, setService] = useState('')
  const [description, setDescription] = useState('')
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [clientAddress, setClientAddress] = useState('')
  const [items, setItems] = useState([
    { name: '', description: '', unitPrice: 0, quantity: 1, unit: 'each' }
  ])
  const [markup, setMarkup] = useState(20)
  const [taxRate, setTaxRate] = useState(8.25)
  const [notes, setNotes] = useState('')

  const addItem = () => {
    setItems([...items, { name: '', description: '', unitPrice: 0, quantity: 1, unit: 'each' }])
  }

  const updateItem = (index: number, field: string, value: string | number) => {
    const newItems = [...items]
    newItems[index] = { ...newItems[index], [field]: value }
    setItems(newItems)
  }

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index))
  }

  const subtotal = items.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0)
  const markupAmount = subtotal * (markup / 100)
  const taxableAmount = subtotal + markupAmount
  const taxAmount = taxableAmount * (taxRate / 100)
  const total = taxableAmount + taxAmount

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-14 flex justify-between items-center">
          <Link href="/dashboard" className="text-xl font-bold text-gray-900">Solo<span className="text-blue-600">Bid</span></Link>
          <Link href="/dashboard" className="text-sm text-gray-500 hover:text-gray-700">← Back to Dashboard</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Step Indicator */}
        <div className="flex justify-center gap-2 mb-8">
          {[1, 2, 3].map(s => (
            <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${s <= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>{s}</div>
          ))}
        </div>

        {/* Step 1: Service & Client */}
        {step === 1 && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Service & Client Details</h2>
            <div className="space-y-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" value={service} onChange={e => setService(e.target.value)}>
                  <option value="">Select service</option>
                  {serviceTypes.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
                <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" rows={4} placeholder="Describe the job in plain English. Our AI will generate a complete estimate." value={description} onChange={e => setDescription(e.target.value)} />
              </div>
              <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-800">
                <strong>💡 AI Tip:</strong> Be specific! &quot;3 bedroom, 2 bath house, 1,800 sqft, deep clean needed&quot; generates better estimates than &quot;clean house.&quot;
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Client Name</label><input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" value={clientName} onChange={e => setClientName(e.target.value)} /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Client Email</label><input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" value={clientEmail} onChange={e => setClientEmail(e.target.value)} /></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Client Phone</label><input type="tel" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" value={clientPhone} onChange={e => setClientPhone(e.target.value)} /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Job Address</label><input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" value={clientAddress} onChange={e => setClientAddress(e.target.value)} /></div>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button onClick={() => setStep(2)} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">Next: Add Items</button>
            </div>
          </div>
        )}

        {/* Step 2: Line Items */}
        {step === 2 && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Line Items</h2>
              <button onClick={addItem} className="text-blue-600 text-sm font-medium hover:underline">+ Add Item</button>
            </div>
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm font-medium text-gray-500">Item {index + 1}</span>
                    {items.length > 1 && <button onClick={() => removeItem(index)} className="text-red-500 text-xs hover:underline">Remove</button>}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div><label className="block text-xs text-gray-500 mb-1">Name</label><input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" placeholder="e.g., Standard Cleaning" value={item.name} onChange={e => updateItem(index, 'name', e.target.value)} /></div>
                    <div><label className="block text-xs text-gray-500 mb-1">Description</label><input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" placeholder="e.g., 3 bed, 2 bath, 1800 sqft" value={item.description} onChange={e => updateItem(index, 'description', e.target.value)} /></div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-3">
                    <div><label className="block text-xs text-gray-500 mb-1">Unit Price</label><input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" value={item.unitPrice || ''} onChange={e => updateItem(index, 'unitPrice', parseFloat(e.target.value) || 0)} /></div>
                    <div><label className="block text-xs text-gray-500 mb-1">Quantity</label><input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" value={item.quantity} onChange={e => updateItem(index, 'quantity', parseFloat(e.target.value) || 1)} /></div>
                    <div><label className="block text-xs text-gray-500 mb-1">Unit</label>
                      <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" value={item.unit} onChange={e => updateItem(index, 'unit', e.target.value)}>
                        <option value="each">Each</option><option value="hour">Hour</option><option value="sqft">Sq Ft</option><option value="linearft">Linear Ft</option><option value="visit">Visit</option><option value="project">Project</option>
                      </select>
                    </div>
                  </div>
                  <div className="text-right mt-2 text-sm font-medium">${(item.unitPrice * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>

            {/* Pricing Summary */}
            <div className="mt-6 border-t pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Markup (%)</label>
                  <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" value={markup} onChange={e => setMarkup(parseFloat(e.target.value) || 0)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tax Rate (%)</label>
                  <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" value={taxRate} onChange={e => setTaxRate(parseFloat(e.target.value) || 0)} />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm"><span className="text-gray-500">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-500">Markup ({markup}%)</span><span>${markupAmount.toFixed(2)}</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-500">Tax ({taxRate}%)</span><span>${taxAmount.toFixed(2)}</span></div>
                <div className="flex justify-between text-lg font-bold border-t pt-2"><span>Total</span><span>${total.toFixed(2)}</span></div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button onClick={() => setStep(1)} className="px-6 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">Back</button>
              <button onClick={() => setStep(3)} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">Next: Review & Send</button>
            </div>
          </div>
        )}

        {/* Step 3: Review & Send */}
        {step === 3 && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Review & Send Quote</h2>

            {/* Quote Preview */}
            <div className="border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold">SoloBid Quote</h3>
                  <p className="text-sm text-gray-500">Quote #{Math.floor(Math.random() * 9000) + 1000}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Date: {new Date().toLocaleDateString()}</p>
                  <p className="text-sm text-gray-500">Valid for: 30 days</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">From</h4>
                  <p className="font-medium">Solo Services LLC</p>
                  <p className="text-sm text-gray-500">mike@example.com</p>
                  <p className="text-sm text-gray-500">(555) 123-4567</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">To</h4>
                  <p className="font-medium">{clientName || 'Client Name'}</p>
                  <p className="text-sm text-gray-500">{clientEmail || 'client@email.com'}</p>
                  <p className="text-sm text-gray-500">{clientAddress || 'Address'}</p>
                </div>
              </div>

              <h4 className="text-sm font-medium text-gray-500 mb-2">Service: {service || 'Service Type'}</h4>

              <table className="w-full text-sm mb-4">
                <thead><tr className="text-left text-gray-500 border-b"><th className="pb-2">Item</th><th className="pb-2">Qty</th><th className="pb-2">Price</th><th className="pb-2 text-right">Total</th></tr></thead>
                <tbody>
                  {items.filter(i => i.name).map((item, i) => (
                    <tr key={i} className="border-b"><td className="py-2">{item.name}</td><td>{item.quantity} {item.unit}</td><td>${item.unitPrice.toFixed(2)}</td><td className="text-right">${(item.unitPrice * item.quantity).toFixed(2)}</td></tr>
                  ))}
                </tbody>
              </table>

              <div className="space-y-1 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Markup ({markup}%)</span><span>${markupAmount.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Tax ({taxRate}%)</span><span>${taxAmount.toFixed(2)}</span></div>
                <div className="flex justify-between text-lg font-bold border-t pt-2"><span>Total Due</span><span>${total.toFixed(2)}</span></div>
              </div>

              {notes && <div className="mt-4 p-3 bg-gray-50 rounded-lg text-sm"><strong>Notes:</strong> {notes}</div>}

              <div className="mt-6 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
                <strong>Terms:</strong> Payment due upon acceptance. This quote is valid for 30 days.
              </div>
            </div>

            <div><label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
              <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" rows={3} placeholder="Any additional notes for the client..." value={notes} onChange={e => setNotes(e.target.value)} />
            </div>

            <div className="flex justify-between mt-6">
              <button onClick={() => setStep(2)} className="px-6 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">Back</button>
              <div className="flex gap-3">
                <button className="px-6 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">Save as Draft</button>
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700">Send Quote</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
