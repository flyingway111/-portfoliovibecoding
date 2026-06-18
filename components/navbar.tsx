'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'Услуги', href: '#projects' },
  { label: 'Контакты', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-border bg-background/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="font-mono text-sm text-foreground transition-colors hover:text-primary"
          aria-label="flyingway home"
        >
          flyingway<span className="text-primary">.</span>
        </a>

        <ul className="flex items-center gap-8" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
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
