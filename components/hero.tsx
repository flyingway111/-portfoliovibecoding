'use client'

import { useEffect, useState } from 'react'
import AnimatedBlob from './animated-blob'

const roles = ['developer', 'bot builder', 'разработчик', 'tg ecosystem']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 2200)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
      } else {
        setRoleIndex(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', padding: '0 24px', paddingTop: '96px', overflow: 'hidden' }}
      aria-label="Hero"
    >
      {/* Animated blob — ON TOP of text, underwater effect */}
      <AnimatedBlob
        size={820}
        style={{
          position: 'absolute',
          left: '-60px', top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 4,
          opacity: 0.55,
          backdropFilter: 'blur(2px)',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle vignette only at edges */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(8,10,15,0.7) 100%)',
      }} />

      {/* Grid */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '860px', margin: '0 auto' }}>
        {/* Status pill */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(255,255,255,0.04)',
          padding: '5px 14px', marginBottom: '32px',
        }}>
          <span style={{ position: 'relative', display: 'flex', width: '7px', height: '7px' }}>
            <span style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              background: 'oklch(0.78 0.15 195)',
              animation: 'ping 1.5s ease-in-out infinite', opacity: 0.6,
            }} />
            <span style={{ position: 'relative', width: '7px', height: '7px', borderRadius: '50%', background: 'oklch(0.78 0.15 195)' }} />
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'oklch(0.52 0 0)', letterSpacing: '0.05em' }}>
            открыт для проектов
          </span>
        </div>

        {/* Name */}
        <h1 style={{
          fontSize: 'clamp(52px, 10vw, 108px)',
          fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.95,
          color: 'oklch(0.93 0 0)', marginBottom: '20px',
          position: 'relative', zIndex: 2,
        }}>
          flyingway
        </h1>

        {/* Typewriter */}
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 'clamp(18px, 3vw, 24px)',
          color: 'oklch(0.78 0.15 195)', marginBottom: '24px',
          display: 'flex', alignItems: 'center', gap: '4px',
        }}>
          <span aria-live="polite">{displayed}</span>
          <span style={{ animation: 'blink 1s step-end infinite' }}>|</span>
        </p>

        {/* Bio */}
        <p style={{ maxWidth: '480px', lineHeight: 1.75, color: 'oklch(0.52 0 0)', fontSize: '16px' }}>
          Создаю проекты для Telegram — от умных ботов для записи до готовых мини-приложений.
          Чистый код, хороший вайб, быстрая доставка.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '40px' }}>
          <a
            href="#projects"
            style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '12px 24px', borderRadius: '100px',
              background: 'oklch(0.78 0.15 195)', color: 'oklch(0.1 0 0)',
              fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 600,
              textDecoration: 'none', transition: 'opacity 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Смотреть проекты
          </a>
          <a
            href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '12px 24px', borderRadius: '100px',
              border: '1px solid rgba(255,255,255,0.15)', color: 'oklch(0.65 0 0)',
              fontFamily: 'var(--font-mono)', fontSize: '13px',
              textDecoration: 'none', transition: 'all 0.2s',
              backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.03)',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.color = 'oklch(0.93 0 0)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'oklch(0.65 0 0)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Написать мне
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        animation: 'float-down 2s ease-in-out infinite', color: 'oklch(0.35 0 0)', zIndex: 2,
      }}>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, transparent, oklch(0.35 0 0))' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>scroll</span>
      </div>
    </section>
  )
}
