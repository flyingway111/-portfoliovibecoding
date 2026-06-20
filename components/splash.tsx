'use client'

import { useEffect, useState, Suspense } from 'react'
import dynamic from 'next/dynamic'

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false })

const CHARS = 'ABCDEFGHIJKabcdef0123456789@#$%&'
const TARGET = 'flyingway'

export default function Splash({ onDone }: { onDone: () => void }) {
  const [text, setText] = useState(() => Array(TARGET.length).fill('·').join(''))
  const [phase, setPhase] = useState<'idle' | 'scramble' | 'out'>('idle')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('scramble'), 600)
    const t2 = setTimeout(() => setPhase('out'), 2800)
    const t3 = setTimeout(onDone, 3400)
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
        opacity: phase === 'out' ? 0 : 1,
        transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1)',
        pointerEvents: phase === 'out' ? 'none' : 'all',
        overflow: 'hidden',
      }}
    >
      {/* Spline full screen */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, width: '100vw', height: '100vh' }}>
        <Suspense fallback={null}>
          <Spline
            scene="https://prod.spline.design/tKUjHFyln8mYDJbs/scene.splinecode"
            style={{ width: '100vw', height: '100vh', display: 'block' }}
          />
        </Suspense>
      </div>

      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'rgba(8,10,15,0.55)',
      }} />

      {/* Text */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '10px',
          letterSpacing: '0.4em', color: 'oklch(0.78 0.15 195)',
          textTransform: 'uppercase', marginBottom: '20px', opacity: 0.8,
        }}>
          портфолио
        </p>
        <h1 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(52px, 12vw, 110px)',
          fontWeight: 800, color: 'oklch(0.93 0 0)',
          letterSpacing: '-0.04em', lineHeight: 1,
          fontVariantNumeric: 'tabular-nums', minWidth: '6ch',
        }}>
          {text}
        </h1>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px',
          color: 'rgba(130,145,170,0.6)', marginTop: '18px', letterSpacing: '0.25em',
        }}>
          vibe coder
        </p>
      </div>
    </div>
  )
}
