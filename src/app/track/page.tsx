'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { supabase } from '../../lib/supabase'

export default function TrackPage() {
  const [trackingId, setTrackingId] = useState('')
  const [parcel, setParcel]         = useState<any>(null)
  const [loading, setLoading]       = useState(false)
  const [error, setError]           = useState('')

  const handleTrack = async () => {
    if (!trackingId) return
    setLoading(true)
    setError('')
    setParcel(null)

    const { data, error } = await supabase
      .from('parcels')
      .select('*')
      .eq('tracking_id', trackingId.toUpperCase())
      .single()

    if (error || !data) {
      setError('Parcel not found. Please check your tracking ID.')
    } else {
      setParcel(data)
    }
    setLoading(false)
  }

  const STATUS_STEPS = ['pending', 'collected', 'in_transit', 'delivered']
  const currentStep  = parcel ? STATUS_STEPS.indexOf(parcel.status) : -1

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      <Navbar />

      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-black mb-2">Track your parcel</h1>
        <p className="text-white/50 mb-8">Enter your tracking ID to see where your parcel is</p>

        <div className="flex gap-3 mb-8">
          <input
            type="text"
            placeholder="e.g. GRG-PCL-8842"
            value={trackingId}
            onChange={e => setTrackingId(e.target.value.toUpperCase())}
            className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a] font-mono"
          />
          <button onClick={handleTrack} disabled={loading || !trackingId} className="bg-[#1db97a] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#149558] transition disabled:opacity-40">
            {loading ? 'Searching...' : 'Track'}
          </button>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 text-red-400 mb-6">{error}</div>
        )}

        {parcel && (
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-black">{parcel.tracking_id}</h2>
                  <p className="text-white/40 text-sm mt-1">{parcel.origin} → {parcel.destination}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${parcel.status === 'delivered' ? 'bg-[#1db97a]/20 text-[#1db97a]' : 'bg-[#f5a623]/20 text-[#f5a623]'}`}>
                  {parcel.status.replace('_', ' ')}
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { key: 'pending',    label: 'Parcel registered',   desc: 'Booking confirmed' },
                  { key: 'collected',  label: 'Collected by driver',  desc: 'QR code scanned at handover' },
                  { key: 'in_transit', label: 'In transit',           desc: 'On the way to destination' },
                  { key: 'delivered',  label: 'Delivered',            desc: 'OTP confirmed by recipient' },
                ].map((step, idx) => {
                  const isDone = idx <= currentStep
                  return (
                    <div key={step.key} className="flex gap-4">
                      <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5 ${isDone ? 'bg-[#1db97a] text-white' : 'bg-white/10 text-white/30'}`}>
                        {isDone ? '✓' : ''}
                      </div>
                      <div>
                        <p className={`font-medium ${isDone ? 'text-white' : 'text-white/30'}`}>{step.label}</p>
                        <p className="text-white/30 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
              <h3 className="font-bold mb-4">Parcel details</h3>
              <div className="flex justify-between text-sm">
                <span className="text-white/40">Description</span>
                <span>{parcel.description}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/40">Recipient</span>
                <span>{parcel.recipient_name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/40">Delivery address</span>
                <span className="text-right max-w-xs">{parcel.recipient_address}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}