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
      transition: 'all 0.3s ease',
    }}>
      <nav
        aria-label="Main navigation"
        style={{
          background: scrolled ? 'rgba(8,10,15,0.88)' : 'rgba(8,10,15,0.6)',
          backdropFilter: 'blur(16px)',
          border: `1px solid ${scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)'}`,
          borderRadius: '100px',
          padding: '12px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'all 0.3s ease',
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            color: 'oklch(0.93 0 0)',
            textDecoration: 'none',
          }}
        >
          flyingway<span style={{ color: 'oklch(0.78 0.15 195)' }}>.</span>
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
                  color: 'oklch(0.52 0 0)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'oklch(0.93 0 0)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'oklch(0.52 0 0)')}
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
