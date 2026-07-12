import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-2xl font-bold text-gray-900">Solo<span className="text-blue-600">Bid</span></span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-gray-900 font-medium">Log in</Link>
              <Link href="/signup" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-medium">Start Free Trial</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-green-50 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-6">Trusted by 500+ solo service providers</div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Quote in 60 seconds.<br />Win more jobs.
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            The simplest quoting tool for solo service providers. AI-powered estimates, professional proposals, and follow-up automation. $9/month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/25">
              Start Free — No Credit Card
            </Link>
            <a href="#how-it-works" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 transition">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">The $500/Hour Mistake</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Solo service providers spend 2-4 hours per estimate. That&apos;s $500-1,000 of lost revenue per quote. Most use spreadsheets, Word docs, or nothing. The result: slow response time, lost bids, and underpricing.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: '2-4hrs', label: 'per estimate' },
              { stat: '60%', label: 'use spreadsheets' },
              { stat: '$500', label: 'lost per slow quote' },
              { stat: '40%', label: 'undercharge' },
            ].map((item) => (
              <div key={item.label} className="text-center bg-white rounded-lg p-6 shadow-sm">
                <div className="text-4xl font-bold text-red-600 mb-2">{item.stat}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Describe the job', desc: 'Tell us what the customer needs in plain English.' },
              { num: '2', title: 'AI generates quote', desc: 'Our AI creates a complete estimate with materials and labor.' },
              { num: '3', title: 'Review & send', desc: 'Adjust pricing, add your markup, and send as a proposal.' },
              { num: '4', title: 'Track & follow up', desc: 'Know when they view it, auto-remind, and win more jobs.' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{step.num}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Everything You Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🤖', title: 'AI-Powered Quotes', desc: 'Describe the job in plain English. AI generates a complete estimate with materials and labor.' },
              { icon: '📋', title: '20+ Service Templates', desc: 'Pre-built templates for cleaning, landscaping, photography, design, consulting, and more.' },
              { icon: '💰', title: 'Markup Calculator', desc: 'Input your overhead costs. Calculate desired profit margin. Auto-apply markup to quotes.' },
              { icon: '📄', title: 'Professional Proposals', desc: 'Beautiful templates with itemized breakdown, terms, and conditions.' },
              { icon: '✍️', title: 'Digital Signing', desc: 'Customers sign proposals digitally. No printing, no scanning, no hassle.' },
              { icon: '📱', title: 'Mobile-First', desc: 'Quote from your phone. Work from anywhere. No desktop required.' },
            ].map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Built for Every Service</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">20+ service categories with pre-built templates.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Cleaning', 'Landscaping', 'Photography', 'Graphic Design', 'Web Design', 'SEO', 'Consulting', 'Coaching', 'Tutoring', 'Fitness', 'Event Planning', 'Catering', 'Moving', 'Junk Removal', 'Pressure Washing', 'Car Detailing', 'Handyman', 'Pest Control', 'Pool Service', 'Carpet Cleaning'].map((service) => (
              <span key={service} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium">{service}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Simple Pricing</h2>
          <p className="text-gray-600 text-center mb-12">Start free. Upgrade when you need more.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Free', price: '0', features: ['3 quotes/month', 'Basic templates', 'No AI', 'No proposals', 'Logo watermark'], cta: 'Start Free', popular: false },
              { name: 'Solo', price: '9', features: ['Unlimited quotes', 'AI-powered estimates', '20+ trade templates', 'Markup calculator', 'Basic proposals', 'Email delivery'], cta: 'Start Free Trial', popular: true },
              { name: 'Pro', price: '19', features: ['Everything in Solo', 'Digital signing', 'Follow-up automation', 'Estimate vs actual tracking', 'Advanced analytics', 'SMS delivery', 'Priority support'], cta: 'Start Free Trial', popular: false },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-lg p-6 ${plan.popular ? 'bg-blue-600 text-white ring-4 ring-blue-600' : 'bg-white shadow-sm'}`}>
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-2 mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className={`${plan.popular ? 'text-blue-200' : 'text-gray-500'}`}>/mo</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/signup" className={`block w-full text-center py-3 rounded-lg font-semibold transition ${plan.popular ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Solo Providers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: 'I used to spend 3 hours per estimate. Now it takes 5 minutes. I&apos;ve doubled my quote volume and my win rate went up 30%.', name: 'Mike R.', role: 'Cleaning Business, Houston TX', color: 'blue' },
              { quote: 'The AI quotes are surprisingly accurate. I just describe the job and it generates a complete estimate. My customers love the professional proposals.', name: 'Sarah K.', role: 'Landscaping, Orlando FL', color: 'green' },
              { quote: 'Best $9/month I ever spent. I was using Google Docs for proposals before. This is 10x better and half the price.', name: 'James D.', role: 'Photography, Los Angeles CA', color: 'purple' },
            ].map((t) => (
              <div key={t.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <p className="text-gray-600 mb-4 italic">&quot;{t.quote}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-${t.color}-100 rounded-full flex items-center justify-center`}>
                    <span className={`text-${t.color}-600 font-semibold text-sm`}>{t.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: 'What services do you support?', a: 'Cleaning, landscaping, photography, graphic design, web design, SEO, consulting, coaching, tutoring, fitness, event planning, catering, moving, junk removal, pressure washing, car detailing, handyman, pest control, pool service, carpet cleaning, and more.' },
              { q: 'How does AI pricing work?', a: 'Describe the job in plain English. Our AI generates a complete estimate with materials, labor, and suggested pricing based on your trade and location.' },
              { q: 'Can I customize the proposals?', a: 'Yes. You can add your logo, adjust pricing, add notes, and customize terms and conditions.' },
              { q: 'Is there a free trial?', a: 'Yes. The Solo plan includes a 30-day free trial. No credit card required.' },
              { q: 'Can I use it on my phone?', a: 'Yes. SoloBid is mobile-first. You can create quotes from anywhere using your phone.' },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-lg p-5 shadow-sm">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Quote in 60 Seconds?</h2>
          <p className="text-xl text-blue-100 mb-8">Start your free trial today. No credit card required.</p>
          <Link href="/signup" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition inline-block shadow-lg">
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xl font-bold text-gray-900">Solo<span className="text-blue-600">Bid</span></span>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-gray-700">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-700">Terms</Link>
            <Link href="/contact" className="hover:text-gray-700">Contact</Link>
          </div>
          <div className="text-sm text-gray-400">© 2026 SoloBid</div>
        </div>
      </footer>
    </div>
  )
}
