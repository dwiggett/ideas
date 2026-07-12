'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      if (!res.ok) { const d = await res.json(); throw new Error(d.error || 'Invalid credentials') }
      router.push('/dashboard')
    } catch (err: unknown) { setError(err instanceof Error ? err.message : 'Failed') } finally { setLoading(false) }
  }

  const input = "mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex justify-center mb-6">
          <span className="text-3xl font-bold text-gray-900">Solo<span className="text-blue-600">Bid</span></span>
        </Link>
        <h2 className="text-center text-2xl font-bold text-gray-900">Sign in</h2>
        <p className="mt-2 text-center text-sm text-gray-600">Or <Link href="/signup" className="text-blue-600 hover:underline">start your free trial</Link></p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-sm rounded-lg sm:px-10">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">{error}</div>}
            <div><label className="block text-sm font-medium text-gray-700">Email</label><input type="email" className={input} required value={email} onChange={e => setEmail(e.target.value)} /></div>
            <div><label className="block text-sm font-medium text-gray-700">Password</label><input type="password" className={input} required value={password} onChange={e => setPassword(e.target.value)} /></div>
            <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50">
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
