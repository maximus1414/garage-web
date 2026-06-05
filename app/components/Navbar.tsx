'use client'
import { useState } from 'react'
import Link from 'next/link'


const NAV_LINKS = [
  { href: '/book',           label: 'Book a seat' },
  { href: '/parcels',        label: 'Send parcel' },
  { href: '/track',          label: 'Track parcel' },
  { href: '/lost-found',     label: 'Lost and found' },
  { href: '/banned-drivers', label: 'Banned drivers' },
  { href: '/complaints',     label: 'Complaints' },
  { href: '/about',          label: 'About' },
  { href: '/contact',        label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10 relative z-50">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black">
          Gara<span className="text-[#1db97a]">ge</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/book"
            className="bg-[#1db97a] text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-[#149558] transition"
          >
            Book now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile slide-in menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${open ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <div className={`absolute right-0 top-0 h-full w-72 bg-[#0d0d0d] border-l border-white/10 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <Link href="/" className="text-xl font-black" onClick={() => setOpen(false)}>
              Gara<span className="text-[#1db97a]">ge</span>
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="text-white/50 hover:text-white text-2xl"
            >
              ✕
            </button>
          </div>

          {/* Drawer links */}
          <div className="flex flex-col py-4">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-6 py-4 text-white/70 hover:text-white hover:bg-white/5 transition border-b border-white/5 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Drawer CTA */}
          <div className="px-6 pt-4">
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="block w-full bg-[#1db97a] text-white py-3 rounded-xl font-bold text-center hover:bg-[#149558] transition"
            >
              Book now
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}