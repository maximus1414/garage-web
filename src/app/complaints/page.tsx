'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'

const COMPLAINT_TYPES = [
  'Reckless driving',
  'Fraud / payment issues',
  'Harassment',
  'Vehicle condition',
  'Route deviation',
  'Overcharging',
  'Parcel not delivered',
  'Other',
]

export default function ComplaintsPage() {
  const [complaintType, setComplaintType] = useState('')
  const [driverName, setDriverName]       = useState('')
  const [route, setRoute]                 = useState('')
  const [date, setDate]                   = useState('')
  const [description, setDescription]     = useState('')
  const [contactName, setContactName]     = useState('')
  const [contactPhone, setContactPhone]   = useState('')
  const [submitted, setSubmitted]         = useState(false)
  const [refNumber, setRefNumber]         = useState('')

  const handleSubmit = () => {
    const ref = 'GRG-CMP-' + Math.floor(Math.random() * 90000 + 10000)
    setRefNumber(ref)
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      <Navbar />

      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-black mb-2">File a complaint</h1>
        <p className="text-white/50 mb-8">We take every complaint seriously. Our team investigates within 24 hours.</p>

        {submitted ? (
          <div className="bg-[#1db97a]/10 border border-[#1db97a]/30 rounded-2xl p-8 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-2xl font-black mb-2">Complaint submitted</h2>
            <p className="text-white/50 mb-4">Your complaint reference number is:</p>
            <div className="bg-white/10 rounded-xl px-6 py-3 font-mono text-xl font-bold text-[#1db97a] mb-6">{refNumber}</div>
            <p className="text-white/30 text-sm">Save this reference. Our team will contact you within 24 hours.</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <label className="text-xs text-white/40 uppercase tracking-wider mb-3 block">Type of complaint</label>
              <div className="grid grid-cols-2 gap-2">
                {COMPLAINT_TYPES.map(type => (
                  <button
                    key={type}
                    onClick={() => setComplaintType(type)}
                    className={`p-3 rounded-xl text-sm text-left transition ${complaintType === type ? 'bg-[#1db97a]/20 border border-[#1db97a] text-[#1db97a]' : 'bg-white/5 border border-white/10 text-white/50 hover:bg-white/10'}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Driver name (if known)</label>
              <input type="text" placeholder="Full name of driver" value={driverName} onChange={e => setDriverName(e.target.value)} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a]" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Route</label>
                <input type="text" placeholder="e.g. Lagos → Abuja" value={route} onChange={e => setRoute(e.target.value)} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a]" />
              </div>
              <div>
                <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Date</label>
                <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1db97a]" />
              </div>
            </div>

            <div>
              <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Describe what happened</label>
              <textarea placeholder="Please provide as much detail as possible..." value={description} onChange={e => setDescription(e.target.value)} rows={5} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a] resize-none" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Your name</label>
                <input type="text" placeholder="Full name" value={contactName} onChange={e => setContactName(e.target.value)} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a]" />
              </div>
              <div>
                <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Your phone</label>
                <input type="tel" placeholder="+234" value={contactPhone} onChange={e => setContactPhone(e.target.value)} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a]" />
              </div>
            </div>

            <button onClick={handleSubmit} disabled={!complaintType || !description || !contactName || !contactPhone} className="w-full bg-red-500 text-white py-4 rounded-2xl font-bold hover:bg-red-600 transition disabled:opacity-40 disabled:cursor-not-allowed">
              Submit complaint
            </button>
          </div>
        )}
      </div>
    </main>
  )
}