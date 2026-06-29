'use client'

import { useEffect, useState } from 'react'

const IRON_CLUB_SHOT = 'https://api.microlink.io?screenshot=true&fullPage=true&embed=screenshot.url&url=' + encodeURIComponent('https://fitness-ai-self.vercel.app/')

/* ── Phone mockup with scrolling website ── */
function PhoneDemo() {
  return (
    <div style={{
      width: '264px',
      background: 'linear-gradient(160deg, #23233a 0%, #18182a 100%)',
      borderRadius: '44px',
      padding: '8px',
      boxShadow: '0 48px 96px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.1)',
    }}>
      {/* Screen */}
      <div style={{
        background: '#000',
        borderRadius: '38px',
        overflow: 'hidden',
        height: '496px',
        display: 'flex', flexDirection: 'column',
        position: 'relative',
      }}>
        {/* Dynamic island */}
        <div style={{
          width: '88px', height: '28px',
          background: '#000',
          borderRadius: '0 0 20px 20px',
          margin: '0 auto',
          flexShrink: 0, zIndex: 10,
          position: 'relative',
        }} />

        {/* Browser bar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '6px 12px 8px',
          background: '#111118',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          flexShrink: 0, zIndex: 5,
        }}>
          {/* Back arrow */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <path d="M15 18l-6-6 6-6" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {/* URL pill */}
          <div style={{
            flex: 1, height: '26px', borderRadius: '8px',
            background: 'rgba(255,255,255,0.07)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px',
          }}>
            {/* Lock icon */}
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="11" width="18" height="11" rx="2" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
              <path d="M7 11V7a5 5 0 0110 0v4" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px', color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.02em',
            }}>
              fitness-ai-self.vercel.app
            </span>
          </div>
          {/* Share icon */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" stroke="rgba(255,255,255,0.35)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Scrolling website */}
        <div style={{
          flex: 1, overflow: 'hidden',
          position: 'relative',
        }}>
          <img
            src={IRON_CLUB_SHOT}
            alt="Iron Club AI"
            style={{
              width: '100%',
              display: 'block',
              animation: 'phone-scroll 14s cubic-bezier(0.4,0,0.2,1) 1.5s infinite',
            }}
          />
          {/* Scan line */}
          <div aria-hidden style={{
            position: 'absolute', left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)',
            animation: 'scan-line 8s linear 2s infinite',
            pointerEvents: 'none',
          }} />
        </div>

        {/* Bottom home bar */}
        <div style={{
          height: '20px', background: '#000',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <div style={{
            width: '100px', height: '4px', borderRadius: '4px',
            background: 'rgba(255,255,255,0.25)',
          }} />
        </div>
      </div>
    </div>
  )
}

