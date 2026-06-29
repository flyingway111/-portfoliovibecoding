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
        background: '#12121C',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column',
        opacity: out ? 0 : 1,
        transform: out ? 'translateY(-8px) scale(0.98)' : 'translateY(0) scale(1)',
        transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s ease',
        pointerEvents: out ? 'none' : 'all',
      }}
    >
      {/* Dot grid */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        pointerEvents: 'none',
      }} />

      {/* Ambient glow */}
      <div aria-hidden style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 65%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      <div style={{
        textAlign: 'center', marginBottom: '48px', position: 'relative',
        animation: 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      }}>
        <h1 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(56px, 10vw, 104px)',
          fontWeight: 900, letterSpacing: '-0.055em', lineHeight: 1,
          margin: 0,
        }}>
          <span style={{ color: '#F0EFF8' }}>flying</span>
          <span style={{
            WebkitTextStroke: '2.5px #6366F1',
            WebkitTextFillColor: 'transparent',
          }}>
            way
          </span>
        </h1>
      </div>

      {/* Progress bar */}
      <div style={{
        width: '120px', height: '2px',
        background: 'rgba(255,255,255,0.08)',
        borderRadius: '2px', overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: `${progress * 100}%`,
          background: '#6366F1',
          transition: 'width 0.04s linear',
          borderRadius: '2px',
        }} />
      </div>
    </div>
  )
}
