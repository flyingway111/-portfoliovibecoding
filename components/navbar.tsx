'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'Проекты', href: '#projects' },
  { label: 'Контакты', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: '16px', left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 50,
      width: 'calc(100% - 48px)',
      maxWidth: '860px',
      transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
    }}>
      <nav
        aria-label="Main navigation"
        style={{
          background: scrolled ? 'rgba(4,7,14,0.92)' : 'rgba(4,7,14,0.6)',
          backdropFilter: 'blur(20px)',
          border: `1px solid ${scrolled ? 'rgba(56,189,248,0.18)' : 'rgba(56,189,248,0.08)'}`,
          borderRadius: '100px',
          padding: '12px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(56,189,248,0.08)' : 'none',
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            color: '#f8fafc',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          flyingway<span style={{ color: '#38bdf8' }}>.</span>
        </a>

        <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }}>
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(148,163,184,0.5)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(56,189,248,0.9)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(148,163,184,0.5)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
