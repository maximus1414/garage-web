'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function ContactPage() {
  const [name, setName]         = useState('')
  const [email, setEmail]       = useState('')
  const [phone, setPhone]       = useState('')
  const [subject, setSubject]   = useState('')
  const [message, setMessage]   = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
     <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-black mb-2">Contact us</h1>
        <p className="text-white/50 mb-12">
          We respond to all messages within 24 hours.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-black mb-6">Get in touch</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: '📧',
                    label: 'Email',
                    value: 'hello@garageapp.ng',
                    sub: 'For general enquiries',
                  },
                  {
                    icon: '🛡️',
                    label: 'Safety',
                    value: 'safety@garageapp.ng',
                    sub: 'For urgent safety concerns',
                  },
                  {
                    icon: '💼',
                    label: 'Business',
                    value: 'business@garageapp.ng',
                    sub: 'For partnerships and corporate bookings',
                  },
                  {
                    icon: '📞',
                    label: 'Phone',
                    value: '+234 800 GARAGE',
                    sub: 'Mon–Fri, 8am–6pm WAT',
                  },
                ].map(c => (
                  <div key={c.label} className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                    <div className="text-2xl">{c.icon}</div>
                    <div>
                      <div className="text-xs text-white/40 uppercase tracking-wider">{c.label}</div>
                      <div className="font-bold mt-0.5">{c.value}</div>
                      <div className="text-white/40 text-sm">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-black mb-4">Office</h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="font-bold">ArcheriQ Technologies Limited</p>
                <p className="text-white/50 text-sm mt-1">Lagos, Nigeria</p>
                <p className="text-white/30 text-xs mt-3">
                  RC Number: 8330815
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-black mb-4">Quick links</h2>
              <div className="space-y-2">
                {[
                  { label: 'File a complaint', href: '/complaints' },
                  { label: 'Report a driver', href: '/complaints' },
                  { label: 'Lost and found', href: '/lost-found' },
                  { label: 'Track a parcel', href: '/track' },
                ].map(l => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-xl hover:border-[#1db97a]/30 transition text-sm"
                  >
                    <span>{l.label}</span>
                    <span className="text-[#1db97a]">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            {submitted ? (
              <div className="bg-[#1db97a]/10 border border-[#1db97a]/30 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h2 className="text-2xl font-black mb-2">Message sent!</h2>
                <p className="text-white/50">
                  We will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <h2 className="text-xl font-black mb-6">Send us a message</h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Name</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Phone</label>
                    <input
                      type="tel"
                      placeholder="+234"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a]"
                  />
                </div>

                <div>
                  <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Subject</label>
                  <input
                    type="text"
                    placeholder="What is this about?"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a]"
                  />
                </div>

                <div>
                  <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Message</label>
                  <textarea
                    placeholder="Tell us how we can help..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    rows={6}
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a] resize-none"
                  />
                </div>

                <button
                  onClick={() => setSubmitted(true)}
                  disabled={!name || !email || !message}
                  className="w-full bg-[#1db97a] text-white py-4 rounded-2xl font-bold hover:bg-[#149558] transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Send message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10 px-6 py-8 mt-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl font-black">
            Gara<span className="text-[#1db97a]">ge</span>
          </div>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="/about" className="hover:text-white transition">About</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
            <Link href="/complaints" className="hover:text-white transition">Complaints</Link>
          </div>
          <div className="text-sm text-white/40">
            2026 ArcheriQ Technologies Limited
          </div>
        </div>
      </footer>
    </main>
  )
}