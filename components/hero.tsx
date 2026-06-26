'use client'

import { useEffect, useState } from 'react'

const ticker = [
  'Telegram Bots', 'Mini Apps', 'Landing Pages',
  'TG Ecosystem', 'Next.js', 'TypeScript', 'Telegram Bots', 'Mini Apps', 'Landing Pages',
  'TG Ecosystem', 'Next.js', 'TypeScript',
]

type TC = 'kw' | 'str' | 'fn' | 'cm' | 'df' | 'pn'
type Token = { t: string; c: TC }

const C: Record<TC, string> = {
  kw: '#38bdf8',
  str: '#34d399',
  fn: '#a78bfa',
  cm: 'rgba(148,163,184,0.4)',
  df: 'rgba(248,250,252,0.82)',
  pn: 'rgba(148,163,184,0.55)',
}

const codeLines: (Token[] | null)[] = [
  [{ t: '// 🤖 telegram bot handler', c: 'cm' }],
  null,
  [{ t: 'const ', c: 'kw' }, { t: 'bot', c: 'df' }, { t: ' = ', c: 'pn' }, { t: 'new ', c: 'kw' }, { t: 'Bot', c: 'fn' }, { t: '(TOKEN)', c: 'pn' }],
  null,
  [{ t: 'bot', c: 'df' }, { t: '.command(', c: 'pn' }, { t: "'start'", c: 'str' }, { t: ', ', c: 'pn' }, { t: 'async ', c: 'kw' }, { t: 'ctx', c: 'df' }, { t: ' => {', c: 'pn' }],
  [{ t: '  ', c: 'df' }, { t: 'await ', c: 'kw' }, { t: 'ctx', c: 'df' }, { t: '.reply(', c: 'pn' }, { t: "'Привет! 👋'", c: 'str' }, { t: ')', c: 'pn' }],
  [{ t: '  ', c: 'df' }, { t: 'return ', c: 'kw' }, { t: 'showMenu', c: 'fn' }, { t: '(ctx)', c: 'pn' }],
  [{ t: '})', c: 'pn' }],
  null,
  [{ t: 'bot', c: 'df' }, { t: '.on(', c: 'pn' }, { t: "'message'", c: 'str' }, { t: ', ', c: 'pn' }, { t: 'async ', c: 'kw' }, { t: 'ctx', c: 'df' }, { t: ' => {', c: 'pn' }],
  [{ t: '  ', c: 'df' }, { t: 'const ', c: 'kw' }, { t: 'text', c: 'df' }, { t: ' = ', c: 'pn' }, { t: 'ctx', c: 'df' }, { t: '.message.text', c: 'pn' }],
  [{ t: '  ', c: 'df' }, { t: 'handleInput', c: 'fn' }, { t: '(text, ctx)', c: 'pn' }],
  [{ t: '})', c: 'pn' }],
  null,
  [{ t: 'bot', c: 'df' }, { t: '.start()', c: 'fn' }, { t: '  ', c: 'df' }, { t: '// ✓ running', c: 'cm' }],
]

