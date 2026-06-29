'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'Услуги', href: '#services' },
  { label: 'Проекты', href: '#projects' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: '16px', left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 50,
      width: 'calc(100% - 32px)',
      maxWidth: '960px',
    }}>
      <nav
        aria-label="Main navigation"
        style={{
          background: scrolled ? 'rgba(27,27,40,0.96)' : 'rgba(18,18,28,0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${scrolled ? 'rgba(99,102,241,0.18)' : 'rgba(255,255,255,0.07)'}`,
          borderRadius: '100px',
          padding: '8px 10px 8px 22px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '8px',
          transition: 'all 0.35s cubic-bezier(0.32,0.72,0,1)',
          boxShadow: scrolled
            ? '0 8px 32px rgba(0,0,0,0.3), 0 0 0 0.5px rgba(99,102,241,0.1)'
            : '0 2px 12px rgba(0,0,0,0.2)',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '15px', fontWeight: 700,
            letterSpacing: '-0.03em',
            color: '#F0EFF8',
          }}>
            flyingway<span style={{ color: '#6366F1' }}>.</span>
          </span>
        </a>

        {/* Nav links */}
        <ul style={{
          display: 'flex', gap: '2px', listStyle: 'none', margin: 0, padding: 0,
        }}>
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px', fontWeight: 500,
                  color: '#9896AA',
                  textDecoration: 'none',
                  padding: '6px 14px',
                  borderRadius: '100px',
                  transition: 'color 0.18s, background 0.18s',
                  display: 'block',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#F0EFF8'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#9896AA'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://t.me/xapsu"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '14px', fontWeight: 600,
            color: '#FFFFFF',
            textDecoration: 'none',
            padding: '9px 22px',
            background: '#6366F1',
            borderRadius: '100px',
            transition: 'background 0.2s, transform 0.15s',
            display: 'inline-block',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#818CF8'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#6366F1'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          Написать
        </a>
      </nav>
    </header>
  )
}
