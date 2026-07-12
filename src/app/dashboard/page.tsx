'use client'

import { useState } from 'react'
import Link from 'next/link'

const mockQuotes = [
  { id: 1, client: 'Johnson Residence', service: 'House Cleaning', amount: 180, status: 'sent', date: '2026-07-08', viewed: true },
  { id: 2, client: 'Smith Office', service: 'Office Cleaning', amount: 450, status: 'accepted', date: '2026-07-07', viewed: true },
  { id: 3, client: 'Davis Home', service: 'Pressure Washing', amount: 320, status: 'draft', date: '2026-07-09', viewed: false },
  { id: 4, client: 'Wilson Property', service: 'Landscaping', amount: 850, status: 'sent', date: '2026-07-06', viewed: false },
  { id: 5, client: 'Brown Studio', service: 'Photography', amount: 1200, status: 'accepted', date: '2026-07-05', viewed: true },
]

export default function Dashboard() {
  const [tab, setTab] = useState('quotes')
  const [showNewQuote, setShowNewQuote] = useState(false)

  const stats = {
    totalQuotes: 24,
    winRate: 42,
    avgQuote: 485,
    monthlyRevenue: 8400,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nav */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-14 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-900">Solo<span className="text-blue-600">Bid</span></Link>
          <div className="flex items-center gap-4">
            <button className="relative">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
            </button>
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-semibold">U</div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Total Quotes', value: stats.totalQuotes, change: '+8 this week' },
            { label: 'Win Rate', value: `${stats.winRate}%`, change: '+5% from last month' },
            { label: 'Avg Quote', value: `$${stats.avgQuote}`, change: '+$45 from last month' },
            { label: 'Monthly Revenue', value: `$${stats.monthlyRevenue.toLocaleString()}`, change: '+$1,200 from last month' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500">{stat.label}</div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-green-600 mt-1">{stat.change}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6 flex gap-6">
          {['quotes', 'templates', 'analytics', 'settings'].map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`pb-2 text-sm font-medium capitalize transition ${tab === t ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>{t}</button>
          ))}
        </div>

        {/* QUOTES TAB */}
        {tab === 'quotes' && (
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Recent Quotes</h2>
              <button onClick={() => setShowNewQuote(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">+ New Quote</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="text-left text-gray-500 border-b"><th className="p-4">Client</th><th className="p-4">Service</th><th className="p-4">Amount</th><th className="p-4">Status</th><th className="p-4">Date</th><th className="p-4">Actions</th></tr></thead>
                <tbody>{mockQuotes.map(q => (
                  <tr key={q.id} className="border-b last:border-0 hover:bg-gray-50">
                    <td className="p-4 font-medium">{q.client}</td>
                    <td className="p-4">{q.service}</td>
                    <td className="p-4">${q.amount}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${q.status === 'accepted' ? 'bg-green-100 text-green-700' : q.status === 'sent' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'}`}>{q.status}</span>
                      {q.viewed && q.status === 'sent' && <span className="ml-2 text-xs text-blue-600">Viewed</span>}
                    </td>
                    <td className="p-4 text-gray-500">{q.date}</td>
                    <td className="p-4"><button className="text-blue-600 text-xs hover:underline">View</button></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          </div>
        )}

        {/* TEMPLATES TAB */}
        {tab === 'templates' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Service Templates</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">+ New Template</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'House Cleaning', trade: 'Cleaning', items: 8, price: '$150-300' },
                { name: 'Pressure Washing', trade: 'Cleaning', items: 6, price: '$200-500' },
                { name: 'Lawn Maintenance', trade: 'Landscaping', items: 5, price: '$50-150' },
                { name: 'Portrait Photography', trade: 'Photography', items: 7, price: '$200-800' },
                { name: 'Logo Design', trade: 'Graphic Design', items: 4, price: '$300-2,000' },
                { name: 'SEO Audit', trade: 'SEO', items: 10, price: '$500-2,000' },
              ].map((t) => (
                <div key={t.name} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition cursor-pointer">
                  <h3 className="font-medium">{t.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{t.trade} • {t.items} items</p>
                  <p className="text-sm text-blue-600 mt-2">{t.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ANALYTICS TAB */}
        {tab === 'analytics' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Quote Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium mb-2">Win Rate by Service</h3>
                <div className="space-y-2">
                  {[
                    { service: 'House Cleaning', rate: 55 },
                    { service: 'Pressure Washing', rate: 45 },
                    { service: 'Landscaping', rate: 38 },
                    { service: 'Photography', rate: 52 },
                    { service: 'SEO', rate: 40 },
                  ].map((s) => (
                    <div key={s.service} className="flex items-center gap-3">
                      <span className="text-sm w-32">{s.service}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${s.rate}%` }}></div>
                      </div>
                      <span className="text-sm text-gray-500 w-10 text-right">{s.rate}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium mb-2">Revenue by Month</h3>
                <div className="space-y-2">
                  {[
                    { month: 'Jul', revenue: 8400 },
                    { month: 'Jun', revenue: 7200 },
                    { month: 'May', revenue: 6800 },
                    { month: 'Apr', revenue: 5900 },
                    { month: 'Mar', revenue: 5200 },
                  ].map((m) => (
                    <div key={m.month} className="flex items-center gap-3">
                      <span className="text-sm w-10">{m.month}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(m.revenue / 8400) * 100}%` }}></div>
                      </div>
                      <span className="text-sm text-gray-500 w-16 text-right">${m.revenue.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SETTINGS TAB */}
        {tab === 'settings' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
            <div className="space-y-4 max-w-lg">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label><input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" defaultValue="Solo Services LLC" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Email</label><input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" defaultValue="mike@example.com" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Phone</label><input type="tel" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" defaultValue="(555) 123-4567" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Default Markup (%)</label><input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" defaultValue="20" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Default Tax Rate (%)</label><input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" defaultValue="8.25" /></div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">Save Changes</button>
            </div>
          </div>
        )}
      </div>

      {/* New Quote Modal */}
      {showNewQuote && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowNewQuote(false)}>
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-semibold mb-4">Create New Quote</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Client Name</label><input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
                    <option>House Cleaning</option><option>Office Cleaning</option><option>Pressure Washing</option><option>Landscaping</option><option>Photography</option><option>Graphic Design</option><option>Web Design</option><option>SEO</option><option>Consulting</option><option>Handyman</option>
                  </select>
                </div>
              </div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label><textarea className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" rows={3} placeholder="Describe the job in plain English..."></textarea></div>
              <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-800">
                <strong>AI Quote:</strong> Describe the job and our AI will generate a complete estimate with materials and labor.
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setShowNewQuote(false)} className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">Cancel</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">Generate AI Quote</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
