import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Hero */}
        <div className="mb-16">
          <h1 className="text-5xl font-black mb-4">
            About <span className="text-[#1db97a]">Garage</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Garage is Nigeria's first peer-to-peer seat marketplace —
            connecting private car owners and transporters with passengers
            travelling the same route.
          </p>
        </div>

        {/* Story */}
        <div className="mb-16">
          <h2 className="text-2xl font-black mb-6">Our story</h2>
          <div className="space-y-4 text-white/60 leading-relaxed">
            <p>
              Every day across Nigeria, millions of naira worth of empty seats
              travel from Lagos to Abuja, from Port Harcourt to Owerri, from
              Ibadan to Kaduna. At the same time, millions of Nigerians are
              paying overpriced fares or waiting hours for transport.
            </p>
            <p>
              Garage was built to fix this. We created a platform where drivers
              going anywhere can sell their empty seats to verified passengers —
              and where passengers can find affordable, reliable transport on any
              route at any time.
            </p>
            <p>
              We started in Lagos in 2026 and are rapidly expanding across all
              major Nigerian routes. Our mission is simple: no empty seat, no
              stranded passenger.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-black mb-8">What we stand for</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🛡️',
                title: 'Safety first',
                desc: 'Every driver is NIN-verified before they can post a trip. We publish a banned drivers list and investigate every complaint.',
              },
              {
                icon: '💰',
                title: 'Fair pricing',
                desc: 'No price gouging. Drivers set their own rates and passengers choose. Our platform fee is a flat 5% — transparent and fair.',
              },
              {
                icon: '🤝',
                title: 'Community trust',
                desc: 'Mutual ratings, real reviews, and a lost and found board. We build trust between strangers sharing a journey.',
              },
              {
                icon: '📦',
                title: 'More than seats',
                desc: 'Drivers also carry parcels in their boot space. Cheaper than courier services because the driver is already going.',
              },
              {
                icon: '🇳🇬',
                title: 'Built for Nigeria',
                desc: 'Cash payments accepted. USSD payment option. Nigerian phone numbers. Designed for how Nigerians actually travel.',
              },
              {
                icon: '🔒',
                title: 'Secure payments',
                desc: 'Powered by Paystack. Card, bank transfer, and USSD. Money held securely until your trip is confirmed.',
              },
            ].map(v => (
              <div key={v.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold mb-2">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-black mb-8">The company</h2>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-white/60 leading-relaxed mb-4">
              Garage is a product of <span className="text-white font-semibold">ArcheriQ Technologies Limited</span>,
              a Nigerian technology company building digital infrastructure
              for everyday Nigerian life.
            </p>
            <p className="text-white/60 leading-relaxed">
              ArcheriQ is registered in Nigeria and headquartered in Lagos.
              We are committed to building products that solve real problems
              for real Nigerians.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { val: '2026',    label: 'Founded' },
            { val: 'Lagos',   label: 'Headquarters' },
            { val: 'Nigeria', label: 'Operating in' },
            { val: '5,000+',  label: 'Drivers registered' },
          ].map(s => (
            <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <div className="text-xl font-black text-[#1db97a]">{s.val}</div>
              <div className="text-white/40 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#1db97a]/10 border border-[#1db97a]/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-black mb-3">Ready to move smarter?</h2>
          <p className="text-white/50 mb-6">
            Join thousands of Nigerians already using Garage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-[#1db97a] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#149558] transition"
            >
              Book a seat
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition"
            >
              Contact us
            </Link>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 mt-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl font-black">
            Gara<span className="text-[#1db97a]">ge</span>
          </div>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="/about" className="hover:text-white transition">About</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
            <Link href="/complaints" className="hover:text-white transition">Complaints</Link>
            <Link href="/banned-drivers" className="hover:text-white transition">Banned drivers</Link>
          </div>
          <div className="text-sm text-white/40">
            2026 ArcheriQ Technologies Limited
          </div>
        </div>
      </footer>
    </main>
  )
}