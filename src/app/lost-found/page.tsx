'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'

const SAMPLE_ITEMS = [
  {
    id: '1',
    title: 'Black Samsung Galaxy phone',
    description: 'Lost on Lagos to Abuja trip. Black case with cracked screen protector.',
    route: 'Lagos → Abuja',
    date: '2 June 2026',
    contact: '+234 805 xxx xxxx',
    type: 'lost',
    reward: '₦20,000 reward',
  },
  {
    id: '2',
    title: 'Brown leather wallet',
    description: 'Found in back seat of Toyota Sienna. Contains ID cards and cash.',
    route: 'Lagos → Ibadan',
    date: '1 June 2026',
    contact: '+234 803 xxx xxxx',
    type: 'found',
    reward: '',
  },
  {
    id: '3',
    title: 'Blue travel bag',
    description: 'Lost medium-sized blue bag with clothes and documents inside.',
    route: 'Abuja → Kaduna',
    date: '30 May 2026',
    contact: '+234 807 xxx xxxx',
    type: 'lost',
    reward: '₦10,000 reward',
  },
]

export default function LostFoundPage() {
  const [filter, setFilter]       = useState<'all' | 'lost' | 'found'>('all')
  const [showForm, setShowForm]   = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [title, setTitle]         = useState('')
  const [description, setDescription] = useState('')
  const [route, setRoute]         = useState('')
  const [contact, setContact]     = useState('')
  const [type, setType]           = useState<'lost' | 'found'>('lost')

  const filtered = SAMPLE_ITEMS.filter(i => filter === 'all' || i.type === filter)

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-black mb-2">Lost and found</h1>
            <p className="text-white/50">Lost something on a trip? Post it here.</p>
          </div>
          <button onClick={() => setShowForm(!showForm)} className="bg-[#1db97a] text-white px-5 py-3 rounded-xl font-bold hover:bg-[#149558] transition">
            + Post item
          </button>
        </div>

        {showForm && !submitted && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 space-y-4">
            <h2 className="text-xl font-bold">Post a lost or found item</h2>
            <div className="flex gap-3">
              {(['lost', 'found'] as const).map(t => (
                <button key={t} onClick={() => setType(t)} className={`flex-1 py-3 rounded-xl font-bold transition ${type === t ? 'bg-[#1db97a] text-white' : 'bg-white/10 text-white/50 hover:bg-white/20'}`}>
                  I {t} something
                </button>
              ))}
            </div>
            <input type="text" placeholder="Item name" value={title} onChange={e => setTitle(e.target.value)} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a]" />
            <textarea placeholder="Describe the item in detail..." value={description} onChange={e => setDescription(e.target.value)} rows={3} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a] resize-none" />
            <input type="text" placeholder="Route (e.g. Lagos → Abuja)" value={route} onChange={e => setRoute(e.target.value)} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a]" />
            <input type="text" placeholder="Contact number" value={contact} onChange={e => setContact(e.target.value)} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#1db97a]" />
            <button onClick={() => setSubmitted(true)} disabled={!title || !description || !route || !contact} className="w-full bg-[#1db97a] text-white py-4 rounded-2xl font-bold hover:bg-[#149558] transition disabled:opacity-40">
              Submit post
            </button>
          </div>
        )}

        {submitted && (
          <div className="bg-[#1db97a]/10 border border-[#1db97a]/30 rounded-2xl p-6 mb-8 text-center">
            <div className="text-4xl mb-3">✅</div>
            <h2 className="text-xl font-bold mb-2">Post submitted!</h2>
            <p className="text-white/50">Your post will appear once reviewed by our team.</p>
          </div>
        )}

        <div className="flex gap-3 mb-6">
          {(['all', 'lost', 'found'] as const).map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-xl text-sm font-medium transition ${filter === f ? 'bg-[#1db97a] text-white' : 'bg-white/10 text-white/50 hover:bg-white/20'}`}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map(item => (
            <div key={item.id} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${item.type === 'lost' ? 'bg-red-500/20 text-red-400' : 'bg-[#1db97a]/20 text-[#1db97a]'}`}>
                  {item.type.toUpperCase()}
                </div>
              </div>
              <p className="text-white/50 text-sm mb-3">{item.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-white/40">
                <span>Route: {item.route}</span>
                <span>Date: {item.date}</span>
                {item.reward && <span className="text-[#f5a623] font-medium">{item.reward}</span>}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-white/30 text-sm">Contact: {item.contact}</span>
                <button className="text-[#1db97a] text-sm font-medium hover:underline">I have info →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}