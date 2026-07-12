'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SignUp() {
  const router = useRouter()
  const [form, setForm] = useState({ firstName:'', lastName:'', email:'', password:'', phone:'', company:'', trade:'', state:'' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) { const d = await res.json(); throw new Error(d.error || 'Failed') }
      router.push('/dashboard')
    } catch (err: unknown) { setError(err instanceof Error ? err.message : 'Failed') } finally { setLoading(false) }
  }

  const input = "mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
  const select = input

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex justify-center mb-6">
          <span className="text-3xl font-bold text-gray-900">Solo<span className="text-blue-600">Bid</span></span>
        </Link>
        <h2 className="text-center text-2xl font-bold text-gray-900">Create your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">30-day free trial. No credit card required.</p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-sm rounded-lg sm:px-10">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">{error}</div>}
            <div className="grid grid-cols-2 gap-3">
              <div><label className="block text-sm font-medium text-gray-700">First Name</label><input className={input} required value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} /></div>
              <div><label className="block text-sm font-medium text-gray-700">Last Name</label><input className={input} required value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} /></div>
            </div>
            <div><label className="block text-sm font-medium text-gray-700">Email</label><input type="email" className={input} required value={form.email} onChange={e => setForm({...form, email: e.target.value})} /></div>
            <div><label className="block text-sm font-medium text-gray-700">Password</label><input type="password" className={input} required minLength={8} value={form.password} onChange={e => setForm({...form, password: e.target.value})} /><p className="text-xs text-gray-400 mt-1">At least 8 characters</p></div>
            <div><label className="block text-sm font-medium text-gray-700">Phone</label><input type="tel" className={input} required placeholder="(555) 123-4567" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} /></div>
            <div><label className="block text-sm font-medium text-gray-700">Company Name</label><input className={input} required value={form.company} onChange={e => setForm({...form, company: e.target.value})} /></div>
            <div><label className="block text-sm font-medium text-gray-700">Primary Service</label>
              <select className={select} required value={form.trade} onChange={e => setForm({...form, trade: e.target.value})}>
                <option value="">Select service</option>
                {['Cleaning','Landscaping','Photography','Graphic Design','Web Design','SEO','Digital Marketing','Consulting','Coaching','Tutoring','Fitness','Event Planning','Catering','Moving','Junk Removal','Pressure Washing','Car Detailing','Handyman','Pest Control','Pool Service','Carpet Cleaning','Window Cleaning','Pet Grooming','Pet Sitting','Videography','Other'].map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div><label className="block text-sm font-medium text-gray-700">Primary State</label>
              <select className={select} required value={form.state} onChange={e => setForm({...form, state: e.target.value})}>
                <option value="">Select state</option>
                {['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'].map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 mt-2">
              {loading ? 'Creating account...' : 'Create Free Account'}
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Log in</Link></p>
        </div>
      </div>
    </div>
  )
}
