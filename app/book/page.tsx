'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import Navbar from '../components/Navbar'


export default function BookPage() {
  const [trips, setTrips]           = useState<any[]>([])
  const [loading, setLoading]       = useState(true)
  const [origin, setOrigin]         = useState('')
  const [destination, setDestination] = useState('')

  useEffect(() => {
    fetchTrips()
  }, [])

  const fetchTrips = async () => {
    setLoading(true)
    let query = supabase
      .from('trips')
      .select('*, driver:users!driver_id(full_name, rating, total_trips)')
      .eq('status', 'open')
      .gt('available_seats', 0)

    if (origin)      query = query.ilike('origin', `%${origin}%`)
    if (destination) query = query.ilike('destination', `%${destination}%`)

    const { data } = await query
    setTrips(data || [])
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      {/* Nav */}
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-black mb-2">Book a seat</h1>
        <p className="text-white/50 mb-8">Find a verified driver going your way</p>

        {/* Search */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">From</label>
              <input
                type="text"
                placeholder="e.g. Lagos"
                value={origin}
                onChange={e => setOrigin(e.target.value)}
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a]"
              />
            </div>
            <div>
              <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">To</label>
              <input
                type="text"
                placeholder="e.g. Abuja"
                value={destination}
                onChange={e => setDestination(e.target.value)}
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a]"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={fetchTrips}
                className="w-full bg-[#1db97a] text-white py-3 rounded-xl font-bold hover:bg-[#149558] transition"
              >
                Search trips
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {loading ? (
          <div className="text-center text-white/40 py-12">Loading trips...</div>
        ) : trips.length === 0 ? (
          <div className="text-center text-white/40 py-12">
            <div className="text-4xl mb-4">🔍</div>
            <p>No trips found. Try a different route.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {trips.map(trip => (
              <div
                key={trip.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#1db97a]/30 transition"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      {trip.origin} → {trip.destination}
                    </h3>
                    <p className="text-white/40 text-sm mt-1">
                      {trip.departure_date} · {trip.departure_time} · {trip.meeting_point}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-[#1db97a]">
                      ₦{Number(trip.price_per_seat).toLocaleString()}
                    </div>
                    <div className="text-white/40 text-xs">per seat</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1db97a] flex items-center justify-center text-sm font-bold">
                      {(trip.driver?.full_name ?? 'DR').split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{trip.driver?.full_name ?? 'Driver'}</p>
                      <p className="text-white/40 text-xs">
                        {trip.available_seats} seats left · {trip.vehicle_name}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {trip.accept_cash && (
                      <span className="text-xs bg-[#fff8e6] text-[#a07000] px-3 py-1 rounded-full font-medium">
                        Cash OK
                      </span>
                    )}
                    <button className="bg-[#1db97a] text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-[#149558] transition">
                      Book seat
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}