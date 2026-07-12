import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SoloBid — Quote in 60 Seconds. Win More Jobs.',
  description: 'The simplest quoting tool for solo service providers. AI-powered estimates, professional proposals, and follow-up automation. $9/month.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
