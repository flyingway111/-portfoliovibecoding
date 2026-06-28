'use client'

import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.1) {
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

const services = [
  { label: 'Telegram боты для записи клиентов', tag: '01' },
  { label: 'Telegram Mini Apps', tag: '02' },
  { label: 'Лендинги и сайты', tag: '03' },
]

const projects = [
  {
    name: 'IRON CLUB AI',
    desc: 'AI-ассистент для фитнес-клуба в формате Telegram Mini App.',
    href: 'https://fitness-ai-self.vercel.app/',
    tags: ['next.js', 'telegram', 'ai'],
    year: '2025',
  },
  {
    name: 'SHOP MINI APP',
    desc: 'Интернет-магазин одежды в Telegram. Каталог, корзина, оформление.',
    href: 'https://shop-flyingway.vercel.app/',
    tags: ['next.js', 'supabase', 'telegram'],
    year: '2025',
  },
  {
    name: 'BRUTAL CUT',
    desc: 'Лендинг для барбершопа с анимациями и записью через Telegram.',
    href: 'https://brutal-cutt.vercel.app/',
    tags: ['next.js', 'tailwind', 'landing'],
    year: '2025',
  },
  {
    name: 'MIZUNA',
    desc: 'Премиальный лендинг сети паназиатских ресторанов. Анимация катаны.',
    href: 'https://mizuna-landing.vercel.app/',
    tags: ['next.js', 'tailwind', 'landing'],
    year: '2025',
  },
  {
    name: 'CUTBOOK',
    desc: 'Приложение для записи в барбершоп: услуга, мастер, дата, подтверждение.',
    href: 'https://cutbook-nine.vercel.app/',
    tags: ['next.js', 'telegram', 'booking'],
    year: '2025',
  },
  {
    name: 'MEMO AI',
    desc: 'AI SaaS лендинг + дашборд. Автоматическая документация из Slack и Notion.',
    href: 'https://memo-ai-ivory.vercel.app/',
    tags: ['next.js', 'saas', 'dashboard'],
    year: '2025',
  },
]

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, inView } = useInView()
  const [hovered, setHovered] = useState(false)

  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateX(0)' : 'translateX(-18px)',
      transition: `opacity 0.55s ease ${index * 0.07}s, transform 0.55s ease ${index * 0.07}s`,
    }}>
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex', alignItems: 'center', gap: '20px',
          padding: `24px ${hovered ? '16px' : '0'}`,
          borderTop: `1px solid ${hovered ? 'rgba(56,189,248,0.15)' : 'rgba(56,189,248,0.07)'}`,
          textDecoration: 'none',
          background: hovered
            ? 'linear-gradient(90deg, rgba(14,165,233,0.05) 0%, transparent 100%)'
            : 'transparent',
          transition: 'all 0.22s cubic-bezier(0.32,0.72,0,1)',
          borderRadius: '0 8px 8px 0',
        }}
      >
        {/* Number */}
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px',
          color: hovered ? 'rgba(56,189,248,0.7)' : 'rgba(56,189,248,0.25)',
          minWidth: '28px', flexShrink: 0,
          transition: 'color 0.2s',
        }}>
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Name + desc */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3 style={{
            fontFamily: 'var(--font-sans)', fontSize: '17px',
            fontWeight: 700, letterSpacing: '-0.02em',
            color: hovered ? '#f8fafc' : 'rgba(248,250,252,0.72)',
            transition: 'color 0.2s', margin: 0, marginBottom: '4px',
          }}>
            {project.name}
          </h3>
          <p style={{
            fontSize: '13px', color: 'rgba(148,163,184,0.4)',
            lineHeight: 1.4, overflow: 'hidden',
            textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>
            {project.desc}
          </p>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
          {project.tags.slice(0, 2).map(tag => (
            <span key={tag} style={{
              fontFamily: 'var(--font-mono)', fontSize: '9px',
              color: hovered ? 'rgba(56,189,248,0.6)' : 'rgba(56,189,248,0.28)',
              padding: '2px 8px',
              border: `1px solid ${hovered ? 'rgba(56,189,248,0.2)' : 'rgba(56,189,248,0.1)'}`,
              borderRadius: '4px',
              transition: 'all 0.2s',
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Arrow */}
        <span style={{
          color: hovered ? 'rgba(56,189,248,0.9)' : 'rgba(56,189,248,0.2)',
          fontSize: '18px', transition: 'all 0.2s', flexShrink: 0,
          display: 'inline-block',
          transform: hovered ? 'translate(3px,-3px)' : 'translate(0,0)',
        }}>
          ↗
        </span>
      </a>
    </div>
  )
}

export default function Projects() {
  const { ref: headRef, inView: headInView } = useInView(0.15)

  return (
    <section id="projects" style={{ position: 'relative', padding: '120px 48px' }} aria-labelledby="projects-heading">
      {/* Subtle glow */}
      <div aria-hidden style={{
        position: 'absolute', top: '5%', left: '30%',
        width: '500px', height: '200px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(14,165,233,0.05) 0%, transparent 70%)',
        pointerEvents: 'none', filter: 'blur(60px)',
      }} />

      <div style={{ margin: '0 auto', maxWidth: '860px', position: 'relative' }}>

        {/* Services section */}
        <div ref={headRef} style={{
          opacity: headInView ? 1 : 0,
          transform: headInView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.65s cubic-bezier(0.32,0.72,0,1)',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px',
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'rgba(56,189,248,0.45)', marginBottom: '12px',
          }}>
            что я делаю
          </p>
          <h2 id="projects-heading" style={{
            fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700,
            letterSpacing: '-0.035em', color: '#f8fafc', marginBottom: '48px',
          }}>
            Услуги
          </h2>

          <div>
            {services.map((s, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '20px',
                padding: '20px 0',
                borderTop: '1px solid rgba(56,189,248,0.07)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px',
                  color: 'rgba(52,211,153,0.4)', minWidth: '24px',
                }}>
                  {s.tag}
                </span>
                <span style={{ fontSize: '16px', fontWeight: 500, color: 'rgba(248,250,252,0.8)' }}>
                  {s.label}
                </span>
              </div>
            ))}
            <div style={{ borderBottom: '1px solid rgba(56,189,248,0.07)' }} />
          </div>
        </div>

        {/* Projects list */}
        <div style={{ marginTop: '100px' }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px',
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'rgba(56,189,248,0.45)', marginBottom: '12px',
          }}>
            мои работы
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700,
            letterSpacing: '-0.035em', color: '#f8fafc', marginBottom: '48px',
          }}>
            Проекты
          </h2>

          <div>
            {projects.map((p, i) => (
              <ProjectRow key={p.name} project={p} index={i} />
            ))}
            <div style={{ borderBottom: '1px solid rgba(56,189,248,0.07)' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
