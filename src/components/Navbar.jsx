'use client'
import { useState, useEffect } from 'react'

const links = [
  { id: 'home', label: '_hello' },
  { id: 'about', label: '_about-me' },
  { id: 'skills', label: '_skills' },
  { id: 'projects', label: '_projects' },
  { id: 'contact', label: '_contact-me' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      const offsets = links.map(l => {
        const el = document.getElementById(l.id)
        if (!el) return { id: l.id, top: Infinity }
        return { id: l.id, top: Math.abs(el.getBoundingClientRect().top - 120) }
      })
      offsets.sort((a, b) => a.top - b.top)
      setActive(offsets[0].id)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 flex items-center justify-between h-14">
        <a href="#home" className="text-text font-mono text-sm hover:text-accent transition-colors">
          <span className="text-muted">~/</span>vlada-marchenko
        </a>

        <nav className="hidden md:flex items-center gap-1 font-mono text-sm">
          {links.map(l => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`px-4 py-2 border-l border-border last:border-r transition-colors ${
                active === l.id ? 'text-accent' : 'text-muted hover:text-text'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-text font-mono text-xl px-3 py-1"
          aria-label="Menu"
        >
          {open ? '×' : '≡'}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-panel font-mono text-sm">
          {links.map(l => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 border-b border-border ${
                active === l.id ? 'text-accent' : 'text-muted'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
