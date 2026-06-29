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
  {
    num: '01',
    label: 'Telegram-боты',
    desc: 'Запись клиентов, оплата, уведомления, admin-панель. Любая логика под ключ.',
  },
  {
    num: '02',
    label: 'Telegram Mini Apps',
    desc: 'Полноценные веб-приложения внутри мессенджера: каталоги, витрины, фитнес-трекеры.',
  },
  {
    num: '03',
    label: 'Лендинги и сайты',
    desc: 'Быстрые и красивые Next.js сайты с анимациями и высокими Lighthouse-баллами.',
  },
]

type Project = {
  name: string
  desc: string
  href: string
  tags: string[]
  gradient: string
  glowColor: string
  accentColor: string
  label: string
  icon: React.FC<{ color: string }>
}

const projects: Project[] = [
  {
    name: 'IRON CLUB AI',
    desc: 'AI-ассистент для фитнес-клуба в формате Telegram Mini App.',
    href: 'https://fitness-ai-self.vercel.app/',
    tags: ['next.js', 'telegram', 'ai'],
    gradient: 'linear-gradient(135deg, #0c0a08 0%, #1a0e06 50%, #261408 100%)',
    glowColor: 'rgba(251,146,60,0.22)',
    accentColor: '#FB923C',
    label: 'FITNESS · AI · MINI APP',
    icon: DumbbellIcon,
  },
  {
    name: 'SHOP MINI APP',
    desc: 'Интернет-магазин одежды в Telegram. Каталог, корзина, оформление.',
    href: 'https://shop-flyingway.vercel.app/',
    tags: ['next.js', 'supabase', 'telegram'],
    gradient: 'linear-gradient(135deg, #080c14 0%, #0c1626 50%, #0f1e38 100%)',
    glowColor: 'rgba(96,165,250,0.2)',
    accentColor: '#60A5FA',
    label: 'E-COMMERCE · TELEGRAM',
    icon: BagIcon,
  },
  {
    name: 'BRUTAL CUT',
    desc: 'Лендинг для барбершопа с анимациями и записью через Telegram.',
    href: 'https://brutal-cutt.vercel.app/',
    tags: ['next.js', 'tailwind', 'landing'],
    gradient: 'linear-gradient(135deg, #0d0d08 0%, #1a180a 50%, #23200a 100%)',
    glowColor: 'rgba(234,179,8,0.2)',
    accentColor: '#EAB308',
    label: 'BARBERSHOP · LANDING',
    icon: ScissorsIcon,
  },
  {
    name: 'MIZUNA',
    desc: 'Премиальный лендинг сети паназиатских ресторанов. Анимация катаны.',
    href: 'https://mizuna-landing.vercel.app/',
    tags: ['next.js', 'tailwind', 'landing'],
    gradient: 'linear-gradient(135deg, #0a0806 0%, #180e06 50%, #221208 100%)',
    glowColor: 'rgba(251,191,36,0.18)',
    accentColor: '#FBBF24',
    label: 'RESTAURANT · PREMIUM',
    icon: LeafIcon,
  },
  {
    name: 'CUTBOOK',
    desc: 'Приложение для записи в барбершоп: услуга, мастер, дата, подтверждение.',
    href: 'https://cutbook-nine.vercel.app/',
    tags: ['next.js', 'telegram', 'booking'],
    gradient: 'linear-gradient(135deg, #060e10 0%, #0a1820 50%, #0c1e28 100%)',
    glowColor: 'rgba(20,184,166,0.2)',
    accentColor: '#14B8A6',
    label: 'BOOKING · TELEGRAM',
    icon: CalendarIcon,
  },
  {
    name: 'MEMO AI',
    desc: 'AI SaaS лендинг и дашборд. Автоматическая документация из Slack и Notion.',
    href: 'https://memo-ai-ivory.vercel.app/',
    tags: ['next.js', 'saas', 'dashboard'],
    gradient: 'linear-gradient(135deg, #050f0a 0%, #081a0e 50%, #0a2014 100%)',
    glowColor: 'rgba(52,211,153,0.2)',
    accentColor: '#34D399',
    label: 'SAAS · DASHBOARD · AI',
    icon: SparkIcon,
  },
]

