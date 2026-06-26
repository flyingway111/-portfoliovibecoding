'use client'

import { useEffect, useState } from 'react'

export default function Splash({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)
  const [out, setOut] = useState(false)

  useEffect(() => {
    const start = Date.now()
    const dur = 1600
    const interval = setInterval(() => {
      const p = Math.min((Date.now() - start) / dur, 1)
      setProgress(p)
      if (p >= 1) {
        clearInterval(interval)
        setTimeout(() => setOut(true), 120)
        setTimeout(onDone, 900)
      }
    }, 16)
    return () => clearInterval(interval)
  }, [onDone])

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: '#04070e',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column',
        opacity: out ? 0 : 1,
        transform: out ? 'translateY(-10px)' : 'translateY(0)',
        transition: 'opacity 0.75s cubic-bezier(0.4,0,0.2,1), transform 0.75s ease',
        pointerEvents: out ? 'none' : 'all',
      }}
    >
      {/* Subtle background glow on splash */}
      <div aria-hidden style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translateX(-50%)',
        width: '500px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(14,165,233,0.08) 0%, rgba(52,211,153,0.04) 50%, transparent 70%)',
        filter: 'blur(50px)', pointerEvents: 'none',
      }} />

      <div style={{ textAlign: 'center', marginBottom: '52px', position: 'relative' }}>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '10px',
          letterSpacing: '0.35em', textTransform: 'uppercase',
          color: 'rgba(56,189,248,0.4)', marginBottom: '20px',
        }}>
          портфолио
        </p>
        <h1 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(52px, 10vw, 100px)',
          fontWeight: 900, letterSpacing: '-0.055em', lineHeight: 1,
          margin: 0,
        }}>
          <span style={{ color: '#f8fafc' }}>flying</span>
          <span style={{
            WebkitTextStroke: '2px rgba(56,189,248,0.55)',
            WebkitTextFillColor: 'transparent',
          }}>way</span>
        </h1>
      </div>

      {/* Progress bar */}
      <div style={{
        width: '140px', height: '1px',
        background: 'rgba(56,189,248,0.1)',
        borderRadius: '1px', overflow: 'hidden',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0,
          height: '100%',
          width: `${progress * 100}%`,
          background: 'linear-gradient(90deg, #0ea5e9, #34d399)',
          transition: 'width 0.04s linear',
        }} />
      </div>
    </div>
  )
}
