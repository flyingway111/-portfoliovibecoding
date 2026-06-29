'use client'

import { useEffect, useState } from 'react'

const ML = 'https://api.microlink.io?screenshot=true&embed=screenshot.url&url='

const floatingCards = [
  {
    name: 'IRON CLUB AI',
    img: ML + encodeURIComponent('https://fitness-ai-self.vercel.app/'),
    tag: 'Telegram Mini App',
    rotate: '-4deg',
    dur: '5.5s',
    delay: '0s',
    top: '0px', left: '30px',
    w: '270px',
  },
  {
    name: 'MIZUNA',
    img: ML + encodeURIComponent('https://mizuna-landing.vercel.app/'),
    tag: 'Landing Page',
    rotate: '3.5deg',
    dur: '7s',
    delay: '1.2s',
    top: '180px', left: '145px',
    w: '240px',
  },
  {
    name: 'MEMO AI',
    img: ML + encodeURIComponent('https://memo-ai-ivory.vercel.app/'),
    tag: 'SaaS Dashboard',
    rotate: '-2deg',
    dur: '6s',
    delay: '0.7s',
    top: '340px', left: '20px',
    w: '250px',
  },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100dvh',
        display: 'flex', alignItems: 'center',
        padding: 'clamp(100px, 12vh, 140px) clamp(20px, 5vw, 80px) clamp(60px, 8vh, 80px)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Dot grid */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />

      {/* Ambient glow */}
      <div aria-hidden style={{
        position: 'absolute', top: '5%', right: '-5%',
        width: '700px', height: '700px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div aria-hidden style={{
        position: 'absolute', bottom: '10%', left: '-8%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{
        margin: '0 auto', maxWidth: '1200px', width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 460px',
        gap: '60px', alignItems: 'center',
      }}>
        {/* LEFT */}
        <div>
          {/* Status badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 14px 6px 10px',
            background: 'rgba(99,102,241,0.1)',
            border: '1px solid rgba(99,102,241,0.2)',
            borderRadius: '100px', marginBottom: '36px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.55s ease 0.05s, transform 0.55s cubic-bezier(0.16,1,0.3,1) 0.05s',
          }}>
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: '#22c55e', flexShrink: 0,
              animation: 'status-pulse 2.2s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px', fontWeight: 500, color: '#9896AA',
            }}>
              Открыт к проектам
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(38px, 5vw, 68px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.06,
            color: '#F0EFF8',
            marginBottom: '22px',
            maxWidth: '12ch',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(18px)',
            transition: 'opacity 0.65s ease 0.15s, transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.15s',
          }}>
            Создаю цифровые{' '}
            <span style={{ color: '#818CF8' }}>Telegram-</span>продукты
          </h1>

          {/* Subtext */}
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(16px, 1.6vw, 18px)',
            fontWeight: 400, color: '#6B6A7C',
            lineHeight: 1.75, maxWidth: '44ch', marginBottom: '36px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity 0.65s ease 0.28s, transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.28s',
          }}>
            Боты, мини-приложения и лендинги на Next.js. Строю продукты, которые работают внутри Telegram.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', gap: '10px', flexWrap: 'wrap',
            marginBottom: '44px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.65s ease 0.42s, transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.42s',
          }}>
            <a
              href="#projects"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '13px 26px',
                background: '#6366F1', color: '#FFFFFF',
                fontFamily: 'var(--font-sans)',
                fontSize: '15px', fontWeight: 600,
                borderRadius: '12px', textDecoration: 'none',
                boxShadow: '0 4px 24px rgba(99,102,241,0.25)',
                transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#818CF8'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(99,102,241,0.35)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#6366F1'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(99,102,241,0.25)'
              }}
            >
              Смотреть работы
              <ArrowDiag />
            </a>

            <a
              href="https://t.me/xapsu"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 26px',
                background: 'rgba(255,255,255,0.06)', color: '#F0EFF8',
                fontFamily: 'var(--font-sans)',
                fontSize: '15px', fontWeight: 600,
                borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)',
                textDecoration: 'none',
                transition: 'border-color 0.2s, transform 0.15s, background 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'
                e.currentTarget.style.background = 'rgba(99,102,241,0.08)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <TelegramSvg />
              Telegram
            </a>
          </div>

          {/* Stack chips */}
          <div style={{
            display: 'flex', gap: '6px', flexWrap: 'wrap',
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.65s ease 0.6s',
          }}>
            {['Next.js', 'TypeScript', 'Tailwind', 'Telegram Bot API', 'Supabase'].map(tag => (
              <span key={tag} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px', fontWeight: 400, color: '#6B6A7C',
                padding: '4px 10px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '6px',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT: floating cards */}
        <div
          className="hero-visual"
          style={{
            position: 'relative', height: '530px',
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.8s ease 0.3s',
          }}
        >
          {floatingCards.map((card, i) => (
            <div
              key={card.name}
              style={{
                position: 'absolute',
                top: card.top, left: card.left,
                width: card.w,
                transform: `rotate(${card.rotate})`,
                zIndex: floatingCards.length - i,
              }}
            >
              <div style={{
                borderRadius: '16px', overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.08)',
                background: '#1B1B28',
                animation: `float-bob ${card.dur} ease-in-out ${card.delay} infinite`,
              }}>
                <img
                  src={card.img}
                  alt={card.name}
                  style={{
                    width: '100%',
                    height: i === 0 ? '150px' : '125px',
                    objectFit: 'cover', display: 'block',
                  }}
                />
                <div style={{ padding: '12px 14px 14px' }}>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px', fontWeight: 700,
                    color: '#F0EFF8', marginBottom: '3px',
                  }}>
                    {card.name}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px', color: '#6B6A7C',
                  }}>
                    {card.tag}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Decorative dots */}
          <div aria-hidden style={{
            position: 'absolute', bottom: '40px', right: '0px',
            display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px',
          }}>
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} style={{
                width: '4px', height: '4px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)',
              }} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-visual { display: none !important; }
        }
        @media (max-width: 860px) {
          #hero > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

function TelegramSvg() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8.02c-.12.58-.46.72-.92.44l-2.54-1.87-1.23 1.18c-.14.14-.25.25-.5.25l.18-2.59 4.72-4.26c.2-.18-.05-.28-.32-.1L7.82 14.48 5.32 13.7c-.56-.18-.57-.56.12-.82l8.93-3.44c.47-.17.87.12.72.82z"
        fill="#F0EFF8"
      />
    </svg>
  )
}

function ArrowDiag() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