function ProjectVisual({ project, large, hovered }: { project: Project; large: boolean; hovered: boolean }) {
  const h = large ? 190 : 150
  return (
    <div style={{
      width: '100%', height: `${h}px`,
      background: project.gradient,
      position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transform: hovered ? 'scale(1.03)' : 'scale(1)',
      transition: 'transform 0.5s cubic-bezier(0.32,0.72,0,1)',
    }}>
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
        pointerEvents: 'none',
      }} />

      {/* Center glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '200px', height: '200px', borderRadius: '50%',
        background: `radial-gradient(ellipse, ${project.glowColor} 0%, transparent 70%)`,
        filter: 'blur(24px)',
        pointerEvents: 'none',
        opacity: hovered ? 1.4 : 1,
        transition: 'opacity 0.4s',
      }} />

      {/* Subtle corner accent lines */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: '40px', height: '40px',
        borderTop: `1px solid ${project.accentColor}22`,
        borderLeft: `1px solid ${project.accentColor}22`,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, right: 0,
        width: '40px', height: '40px',
        borderBottom: `1px solid ${project.accentColor}22`,
        borderRight: `1px solid ${project.accentColor}22`,
        pointerEvents: 'none',
      }} />

      {/* Center content */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', position: 'relative', zIndex: 1 }}>
        {/* Icon ring */}
        <div style={{
          width: '52px', height: '52px', borderRadius: '16px',
          background: `${project.accentColor}14`,
          border: `1px solid ${project.accentColor}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: `0 0 24px ${project.accentColor}18`,
          transition: 'box-shadow 0.3s',
        }}>
          <project.icon color={project.accentColor} />
        </div>

        {/* Label */}
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '8px', letterSpacing: '0.15em',
          color: `${project.accentColor}60`,
          textTransform: 'uppercase' as const,
          whiteSpace: 'nowrap' as const,
        }}>
          {project.label}
        </span>
      </div>

      {/* Project name watermark */}
      <div style={{
        position: 'absolute', bottom: '10px', right: '14px',
        fontFamily: 'var(--font-sans)',
        fontSize: '11px', fontWeight: 700,
        color: `${project.accentColor}20`,
        letterSpacing: '-0.01em',
        userSelect: 'none',
        pointerEvents: 'none',
      }}>
        {project.name}
      </div>
    </div>
  )
}

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const [hovered, setHovered] = useState(false)
  const { ref, inView } = useInView()

  return (
    <div ref={ref} style={{
      height: '100%',
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(18px)',
      transition: 'opacity 0.55s cubic-bezier(0.16,1,0.3,1), transform 0.55s cubic-bezier(0.16,1,0.3,1)',
    }}>
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex', flexDirection: 'column',
          height: '100%', textDecoration: 'none',
          borderRadius: '16px', overflow: 'hidden',
          background: '#1B1B28',
          border: `1px solid ${hovered ? project.accentColor + '35' : 'rgba(255,255,255,0.07)'}`,
          boxShadow: hovered
            ? `0 16px 48px ${project.accentColor}14, 0 4px 16px rgba(0,0,0,0.3)`
            : '0 2px 12px rgba(0,0,0,0.25)',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
        }}
      >
        {/* Browser chrome frame */}
        <div style={{
          flexShrink: 0,
          background: '#0E0E18',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          {/* Top bar */}
          <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            padding: '9px 12px',
          }}>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#FF5F57' }} />
              <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#FEBC2E' }} />
              <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#28C840' }} />
            </div>
            <div style={{
              flex: 1, margin: '0 10px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '5px', padding: '3px 10px',
              fontFamily: 'var(--font-mono)', fontSize: '9px',
              color: 'rgba(255,255,255,0.28)',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              textAlign: 'center',
            }}>
              {project.href.replace('https://', '')}
            </div>
            <div style={{
              width: '24px', height: '24px', borderRadius: '50%',
              background: hovered ? project.accentColor + '28' : 'rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              transition: 'all 0.25s ease',
            }}>
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="rgba(255,255,255,0.8)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Visual */}
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <ProjectVisual project={project} large={large} hovered={hovered} />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '32px',
              background: 'linear-gradient(to bottom, transparent, rgba(14,14,24,0.7))',
              pointerEvents: 'none',
            }} />
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '16px 18px 18px', flex: 1 }}>
          <h3 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '15px', fontWeight: 700,
            color: '#F0EFF8', marginBottom: '6px',
            letterSpacing: '-0.01em',
          }}>
            {project.name}
          </h3>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px', color: '#6B6A7C',
            lineHeight: 1.55, marginBottom: '12px',
          }}>
            {project.desc}
          </p>
          <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: hovered ? project.accentColor : '#6B6A7C',
                padding: '3px 8px',
                background: hovered ? project.accentColor + '12' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${hovered ? project.accentColor + '28' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: '5px',
                transition: 'all 0.2s',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  )
}

function ServiceRow({ service, index, total }: { service: typeof services[0]; index: number; total: number }) {
  const [hovered, setHovered] = useState(false)
  const { ref, inView } = useInView()

  return (
    <div ref={ref} style={{
      borderBottom: index < total - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateX(0)' : 'translateX(-16px)',
      transition: `opacity 0.5s ease ${index * 0.09}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${index * 0.09}s`,
    }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'grid', gridTemplateColumns: '56px 1fr auto',
          alignItems: 'center', gap: '24px', padding: '28px 0',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '13px',
          color: hovered ? '#6366F1' : 'rgba(255,255,255,0.18)',
          transition: 'color 0.2s', userSelect: 'none',
        }}>
          {service.num}
        </span>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(20px, 2.8vw, 36px)',
          fontWeight: 700, letterSpacing: '-0.03em',
          color: hovered ? '#F0EFF8' : '#9896AA',
          transition: 'color 0.2s',
        }}>
          {service.label}
        </span>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '13px', color: '#6B6A7C',
          lineHeight: 1.6, maxWidth: '26ch', textAlign: 'right',
        }}>
          {service.desc}
        </p>
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref: svcRef, inView: svcInView } = useInView(0.1)
  const { ref: projRef, inView: projInView } = useInView(0.05)

  return (
    <>
      <section id="services" style={{ padding: 'clamp(80px, 10vw, 130px) clamp(20px, 5vw, 80px)' }} aria-labelledby="services-heading">
        <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
          <div ref={svcRef} style={{
            opacity: svcInView ? 1 : 0,
            transform: svcInView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.65s cubic-bezier(0.16,1,0.3,1)',
          }}>
            <div style={{
              display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: '16px', marginBottom: '52px', paddingBottom: '32px',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}>
              <h2 id="services-heading" style={{
                fontFamily: 'var(--font-sans)', fontSize: 'clamp(32px, 4.5vw, 56px)',
                fontWeight: 800, letterSpacing: '-0.04em', color: '#F0EFF8', lineHeight: 1,
              }}>
                Что я делаю
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: '#6B6A7C', maxWidth: '38ch', lineHeight: 1.6 }}>
                Специализируюсь на продуктах для экосистемы Telegram и фронтенде на Next.js.
              </p>
            </div>
            {services.map((s, i) => (
              <ServiceRow key={s.num} service={s} index={i} total={services.length} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" style={{ padding: '0 clamp(20px, 5vw, 80px) clamp(80px, 10vw, 130px)' }} aria-labelledby="projects-heading">
        <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
          <div ref={projRef} style={{
            opacity: projInView ? 1 : 0,
            transform: projInView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.65s cubic-bezier(0.16,1,0.3,1)',
            marginBottom: '44px',
          }}>
            <div style={{
              display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: '16px', paddingBottom: '32px',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}>
              <h2 id="projects-heading" style={{
                fontFamily: 'var(--font-sans)', fontSize: 'clamp(32px, 4.5vw, 56px)',
                fontWeight: 800, letterSpacing: '-0.04em', color: '#F0EFF8', lineHeight: 1,
              }}>
                Проекты
              </h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
            <div style={{ gridColumn: 'span 2' }}><ProjectCard project={projects[0]} large /></div>
            <div><ProjectCard project={projects[1]} /></div>
            <div><ProjectCard project={projects[2]} /></div>
            <div style={{ gridColumn: 'span 2' }}><ProjectCard project={projects[3]} large /></div>
            <div><ProjectCard project={projects[4]} /></div>
            <div style={{ gridColumn: 'span 2' }}><ProjectCard project={projects[5]} large /></div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ── Icons ── */

function DumbbellIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6.5 6.5h1v11h-1zM16.5 6.5h1v11h-1z" fill={color} opacity="0.9"/>
      <rect x="2" y="9" width="4.5" height="6" rx="1.5" stroke={color} strokeWidth="1.4"/>
      <rect x="17.5" y="9" width="4.5" height="6" rx="1.5" stroke={color} strokeWidth="1.4"/>
      <line x1="7.5" y1="12" x2="16.5" y2="12" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}

function BagIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="3" y1="6" x2="21" y2="6" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M16 10a4 4 0 01-8 0" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ScissorsIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="6" cy="6" r="3" stroke={color} strokeWidth="1.4"/>
      <circle cx="6" cy="18" r="3" stroke={color} strokeWidth="1.4"/>
      <line x1="20" y1="4" x2="8.12" y2="15.88" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="8.12" y1="8.12" x2="12" y2="12" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="12" y1="12" x2="20" y2="20" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}

function LeafIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M17 8C8 10 5.9 16.17 3.82 19.34L5.71 21C9 17 14 15 21 15c0-7-3-9-4-7z" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="3.82" y1="19.34" x2="12" y2="11" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}

function CalendarIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" stroke={color} strokeWidth="1.4"/>
      <line x1="16" y1="2" x2="16" y2="6" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="8" y1="2" x2="8" y2="6" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="3" y1="10" x2="21" y2="10" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="8" cy="15" r="1" fill={color}/>
      <circle cx="12" cy="15" r="1" fill={color}/>
      <circle cx="16" cy="15" r="1" fill={color}/>
    </svg>
  )
}

function SparkIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" stroke={color} strokeWidth="1.4" strokeLinejoin="round"/>
      <circle cx="19" cy="5" r="1.5" fill={color} opacity="0.6"/>
    </svg>
  )
}
