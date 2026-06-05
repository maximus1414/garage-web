import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="text-2xl font-black tracking-tight">
          Gara<span className="text-[#1db97a]">ge</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
          <Link href="/book" className="hover:text-white transition">Book a seat</Link>
          <Link href="/parcels" className="hover:text-white transition">Send parcel</Link>
          <Link href="/track" className="hover:text-white transition">Track parcel</Link>
          <Link href="/lost-found" className="hover:text-white transition">Lost and found</Link>
          <Link href="/banned-drivers" className="hover:text-white transition">Banned drivers</Link>
        </div>
        <Link
          href="/book"
          className="bg-[#1db97a] text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-[#149558] transition"
        >
          Book now
        </Link>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-[#1db97a]/10 border border-[#1db97a]/20 rounded-full px-4 py-2 text-sm text-[#1db97a] font-medium mb-8">
          Now available across Nigeria
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6">
          Sell seats.{' '}
          <span className="text-[#1db97a]">Book seats.</span>{' '}
          Move.
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Garage connects private car owners and transporters with passengers
          going the same way. No empty seats. No overpriced tickets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="bg-[#1db97a] text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-[#149558] transition"
          >
            Search trips
          </Link>
          <Link
            href="/parcels"
            className="bg-white/10 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white/20 transition border border-white/10"
          >
            Send a parcel
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-3xl font-black text-center mb-12">
          Everything you need to move across Nigeria
        </h2>
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#1db97a]/30 transition">
            <div className="text-4xl mb-4">🪑</div>
            <h3 className="text-lg font-bold mb-2">Book a seat</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Find verified drivers going your route. Choose your seat, pay securely, travel safely.
            </p>
            <Link href="/book" className="text-[#1db97a] text-sm font-semibold hover:underline">
              Search trips
            </Link>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#1db97a]/30 transition">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-lg font-bold mb-2">Send a parcel</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Send parcels with drivers already making the trip. Cheaper than courier services.
            </p>
            <Link href="/parcels" className="text-[#1db97a] text-sm font-semibold hover:underline">
              Send parcel
            </Link>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#1db97a]/30 transition">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-lg font-bold mb-2">Track your parcel</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Real-time tracking with QR code handover and OTP delivery confirmation.
            </p>
            <Link href="/track" className="text-[#1db97a] text-sm font-semibold hover:underline">
              Track now
            </Link>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#1db97a]/30 transition">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-bold mb-2">Lost and found</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Lost something on a trip? Post it here. Found something? Return it to its owner.
            </p>
            <Link href="/lost-found" className="text-[#1db97a] text-sm font-semibold hover:underline">
              View lost items
            </Link>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#1db97a]/30 transition">
            <div className="text-4xl mb-4">🚫</div>
            <h3 className="text-lg font-bold mb-2">Banned drivers</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              We publish a list of drivers banned from our platform to keep you safe.
            </p>
            <Link href="/banned-drivers" className="text-[#1db97a] text-sm font-semibold hover:underline">
              View list
            </Link>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#1db97a]/30 transition">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-lg font-bold mb-2">File a complaint</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Had a bad experience? Report it. We investigate every complaint seriously.
            </p>
            <Link href="/complaints" className="text-[#1db97a] text-sm font-semibold hover:underline">
              File complaint
            </Link>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-black text-[#1db97a]">10,000+</div>
            <div className="text-white/50 text-sm mt-1">Trips posted</div>
          </div>
          <div>
            <div className="text-3xl font-black text-[#1db97a]">50,000+</div>
            <div className="text-white/50 text-sm mt-1">Passengers moved</div>
          </div>
          <div>
            <div className="text-3xl font-black text-[#1db97a]">5,000+</div>
            <div className="text-white/50 text-sm mt-1">Verified drivers</div>
          </div>
          <div>
            <div className="text-3xl font-black text-[#1db97a]">4.8 stars</div>
            <div className="text-white/50 text-sm mt-1">Average rating</div>
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-white/10 text-center">
        <h2 className="text-3xl font-black mb-4">Get the Garage app</h2>
        <p className="text-white/50 mb-8">
          Book seats, track parcels and manage your trips on the go.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-white/10 border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-3 cursor-pointer hover:bg-white/20 transition">
            <div className="text-left">
              <div className="text-xs text-white/50">Download on the</div>
              <div className="font-bold">App Store</div>
            </div>
          </div>
          <div className="bg-white/10 border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-3 cursor-pointer hover:bg-white/20 transition">
            <div className="text-left">
              <div className="text-xs text-white/50">Get it on</div>
              <div className="font-bold">Google Play</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl font-black">
            Gara<span className="text-[#1db97a]">ge</span>
          </div>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="/complaints" className="hover:text-white transition">Complaints</Link>
            <Link href="/lost-found" className="hover:text-white transition">Lost and found</Link>
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