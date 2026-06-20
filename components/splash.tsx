'use client'

import { useEffect, useState } from 'react'

const CHARS = 'ABCDEFGHIJKabcdef0123456789@#$%&'
const TARGET = 'flyingway'

export default function Splash({ onDone }: { onDone: () => void }) {
  const [text, setText] = useState(() => Array(TARGET.length).fill('·').join(''))
  const [phase, setPhase] = useState<'idle' | 'scramble' | 'out'>('idle')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('scramble'), 400)
    const t2 = setTimeout(() => setPhase('out'), 2300)
    const t3 = setTimeout(onDone, 2900)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onDone])

  useEffect(() => {
    if (phase !== 'scramble') return
    const start = Date.now()
    const duration = 1500
    const interval = setInterval(() => {
      const progress = Math.min((Date.now() - start) / duration, 1)
      const revealed = Math.floor(progress * TARGET.length)
      setText(
        TARGET.split('').map((char, i) =>
          i < revealed ? char : CHARS[Math.floor(Math.random() * CHARS.length)]
        ).join('')
      )
      if (progress >= 1) clearInterval(interval)
    }, 55)
    return () => clearInterval(interval)
  }, [phase])

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: '#080A0F',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: phase === 'out' ? 0 : 1,
        transition: 'opacity 0.65s cubic-bezier(0.4,0,0.2,1)',
        pointerEvents: phase === 'out' ? 'none' : 'all',
      }}
    >
      {/* Pulse rings */}
      {[0, 1, 2].map(i => (
        <div key={i} aria-hidden style={{
          position: 'absolute',
          width: `${220 + i * 130}px`,
          height: `${220 + i * 130}px`,
          borderRadius: '50%',
          border: '1px solid rgba(125,211,252,0.1)',
          animation: `ring-pulse 2.8s ease-out ${i * 0.28}s infinite`,
        }} />
      ))}

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.4em',
          color: 'oklch(0.78 0.15 195)',
          textTransform: 'uppercase',
          marginBottom: '20px',
          opacity: 0.8,
        }}>
          портфолио
        </p>

        <h1 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(48px, 10vw, 96px)',
          fontWeight: 800,
          color: 'oklch(0.93 0 0)',
          letterSpacing: '-0.04em',
          lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
          minWidth: '6ch',
        }}>
          {text}
        </h1>

        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'rgba(130,145,170,0.7)',
          marginTop: '18px',
          letterSpacing: '0.25em',
        }}>
          vibe coder
        </p>
      </div>
    </div>
  )
}