/* ── Hero ── */
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

      {/* Animated glows */}
      <div aria-hidden style={{
        position: 'absolute', top: '5%', right: '-5%',
        width: '700px', height: '700px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none',
        animation: 'glow-drift-1 18s ease-in-out infinite',
      }} />
      <div aria-hidden style={{
        position: 'absolute', bottom: '10%', left: '-8%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(129,140,248,0.07) 0%, transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none',
        animation: 'glow-drift-2 22s ease-in-out infinite',
      }} />

      <div style={{
        margin: '0 auto', maxWidth: '1200px', width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 340px',
        gap: '80px', alignItems: 'center',
      }}>
        {/* LEFT */}
        <div>
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
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 500, color: '#9896AA' }}>
              Открыт к проектам
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(38px, 5vw, 68px)',
            fontWeight: 800, letterSpacing: '-0.04em',
            lineHeight: 1.06, color: '#F0EFF8',
            marginBottom: '22px', maxWidth: '12ch',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(18px)',
            transition: 'opacity 0.65s ease 0.15s, transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.15s',
          }}>
            Создаю цифровые{' '}
            <span style={{ color: '#818CF8' }}>Telegram-</span>продукты
          </h1>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(16px, 1.6vw, 18px)',
            color: '#6B6A7C', lineHeight: 1.75,
            maxWidth: '44ch', marginBottom: '36px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity 0.65s ease 0.28s, transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.28s',
          }}>
            Боты, мини-приложения и лендинги на Next.js. Строю продукты, которые работают внутри Telegram.
          </p>

          <div style={{
            display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '44px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.65s ease 0.42s, transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.42s',
          }}>
            <a href="#projects" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '13px 26px',
              background: '#6366F1', color: '#FFFFFF',
              fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 600,
              borderRadius: '12px', textDecoration: 'none',
              boxShadow: '0 4px 24px rgba(99,102,241,0.25)',
              transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#818CF8'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#6366F1'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Смотреть работы
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <a href="https://t.me/xapsu" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '13px 26px',
              background: 'rgba(255,255,255,0.06)', color: '#F0EFF8',
              fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 600,
              borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)',
              textDecoration: 'none',
              transition: 'border-color 0.2s, transform 0.15s, background 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'; e.currentTarget.style.background = 'rgba(99,102,241,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <TelegramSvg />
              Telegram
            </a>
          </div>

          <div style={{
            display: 'flex', gap: '6px', flexWrap: 'wrap',
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.65s ease 0.6s',
          }}>
            {['Next.js', 'TypeScript', 'Tailwind', 'Telegram Bot API', 'Supabase'].map(tag => (
              <span key={tag} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px', color: '#6B6A7C',
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

        {/* RIGHT: Phone demo + floating badges */}
        <div
          className="hero-visual"
          style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            position: 'relative',
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.8s ease 0.3s',
          }}
        >
          {/* Glowing ring behind phone */}
          <div aria-hidden style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '320px', height: '320px', borderRadius: '50%',
            border: '1px solid rgba(99,102,241,0.12)',
            animation: 'phone-ring-pulse 4s ease-in-out infinite',
            pointerEvents: 'none',
          }} />
          <div aria-hidden style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '420px', height: '420px', borderRadius: '50%',
            border: '1px solid rgba(99,102,241,0.06)',
            animation: 'phone-ring-pulse 4s ease-in-out 1s infinite',
            pointerEvents: 'none',
          }} />

          <PhoneDemo />

          {/* Floating badge — top right */}
          <div style={{
            position: 'absolute', top: '40px', right: '-20px',
            display: 'flex', alignItems: 'center', gap: '7px',
            padding: '8px 14px',
            background: 'rgba(27,27,40,0.9)',
            border: '1px solid rgba(99,102,241,0.2)',
            borderRadius: '12px',
            backdropFilter: 'blur(12px)',
            animation: 'badge-float 3.5s ease-in-out infinite',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}>
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: '#FB923C', flexShrink: 0,
            }} />
            <span style={{
              fontFamily: 'var(--font-sans)', fontSize: '11px',
              fontWeight: 600, color: '#F0EFF8', whiteSpace: 'nowrap',
            }}>
              IRON CLUB AI
            </span>
          </div>

          {/* Floating badge — bottom left */}
          <div style={{
            position: 'absolute', bottom: '80px', left: '-30px',
            display: 'flex', alignItems: 'center', gap: '7px',
            padding: '8px 14px',
            background: 'rgba(27,27,40,0.9)',
            border: '1px solid rgba(99,102,241,0.2)',
            borderRadius: '12px',
            backdropFilter: 'blur(12px)',
            animation: 'badge-float 4.2s ease-in-out 0.8s infinite',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}>
            <span style={{ fontSize: '13px' }}>⚡</span>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px',
              color: '#818CF8', whiteSpace: 'nowrap',
            }}>
              Telegram Mini App
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes phone-scroll {
          0%   { transform: translateY(0); }
          10%  { transform: translateY(0); }
          45%  { transform: translateY(calc(-100% + 420px)); }
          55%  { transform: translateY(calc(-100% + 420px)); }
          90%  { transform: translateY(0); }
          100% { transform: translateY(0); }
        }
        @media (max-width: 860px) {
          .hero-visual { display: none !important; }
          #hero > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function TelegramSvg() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8.02c-.12.58-.46.72-.92.44l-2.54-1.87-1.23 1.18c-.14.14-.25.25-.5.25l.18-2.59 4.72-4.26c.2-.18-.05-.28-.32-.1L7.82 14.48 5.32 13.7c-.56-.18-.57-.56.12-.82l8.93-3.44c.47-.17.87.12.72.82z" fill="#F0EFF8"/>
    </svg>
  )
}
