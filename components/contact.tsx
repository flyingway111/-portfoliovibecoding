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
      style={{
        position: 'relative',
        padding: 'clamp(80px, 10vw, 130px) clamp(20px, 5vw, 80px)',
        overflow: 'hidden',
      }}
      aria-labelledby="contact-heading"
    >
      {/* Background */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, #12121C 0%, #16162A 100%)',
        pointerEvents: 'none',
      }} />

      {/* Glow */}
      <div aria-hidden style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      {/* Large decorative "?" */}
      <div aria-hidden style={{
        position: 'absolute', right: '-2%', top: '50%',
        transform: 'translateY(-50%)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'clamp(160px, 22vw, 320px)',
        fontWeight: 900, letterSpacing: '-0.06em',
        color: 'rgba(99,102,241,0.05)',
        userSelect: 'none', pointerEvents: 'none', lineHeight: 1,
      }}>
        ?
      </div>

      <div
        ref={ref}
        style={{
          margin: '0 auto', maxWidth: '1200px', position: 'relative',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(32px)',
          transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px', alignItems: 'center',
        }}>
          {/* LEFT */}
          <div>
            <h2 id="contact-heading" style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(40px, 6vw, 80px)',
              fontWeight: 800, letterSpacing: '-0.045em',
              color: '#F0EFF8', lineHeight: 1.0,
              marginBottom: '24px',
            }}>
              Поговорим?
            </h2>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '17px', color: '#6B6A7C',
              lineHeight: 1.7, maxWidth: '40ch', marginBottom: '44px',
            }}>
              Расскажите об идее. Обычно отвечаю в течение нескольких часов. Вместе придумаем, как сделать её реальной.
            </p>

            <a
              href="https://t.me/xapsu"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '16px 32px',
                background: hovered ? '#818CF8' : '#6366F1',
                color: '#FFFFFF',
                fontFamily: 'var(--font-sans)',
                fontSize: '16px', fontWeight: 600,
                borderRadius: '14px', textDecoration: 'none',
                transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
                boxShadow: hovered
                  ? '0 16px 48px rgba(99,102,241,0.3)'
                  : '0 4px 20px rgba(99,102,241,0.2)',
                transition: 'all 0.28s cubic-bezier(0.32,0.72,0,1)',
              }}
            >
              <TelegramSvg color="#FFFFFF" />
              Написать в Telegram
            </a>

            <div style={{ marginTop: '20px' }}>
              <a
                href="mailto:taramparam10@gmail.com"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px', color: '#6B6A7C',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#818CF8' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#6B6A7C' }}
              >
                taramparam10@gmail.com
              </a>
            </div>
          </div>

          {/* RIGHT: Info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { label: 'Telegram', value: '@xapsu', href: 'https://t.me/xapsu' },
              { label: 'Отклик', value: 'В тот же день' },
              { label: 'Локация', value: 'Удалённо, СНГ и международно' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '20px 24px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '14px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px', color: '#6B6A7C', fontWeight: 500,
                }}>
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '15px', fontWeight: 600, color: '#818CF8',
                      textDecoration: 'none',
                    }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '15px', fontWeight: 600, color: '#F0EFF8',
                  }}>
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          #contact > div > div > div {
            grid-template-columns: 1fr !important;
            gap: 44px !important;
          }
        }
      `}</style>
    </section>
  )
}

function TelegramSvg({ color = '#F0EFF8' }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8.02c-.12.58-.46.72-.92.44l-2.54-1.87-1.23 1.18c-.14.14-.25.25-.5.25l.18-2.59 4.72-4.26c.2-.18-.05-.28-.32-.1L7.82 14.48 5.32 13.7c-.56-.18-.57-.56.12-.82l8.93-3.44c.47-.17.87.12.72.82z"
        fill={color}
      />
    </svg>
  )
}