function CodeCard({ mounted }: { mounted: boolean }) {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (!mounted) return
    const delays = [400, 200, 180, 160, 160, 150, 150, 140, 130, 160, 150, 140, 130, 120, 200]
    let i = 0
    let timeout: ReturnType<typeof setTimeout>
    function showNext() {
      if (i >= codeLines.length) return
      setVisibleLines(v => v + 1)
      i++
      timeout = setTimeout(showNext, delays[i] ?? 150)
    }
    timeout = setTimeout(showNext, 900)
    return () => clearTimeout(timeout)
  }, [mounted])

  return (
    <div
      className="hero-code-card"
      style={{
        flexShrink: 0,
        animation: mounted ? 'float-gentle 5s ease-in-out infinite' : 'none',
        opacity: mounted ? 1 : 0,
        transition: 'opacity 0.6s ease 0.8s',
        transform: 'rotate(-1deg)',
      }}
    >
      {/* Glow under card */}
      <div aria-hidden style={{
        position: 'absolute', bottom: '-24px', left: '10%', right: '10%', height: '60px',
        background: 'radial-gradient(ellipse, rgba(14,165,233,0.25) 0%, transparent 70%)',
        filter: 'blur(16px)',
        pointerEvents: 'none',
      }} />

      {/* Card */}
      <div style={{
        position: 'relative',
        width: '320px',
        background: 'rgba(6, 11, 22, 0.88)',
        backdropFilter: 'blur(24px)',
        border: '1px solid rgba(56,189,248,0.14)',
        borderRadius: '14px',
        overflow: 'hidden',
        boxShadow: '0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(56,189,248,0.12)',
      }}>
        {/* Scan line effect */}
        <div aria-hidden style={{
          position: 'absolute', left: 0, right: 0,
          height: '60px',
          background: 'linear-gradient(180deg, transparent 0%, rgba(56,189,248,0.04) 50%, transparent 100%)',
          pointerEvents: 'none', zIndex: 3,
          animation: 'scan-glow 4s ease-in-out infinite',
        }} />

        {/* Title bar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '10px 14px',
          borderBottom: '1px solid rgba(56,189,248,0.07)',
          background: 'rgba(56,189,248,0.03)',
        }}>
          <div style={{ display: 'flex', gap: '5px' }}>
            {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
              <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c, opacity: 0.8 }} />
            ))}
          </div>
          <span style={{
            flex: 1, textAlign: 'center', marginRight: '30px',
            fontFamily: 'var(--font-mono)', fontSize: '10px',
            color: 'rgba(148,163,184,0.5)',
          }}>
            bot.ts
          </span>
        </div>

        {/* Code body */}
        <div style={{ padding: '14px 0 14px', position: 'relative' }}>
          {codeLines.map((line, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                minHeight: line === null ? '8px' : '20px',
                opacity: idx < visibleLines ? 1 : 0,
                animation: idx < visibleLines ? 'code-appear 0.25s ease forwards' : 'none',
                paddingLeft: '0',
              }}
            >
              {/* Line number */}
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px',
                color: 'rgba(148,163,184,0.2)',
                minWidth: '32px', textAlign: 'right',
                paddingRight: '12px', lineHeight: '20px',
                userSelect: 'none',
              }}>
                {line !== null ? idx + 1 : ''}
              </span>

              {/* Tokens */}
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', lineHeight: '20px' }}>
                {line?.map((tok, ti) => (
                  <span key={ti} style={{ color: C[tok.c] }}>{tok.t}</span>
                ))}
                {/* Blinking cursor on last visible line */}
                {idx === visibleLines - 1 && idx === codeLines.length - 1 && (
                  <span style={{
                    display: 'inline-block',
                    width: '2px', height: '13px',
                    background: '#38bdf8',
                    verticalAlign: 'middle',
                    marginLeft: '2px',
                    animation: 'cursor-blink 1s ease infinite',
                  }} />
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Status bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '6px 14px',
          borderTop: '1px solid rgba(56,189,248,0.07)',
          background: 'rgba(56,189,248,0.03)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#34d399', animation: 'ping 2s ease-in-out infinite' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'rgba(52,211,153,0.7)' }}>
              bot running
            </span>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'rgba(148,163,184,0.3)' }}>
            TypeScript
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '108px 52px 72px',
        background: '#04070e',
      }}
      aria-label="Hero"
    >
      {/* Dot grid */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'radial-gradient(rgba(56,189,248,0.07) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
        maskImage: 'radial-gradient(ellipse 85% 80% at 50% 50%, black 30%, transparent 100%)',
      }} />

      {/* Glow — sky blue top right */}
      <div aria-hidden style={{
        position: 'absolute', top: '-5%', right: '5%',
        width: '620px', height: '620px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.11) 0%, rgba(14,165,233,0.04) 50%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Glow — emerald bottom left */}
      <div aria-hidden style={{
        position: 'absolute', bottom: '5%', left: '-5%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 65%)',
        filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Top meta row */}
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '72px',
        opacity: mounted ? 1 : 0,
        transition: 'opacity 0.5s ease 0.15s',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '10px',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'rgba(56,189,248,0.45)',
        }}>
          портфолио · 2025
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            width: '5px', height: '5px', borderRadius: '50%',
            background: '#34d399', display: 'inline-block',
            animation: 'ping 1.5s ease-in-out infinite',
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px',
            color: 'rgba(148,163,184,0.55)', letterSpacing: '0.06em',
          }}>
            открыт для проектов
          </span>
        </div>
      </div>

      {/* Main content row */}
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', alignItems: 'center',
        gap: '64px',
      }}>
        {/* Left — typography */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ paddingBottom: '0.08em' }}>
            <h1 style={{
              fontSize: 'clamp(68px, 12vw, 146px)',
              fontWeight: 900, letterSpacing: '-0.055em', lineHeight: 1,
              color: '#f8fafc', margin: 0,
              animation: mounted ? 'slide-up-reveal 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s both' : 'none',
            }}>
              flying
            </h1>
          </div>

          <div style={{ paddingBottom: '0.1em' }}>
            <h1 style={{
              fontSize: 'clamp(68px, 12vw, 146px)',
              fontWeight: 900, letterSpacing: '-0.055em', lineHeight: 1,
              margin: 0, marginBottom: '36px',
              WebkitTextStroke: '2px rgba(56,189,248,0.6)',
              WebkitTextFillColor: 'transparent',
              animation: mounted ? 'slide-up-reveal 0.9s cubic-bezier(0.16,1,0.3,1) 0.47s both' : 'none',
            }}>
              way
            </h1>
          </div>

          {/* Divider */}
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, rgba(56,189,248,0.6) 0%, rgba(52,211,153,0.3) 50%, transparent 100%)',
            transformOrigin: 'left center',
            animation: mounted ? 'line-expand 1.1s cubic-bezier(0.16,1,0.3,1) 0.72s both' : 'none',
          }} />

          {/* Bio */}
          <p style={{
            maxWidth: '380px', lineHeight: 1.8, fontSize: '15px',
            color: 'rgba(148,163,184,0.55)',
            marginTop: '24px',
            animation: mounted ? 'fade-slide-up 0.7s ease 0.95s both' : 'none',
          }}>
            Создаю Telegram-продукты — от умных ботов до мини-приложений с дизайном. Быстро, красиво, с душой.
          </p>

          {/* CTAs */}
          <div style={{
            marginTop: '36px', display: 'flex', gap: '12px', flexWrap: 'wrap',
            animation: mounted ? 'fade-slide-up 0.7s ease 1.1s both' : 'none',
          }}>
            <a
              href="#projects"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '13px 20px 13px 28px', borderRadius: '100px',
                background: 'linear-gradient(135deg, #0ea5e9, #0d9488)',
                color: '#fff',
                fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
                boxShadow: '0 0 32px rgba(14,165,233,0.3)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.01)'
                e.currentTarget.style.boxShadow = '0 8px 36px rgba(14,165,233,0.5)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 0 32px rgba(14,165,233,0.3)'
              }}
            >
              Смотреть проекты
              <span style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '13px', flexShrink: 0,
              }}>↗</span>
            </a>
            <a
              href="#contact"
              style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '13px 28px', borderRadius: '100px',
                border: '1px solid rgba(56,189,248,0.2)',
                color: 'rgba(148,163,184,0.75)',
                fontFamily: 'var(--font-mono)', fontSize: '13px',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.borderColor = 'rgba(56,189,248,0.5)'
                e.currentTarget.style.color = '#f8fafc'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(56,189,248,0.2)'
                e.currentTarget.style.color = 'rgba(148,163,184,0.75)'
              }}
            >
              Написать мне
            </a>
          </div>
        </div>

        {/* Right — animated code card */}
        <CodeCard mounted={mounted} />
      </div>

      {/* Marquee */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        borderTop: '1px solid rgba(56,189,248,0.07)',
        overflow: 'hidden', padding: '11px 0',
        zIndex: 2,
        opacity: mounted ? 1 : 0,
        transition: 'opacity 0.5s ease 1.25s',
      }}>
        <div style={{
          display: 'flex', whiteSpace: 'nowrap',
          animation: 'marquee-scroll 28s linear infinite',
        }}>
          {ticker.map((t, i) => (
            <span key={i} style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: i % 2 === 0 ? 'rgba(56,189,248,0.35)' : 'rgba(52,211,153,0.3)',
              padding: '0 22px',
            }}>
              {t}&nbsp;&nbsp;<span style={{ opacity: 0.3 }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
