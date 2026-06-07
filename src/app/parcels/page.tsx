'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'

const PARCEL_SIZES = [
  { id: 'envelope', name: 'Envelope', desc: 'Documents · max 1kg', price: 500 },
  { id: 'small',    name: 'Small box', desc: 'Shoes, clothes · max 5kg', price: 1200 },
  { id: 'medium',   name: 'Medium box', desc: 'Electronics · max 15kg', price: 2500 },
  { id: 'large',    name: 'Large item', desc: 'Luggage, TV · max 30kg', price: 4000 },
]

export default function ParcelsPage() {
  const [step, setStep]                     = useState(1)
  const [selectedSize, setSelectedSize]     = useState('')
  const [description, setDescription]       = useState('')
  const [origin, setOrigin]                 = useState('')
  const [destination, setDestination]       = useState('')
  const [recipientName, setRecipientName]   = useState('')
  const [recipientPhone, setRecipientPhone] = useState('')
  const [recipientAddress, setRecipientAddress] = useState('')
  const [submitted, setSubmitted]           = useState(false)

  const selectedParcel = PARCEL_SIZES.find(s => s.id === selectedSize)

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      <Navbar />

      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-black mb-2">Send a parcel</h1>
        <p className="text-white/50 mb-8">Send with a driver already making the trip — cheaper than courier services</p>

        {submitted ? (
          <div className="bg-[#1db97a]/10 border border-[#1db97a]/30 rounded-2xl p-8 text-center">
            <div className="text-5xl mb-4">📦</div>
            <h2 className="text-2xl font-black mb-2">Parcel request submitted!</h2>
            <p className="text-white/50 mb-6">We will match you with a driver going your route and send you a tracking ID.</p>
            <button onClick={() => { setSubmitted(false); setStep(1); setSelectedSize('') }} className="bg-[#1db97a] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#149558] transition">
              Send another parcel
            </button>
          </div>
        ) : (
          <>
            <div className="flex gap-2 mb-8">
              {[1, 2].map(s => (
                <div key={s} className={`h-1 flex-1 rounded-full ${s <= step ? 'bg-[#1db97a]' : 'bg-white/10'}`} />
              ))}
            </div>

            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-4">What are you sending?</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {PARCEL_SIZES.map(size => (
                      <button key={size.id} onClick={() => setSelectedSize(size.id)} className={`p-4 rounded-2xl border-2 text-left transition ${selectedSize === size.id ? 'border-[#1db97a] bg-[#1db97a]/10' : 'border-white/10 hover:border-white/20'}`}>
                        <div className="font-bold mb-1">{size.name}</div>
                        <div className="text-white/40 text-sm">{size.desc}</div>
                        <div className="text-[#1db97a] font-bold mt-2">from ₦{size.price.toLocaleString()}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Description</label>
                  <input type="text" placeholder="e.g. Nike sneakers, size 42" value={description} onChange={e => setDescription(e.target.value)} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a]" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">From</label>
                    <input type="text" placeholder="e.g. Lagos" value={origin} onChange={e => setOrigin(e.target.value)} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a]" />
                  </div>
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">To</label>
                    <input type="text" placeholder="e.g. Abuja" value={destination} onChange={e => setDestination(e.target.value)} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a]" />
                  </div>
                </div>

                <button onClick={() => setStep(2)} disabled={!selectedSize || !description || !origin || !destination} className="w-full bg-[#1db97a] text-white py-4 rounded-2xl font-bold hover:bg-[#149558] transition disabled:opacity-40 disabled:cursor-not-allowed">
                  Next — Recipient details
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold">Recipient details</h2>

                <div>
                  <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Recipient name</label>
                  <input type="text" placeholder="Full name" value={recipientName} onChange={e => setRecipientName(e.target.value)} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a]" />
                </div>

                <div>
                  <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Recipient phone</label>
                  <input type="tel" placeholder="+234" value={recipientPhone} onChange={e => setRecipientPhone(e.target.value)} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a]" />
                </div>

                <div>
                  <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Delivery address</label>
                  <textarea placeholder="Full address in destination city" value={recipientAddress} onChange={e => setRecipientAddress(e.target.value)} rows={3} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a] resize-none" />
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40">Parcel</span>
                    <span>{selectedParcel?.name} · {description}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40">Route</span>
                    <span>{origin} → {destination}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-white/40">Starting from</span>
                    <span className="text-[#1db97a]">₦{selectedParcel?.price.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button onClick={() => setStep(1)} className="flex-1 border border-white/10 text-white py-4 rounded-2xl font-bold hover:bg-white/5 transition">
                    Back
                  </button>
                  <button onClick={() => setSubmitted(true)} disabled={!recipientName || !recipientPhone || !recipientAddress} className="flex-1 bg-[#1db97a] text-white py-4 rounded-2xl font-bold hover:bg-[#149558] transition disabled:opacity-40">
                    Submit request
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  )
}