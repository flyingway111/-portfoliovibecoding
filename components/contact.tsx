'use client'

import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, inView }
}

export default function Contact() {
  const { ref, inView } = useInView()
  const [hovered, setHovered] = useState(false)

  return (
    <section
      id="contact"
      style={{ position: 'relative', padding: '112px 24px 96px', overflow: 'hidden' }}
      aria-labelledby="contact-heading"
    >
      {/* Top divider */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: '24px', right: '24px', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.2) 50%, transparent)',
      }} />

      {/* Background glow */}
      <div aria-hidden style={{
        position: 'absolute', bottom: '-20%', left: '50%', transform: 'translateX(-50%)',
        width: '700px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(14,165,233,0.07) 0%, rgba(52,211,153,0.04) 50%, transparent 70%)',
        pointerEvents: 'none', filter: 'blur(40px)',
      }} />

      <div
        ref={ref}
        style={{
          margin: '0 auto', maxWidth: '860px', position: 'relative',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(32px)',
          transition: 'all 0.7s cubic-bezier(0.32,0.72,0,1)',
        }}
      >
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '10px',
          letterSpacing: '0.3em', textTransform: 'uppercase',
          color: 'rgba(56,189,248,0.5)', marginBottom: '12px',
        }}>
          связь
        </p>

        <h2 id="contact-heading" style={{
          fontSize: 'clamp(32px,6vw,56px)', fontWeight: 700,
          letterSpacing: '-0.04em', color: '#f8fafc', marginBottom: '8px', lineHeight: 1.05,
        }}>
          Есть проект?
        </h2>
        <h2 style={{
          fontSize: 'clamp(32px,6vw,56px)', fontWeight: 700,
          letterSpacing: '-0.04em',
          background: 'linear-gradient(135deg, #38bdf8, #34d399)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '32px', lineHeight: 1.05,
        }}>
          Напишите мне.
        </h2>

        <p style={{
          maxWidth: '380px', lineHeight: 1.8, fontSize: '15px',
          color: 'rgba(148,163,184,0.5)',
          marginBottom: '48px',
        }}>
          Обычно отвечаю в тот же день. Расскажите об идее — вместе придумаем как сделать её реальной.
        </p>

        <a
          href="https://t.me/xapsu"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '16px',
            padding: '20px 28px',
            background: hovered ? 'rgba(56,189,248,0.06)' : 'rgba(4,7,14,0.7)',
            border: `1px solid ${hovered ? 'rgba(56,189,248,0.35)' : 'rgba(56,189,248,0.12)'}`,
            borderRadius: '16px',
            textDecoration: 'none',
            transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
            boxShadow: hovered ? '0 12px 40px rgba(14,165,233,0.1)' : 'none',
            transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
          }}
        >
          {/* Telegram icon */}
          <div style={{
            width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
            background: 'linear-gradient(135deg, rgba(14,165,233,0.2), rgba(52,211,153,0.12))',
            border: '1px solid rgba(56,189,248,0.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8.02c-.12.58-.46.72-.92.44l-2.54-1.87-1.23 1.18c-.14.14-.25.25-.5.25l.18-2.59 4.72-4.26c.2-.18-.05-.28-.32-.1L7.82 14.48 5.32 13.7c-.56-.18-.57-.56.12-.82l8.93-3.44c.47-.17.87.12.72.82z" fill="#38bdf8" opacity="0.9"/>
            </svg>
          </div>

          <div>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 600,
              color: hovered ? '#f8fafc' : 'rgba(248,250,252,0.8)',
              marginBottom: '2px', transition: 'color 0.2s',
            }}>
              Telegram
            </p>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '12px',
              color: hovered ? 'rgba(56,189,248,0.8)' : 'rgba(56,189,248,0.4)',
              transition: 'color 0.2s',
            }}>
              @xapsu
            </p>
          </div>

          <span style={{
            marginLeft: 'auto',
            color: hovered ? 'rgba(56,189,248,0.9)' : 'rgba(56,189,248,0.3)',
            fontSize: '18px', transition: 'all 0.25s',
            transform: hovered ? 'translate(2px,-2px)' : 'translate(0,0)',
            display: 'inline-block',
          }}>
            ↗
          </span>
        </a>
      </div>
    </section>
  )
}
