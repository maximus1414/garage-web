'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const BANNED_DRIVERS = [
  {
    id: '1',
    name: 'Chukwuemeka O.',
    initials: 'CO',
    reason: 'Fraud — collected payment and abandoned passengers',
    route: 'Lagos → Abuja',
    date: 'March 2026',
    severity: 'high',
  },
  {
    id: '2',
    name: 'Biodun A.',
    initials: 'BA',
    reason: 'Multiple complaints of reckless driving and speeding',
    route: 'Lagos → Ibadan',
    date: 'April 2026',
    severity: 'high',
  },
  {
    id: '3',
    name: 'Musa I.',
    initials: 'MI',
    reason: 'Harassment of female passengers',
    route: 'Abuja — Kaduna',
    date: 'May 2026',
    severity: 'high',
  },
]

export default function BannedDriversPage() {
  const [search, setSearch] = useState('')

  const filtered = BANNED_DRIVERS.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.reason.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-black mb-2">Banned drivers</h1>
        <p className="text-white/50 mb-2">
          Drivers permanently removed from the Garage platform for serious violations.
        </p>
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-8 text-sm text-red-400">
          If you recognise any of these drivers operating on our platform, please report them immediately.
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by name or reason..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a] mb-6"
        />

        <div className="space-y-4">
          {filtered.map(driver => (
            <div
              key={driver.id}
              className="bg-white/5 border border-red-500/20 rounded-2xl p-6"
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold flex-shrink-0">
                  {driver.initials}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold">{driver.name}</h3>
                    <span className="text-xs bg-red-500/20 text-red-400 px-3 py-1 rounded-full font-medium">
                      BANNED
                    </span>
                  </div>
                  <p className="text-white/50 text-sm mt-1">{driver.reason}</p>
                  <div className="flex gap-4 mt-3 text-xs text-white/30">
                    <span>Route: {driver.route}</span>
                    <span>Banned: {driver.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
          <h3 className="font-bold mb-2">Know a driver who should be banned?</h3>
          <p className="text-white/40 text-sm mb-4">
            Report dangerous or fraudulent drivers to keep our community safe.
          </p>
          <Link
            href="/complaints"
            className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-600 transition inline-block"
          >
            Report a driver
          </Link>
        </div>
      </div>
    </main>
  )
}