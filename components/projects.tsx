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

const services = [
  { label: 'Telegram боты для записи клиентов', tag: '--bot' },
  { label: 'Telegram Mini Apps', tag: '--mini-app' },
  { label: 'Интернет-магазины', tag: '--shop' },
]

const projects = [
  {
    name: 'IRON CLUB AI',
    desc: 'AI-ассистент для фитнес-клуба в формате Telegram Mini App.',
    href: 'https://fitness-ai-self.vercel.app/',
    tags: ['--next.js', '--telegram', '--ai'],
  },
  {
    name: 'SHOP Mini App',
    desc: 'Интернет-магазин одежды в Telegram. Каталог, корзина, оформление.',
    href: 'https://shop-miniapp-six.vercel.app/',
    tags: ['--next.js', '--supabase', '--telegram'],
  },
  {
    name: 'BRUTAL CUT',
    desc: 'Лендинг для барбершопа с анимациями и записью через Telegram.',
    href: 'https://brutal-cutt.vercel.app/',
    tags: ['--next.js', '--tailwind', '--landing'],
  },
  {
    name: 'MIZUNA',
    desc: 'Премиальный лендинг сети паназиатских ресторанов. Анимация катаны.',
    href: 'https://mizuna-landing.vercel.app/',
    tags: ['--next.js', '--tailwind', '--landing'],
  },
  {
    name: 'CUTBOOK',
    desc: 'Приложение для записи в барбершоп: услуга, мастер, дата, подтверждение.',
    href: 'https://cutbook-nine.vercel.app/',
    tags: ['--next.js', '--telegram', '--booking'],
  },
  {
    name: 'MEMO AI',
    desc: 'AI SaaS лендинг + дашборд. Автоматическая документация команды из Slack и Notion.',
    href: 'https://memo-ai-ivory.vercel.app/',
    tags: ['--next.js', '--saas', '--dashboard'],
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, inView } = useInView()
  const [hovered, setHovered] = useState(false)

  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s`,
    }}>
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex', flexDirection: 'column', gap: '16px',
          padding: '24px',
          background: hovered ? 'rgba(14,17,23,0.9)' : 'rgba(14,17,23,0.5)',
          border: `1px solid ${hovered ? 'rgba(125,211,252,0.25)' : 'rgba(255,255,255,0.07)'}`,
          borderRadius: '14px',
          textDecoration: 'none',
          cursor: 'pointer',
          boxShadow: hovered ? '0 0 0 1px rgba(125,211,252,0.1), 0 8px 32px rgba(125,211,252,0.06)' : 'none',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        {/* Top row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              width: '7px', height: '7px', borderRadius: '50%',
              background: hovered ? 'oklch(0.78 0.15 195)' : 'rgba(255,255,255,0.15)',
              transition: 'background 0.2s',
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: hovered ? 'oklch(0.78 0.15 195)' : 'oklch(0.35 0 0)',
              transition: 'color 0.2s',
            }}>
              online
            </span>
          </div>
          <span style={{
            color: hovered ? 'oklch(0.78 0.15 195)' : 'oklch(0.35 0 0)',
            fontSize: '16px', transition: 'color 0.2s, transform 0.2s',
            transform: hovered ? 'translate(2px,-2px)' : 'translate(0,0)',
          }}>
            ↗
          </span>
        </div>

        {/* Name */}
        <div>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px',
            color: 'oklch(0.78 0.15 195)', marginBottom: '6px', opacity: 0.6,
          }}>
            &gt;
          </p>
          <h3 style={{
            fontFamily: 'var(--font-sans)', fontSize: '18px',
            fontWeight: 700, letterSpacing: '-0.02em',
            color: 'oklch(0.93 0 0)',
          }}>
            {project.name}
          </h3>
        </div>

        {/* Desc */}
        <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'oklch(0.52 0 0)' }}>
          {project.desc}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px',
              color: 'oklch(0.45 0 0)', letterSpacing: '0.05em',
              padding: '3px 8px',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '4px',
              background: 'rgba(255,255,255,0.02)',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </a>
    </div>
  )
}

export default function Projects() {
  const { ref: headRef, inView: headInView } = useInView(0.2)

  return (
    <section id="projects" style={{ position: 'relative', padding: '96px 24px' }} aria-labelledby="services-heading">
      <div style={{ margin: '0 auto', maxWidth: '860px' }}>

        {/* Services */}
        <div ref={headRef} style={{
          opacity: headInView ? 1 : 0,
          transform: headInView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.55s ease',
        }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'oklch(0.52 0 0)', marginBottom: '12px' }}>
            что я делаю
          </p>
          <h2 id="services-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'oklch(0.93 0 0)', marginBottom: '40px' }}>
            Услуги
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {services.map((s, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '20px 0',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}
                className={i === services.length - 1 ? 'border-bottom' : ''}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'oklch(0.78 0.15 195)', opacity: 0.5, minWidth: '40px' }}>
                  {s.tag}
                </span>
                <span style={{ fontSize: '16px', fontWeight: 500, color: 'oklch(0.93 0 0)' }}>
                  {s.label}
                </span>
              </div>
            ))}
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }} />
          </div>
        </div>

        {/* Projects */}
        <div style={{ marginTop: '80px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'oklch(0.52 0 0)', marginBottom: '12px' }}>
            мои работы
          </p>
          <h2 style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'oklch(0.93 0 0)', marginBottom: '40px' }}>
            Проекты
          </h2>

          <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {projects.map((p, i) => (
              <ProjectCard key={p.name} project={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
