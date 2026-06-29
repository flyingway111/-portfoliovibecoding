'use client'

import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.12) {
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

const stats = [
  { value: '10+', label: 'Проектов\nсдано' },
  { value: '1.5', label: 'Года в\nразработке' },
  { value: '3', label: 'Стека\nпод ключ' },
]

const stack = [
  { name: 'Next.js', level: 92 },
  { name: 'TypeScript', level: 85 },
  { name: 'Telegram Bot API', level: 90 },
  { name: 'Supabase', level: 78 },
  { name: 'Tailwind CSS', level: 95 },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section
      id="about"
      style={{
        padding: 'clamp(80px, 10vw, 120px) clamp(20px, 5vw, 80px)',
        position: 'relative', overflow: 'hidden',
      }}
      aria-labelledby="about-heading"
    >
      {/* Subtle separator glow */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '600px', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)',
        pointerEvents: 'none',
      }} />

      <div
        ref={ref}
        style={{
          margin: '0 auto', maxWidth: '1200px',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(28px)',
          transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px', alignItems: 'start',
        }}>

          {/* LEFT — bio + stats */}
          <div>
            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '4px 12px',
              background: 'rgba(99,102,241,0.08)',
              border: '1px solid rgba(99,102,241,0.18)',
              borderRadius: '100px', marginBottom: '28px',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px', letterSpacing: '0.12em',
                color: '#818CF8', textTransform: 'uppercase',
              }}>
                О разработчике
              </span>
            </div>

            <h2 id="about-heading" style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 800, letterSpacing: '-0.04em',
              color: '#F0EFF8', lineHeight: 1.1,
              marginBottom: '20px',
            }}>
              Привет, я{' '}
              <span style={{ color: '#818CF8' }}>flyingway</span>
            </h2>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '16px', color: '#6B6A7C',
              lineHeight: 1.75, marginBottom: '44px',
              maxWidth: '46ch',
            }}>
              Фронтенд-разработчик, специализирующийся на Telegram-экосистеме. Строю боты, мини-приложения и лендинги — от идеи до деплоя. Люблю чистый код, сильный дизайн и проекты, которые реально работают.
            </p>

            {/* Stats row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: '16px', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.06)',
            }}>
              {stats.map((s, i) => (
                <div key={i} style={{
                  padding: '24px 20px',
                  background: '#1B1B28',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(28px, 3.5vw, 40px)',
                    fontWeight: 800, letterSpacing: '-0.04em',
                    color: '#F0EFF8', lineHeight: 1,
                    marginBottom: '8px',
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11px', color: '#6B6A7C',
                    lineHeight: 1.4, whiteSpace: 'pre-line',
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — stack bars */}
          <div style={{ paddingTop: '8px' }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px', letterSpacing: '0.12em',
              color: '#6B6A7C', textTransform: 'uppercase',
              marginBottom: '28px',
            }}>
              Стек / уровень
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {stack.map((item, i) => (
                <SkillBar key={item.name} item={item} index={i} inView={inView} />
              ))}
            </div>

            {/* Tech chips */}
            <div style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['Python', 'aiogram', 'PostgreSQL', 'Git', 'Vercel', 'Framer'].map(t => (
                <span key={t} style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px', color: '#6B6A7C',
                  padding: '4px 10px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '6px',
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          #about > div > div {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}

function SkillBar({ item, index, inView }: { item: { name: string; level: number }; index: number; inView: boolean }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (!inView) return
    const t = setTimeout(() => setWidth(item.level), index * 80 + 200)
    return () => clearTimeout(t)
  }, [inView, item.level, index])

  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        marginBottom: '8px',
      }}>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '14px', fontWeight: 600, color: '#9896AA',
        }}>
          {item.name}
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px', color: '#6B6A7C',
        }}>
          {item.level}%
        </span>
      </div>
      {/* Track */}
      <div style={{
        height: '4px', borderRadius: '4px',
        background: 'rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}>
        {/* Fill */}
        <div style={{
          height: '100%',
          width: `${width}%`,
          background: 'linear-gradient(90deg, #4F46E5, #818CF8)',
          borderRadius: '4px',
          transition: `width 0.9s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s`,
          boxShadow: '0 0 8px rgba(99,102,241,0.4)',
        }} />
      </div>
    </div>
  )
}
