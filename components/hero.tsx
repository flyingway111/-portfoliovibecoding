'use client'

import { useEffect, useState } from 'react'

/* ── Iron Club AI mock screen ── */
function IronClubScreen() {
  return (
    <div style={{
      height: '100%', background: '#080810',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden', position: 'relative',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '-40px', left: '50%',
        transform: 'translateX(-50%)',
        width: '200px', height: '200px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(255,107,0,0.12) 0%, transparent 70%)',
        filter: 'blur(20px)', pointerEvents: 'none',
      }} />

      {/* Telegram mini app header */}
      <div style={{
        padding: '14px 16px 12px',
        display: 'flex', alignItems: 'center', gap: '10px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        flexShrink: 0,
      }}>
        <div style={{
          width: '30px', height: '30px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #FF6B00, #FF8C00)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '13px', flexShrink: 0,
        }}>
          💪
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 700, color: '#F0EFF8', lineHeight: 1 }}>
            IRON CLUB AI
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'rgba(255,255,255,0.3)', marginTop: '2px', letterSpacing: '0.04em' }}>
            FITNESS ASSISTANT
          </div>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <div style={{
            padding: '3px 8px', borderRadius: '20px',
            background: 'rgba(255,107,0,0.12)', border: '1px solid rgba(255,107,0,0.25)',
            fontFamily: 'var(--font-mono)', fontSize: '8px', color: '#FF8C00',
          }}>
            AI ON
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div style={{ flex: 1, padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'hidden' }}>
        {/* AI message */}
        <div style={{
          background: 'rgba(255,107,0,0.07)',
          border: '1px solid rgba(255,107,0,0.15)',
          borderRadius: '4px 12px 12px 12px',
          padding: '9px 11px',
        }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', color: '#FF8C00', fontWeight: 600, marginBottom: '4px' }}>
            🤖 AI Тренер
          </div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>
            Привет! Сегодня день груди. Рекомендую 4 подхода жима лёжа 80 кг.
          </div>
        </div>

        {/* Stats grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '5px' }}>
          {[['80 кг', 'Вес'], ['4×8', 'Подходы'], ['420', 'Ккал']].map(([v, l]) => (
            <div key={l} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '10px', padding: '8px 4px', textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 700, color: '#FF8C00' }}>{v}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '8px', color: 'rgba(255,255,255,0.28)', marginTop: '2px' }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Progress */}
        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '10px', padding: '10px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', color: 'rgba(255,255,255,0.4)' }}>Прогресс</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#FF8C00' }}>3 / 4</span>
          </div>
          <div style={{ height: '3px', background: 'rgba(255,255,255,0.07)', borderRadius: '3px' }}>
            <div style={{ width: '75%', height: '100%', background: 'linear-gradient(90deg, #FF6B00, #FF8C00)', borderRadius: '3px', boxShadow: '0 0 6px rgba(255,107,0,0.5)' }} />
          </div>
          <div style={{ display: 'flex', gap: '4px', marginTop: '8px' }}>
            {['Жим', 'Разводка', 'Блок', 'Отжим'].map((ex, i) => (
              <div key={ex} style={{
                flex: 1, padding: '4px 2px', borderRadius: '5px', textAlign: 'center',
                background: i < 3 ? 'rgba(255,107,0,0.15)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${i < 3 ? 'rgba(255,107,0,0.25)' : 'rgba(255,255,255,0.06)'}`,
                fontFamily: 'var(--font-sans)', fontSize: '7px',
                color: i < 3 ? '#FF8C00' : 'rgba(255,255,255,0.25)',
              }}>
                {ex}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #FF6B00, #FF8C00)',
          borderRadius: '12px', padding: '11px',
          textAlign: 'center',
          fontFamily: 'var(--font-sans)', fontSize: '11px',
          fontWeight: 700, color: '#fff',
          letterSpacing: '0.06em',
          boxShadow: '0 4px 20px rgba(255,107,0,0.3)',
        }}>
          СЛЕДУЮЩИЙ ПОДХОД
        </div>
      </div>

      {/* Scan line */}
      <div aria-hidden style={{
        position: 'absolute', left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255,107,0,0.4), transparent)',
        animation: 'scan-line 6s linear 1s infinite',
        pointerEvents: 'none',
      }} />
    </div>
  )
}

/* ── Phone mockup ── */
function PhoneDemo() {
  return (
    <div style={{
      width: '248px', flexShrink: 0,
      background: 'linear-gradient(160deg, #23233a 0%, #18182a 100%)',
      borderRadius: '44px', padding: '8px',
      boxShadow: '0 48px 96px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.1)',
    }}>
      <div style={{
        background: '#080810', borderRadius: '38px',
        overflow: 'hidden', height: '488px',
        display: 'flex', flexDirection: 'column',
        position: 'relative',
      }}>
        {/* Dynamic island */}
        <div style={{
          width: '80px', height: '26px', background: '#000',
          borderRadius: '0 0 18px 18px', margin: '0 auto',
          flexShrink: 0, zIndex: 10, position: 'relative',
        }} />

        <IronClubScreen />

        {/* Bottom home bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '22px', background: 'linear-gradient(transparent, rgba(8,8,16,0.95))',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
          paddingBottom: '5px',
        }}>
          <div style={{ width: '90px', height: '4px', borderRadius: '4px', background: 'rgba(255,255,255,0.2)' }} />
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
