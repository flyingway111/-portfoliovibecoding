'use client'

import { useEffect, useRef, useState } from 'react'
import { portfolioProjects } from './portfolio-projects'
import './portfolio-universe.css'

type ProjectVisual = {
  orbitClass: string
  tintClass: string
  icon: React.ReactNode
}

function TelegramMark() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M42.5 7.4 35.9 39c-.5 2.2-1.8 2.8-3.7 1.7L22.1 33.3l-4.9 4.7c-.5.5-1 .9-2 .9l.7-10.2L34.5 12c.8-.7-.2-1.1-1.3-.4L10.3 26l-9.9-3.1c-2.1-.7-2.2-2.1.5-3.2L39.6 4.8c1.8-.7 3.4.4 2.9 2.6Z"
        fill="currentColor"
      />
    </svg>
  )
}

function DumbbellIcon() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5">
        <path d="M34 48v24" />
        <path d="M44 42v36" />
        <path d="M76 42v36" />
        <path d="M86 48v24" />
        <path d="M44 60h32" />
        <path d="M28 52h6v16h-6z" />
        <path d="M86 52h6v16h-6z" />
      </g>
    </svg>
  )
}

function BagIcon() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5">
        <path d="M34 44h52l4 48H30Z" />
        <path d="M46 44c0-9 6-16 14-16s14 7 14 16" />
        <path d="M46 44v10" />
        <path d="M74 44v10" />
        <path d="M42 66h36" />
      </g>
    </svg>
  )
}

function ScissorsIcon() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5">
        <circle cx="40" cy="80" r="12" />
        <circle cx="80" cy="80" r="12" />
        <path d="M49 72 92 30" />
        <path d="M71 72 28 30" />
        <path d="M56 58 74 58" />
      </g>
    </svg>
  )
}

function DomeIcon() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5">
        <path d="M26 74h68" />
        <path d="M36 74c2-20 12-32 24-32s22 12 24 32" />
        <path d="M60 42v-8" />
        <path d="M56 34h8" />
        <path d="M24 84h72" />
      </g>
    </svg>
  )
}

function PoleIcon() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5">
        <rect x="44" y="18" width="32" height="84" rx="16" />
        <path d="M47 28c10 7 19 7 29 0" />
        <path d="M47 50c10 7 19 7 29 0" />
        <path d="M47 72c10 7 19 7 29 0" />
        <path d="M47 94c10 7 19 7 29 0" />
      </g>
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5">
        <path d="m60 22 9 24 24 9-24 9-9 24-9-24-24-9 24-9z" />
        <path d="M28 24v11" />
        <path d="M22 29h12" />
        <path d="M88 84v14" />
        <path d="M81 91h14" />
      </g>
    </svg>
  )
}

const heroStats = [
  { value: '6', label: 'реальных проектов' },
  { value: 'Лендинги', label: 'с характером и ритмом' },
  { value: 'Next.js + React', label: 'на этом строю основу' },
]

const closingNotes = [
  'Лендинги, которые не выглядят как шаблон.',
  'Telegram mini apps, где важны и логика, и визуал.',
  'Спокойный продакшн без лишнего шума и перегруза.',
]

const leaves = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: 4 + (index % 7) * 13 + (index % 3) * 2,
  duration: 11 + (index % 6) * 1.35,
  delay: -(index * 1.35),
  drift: 70 + (index % 5) * 26,
  scale: 0.9 + (index % 4) * 0.18,
  rotate: 120 + (index % 7) * 18,
  opacity: 0.42 + (index % 5) * 0.08,
}))

const projectVisuals: Record<string, ProjectVisual> = {
  'iron-club': {
    orbitClass: 'is-ember',
    tintClass: 'is-iron',
    icon: <DumbbellIcon />,
  },
  'shop-mini-app': {
    orbitClass: 'is-sand',
    tintClass: 'is-shop',
    icon: <BagIcon />,
  },
  'brutal-cut': {
    orbitClass: 'is-copper',
    tintClass: 'is-brutal',
    icon: <ScissorsIcon />,
  },
  mizuna: {
    orbitClass: 'is-rose',
    tintClass: 'is-mizuna',
    icon: <DomeIcon />,
  },
  cutbook: {
    orbitClass: 'is-gold',
    tintClass: 'is-cutbook',
    icon: <PoleIcon />,
  },
  'memo-ai': {
    orbitClass: 'is-lime',
    tintClass: 'is-memo',
    icon: <SparkIcon />,
  },
}

export default function PortfolioUniverse() {
  const [ready, setReady] = useState(false)
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 120)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]')
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    let frame = 0
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const update = () => {
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08
      root.style.setProperty('--hero-mx', currentX.toFixed(4))
      root.style.setProperty('--hero-my', currentY.toFixed(4))
      frame = window.requestAnimationFrame(update)
    }

    const handleMove = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5
      const y = event.clientY / window.innerHeight - 0.5
      targetX = x
      targetY = y
    }

    const handleLeave = () => {
      targetX = 0
      targetY = 0
    }

    frame = window.requestAnimationFrame(update)
    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerleave', handleLeave)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerleave', handleLeave)
    }
  }, [])

  return (
    <main
      ref={rootRef}
      className={ready ? 'knight-portfolio is-ready' : 'knight-portfolio'}
    >
      <div className="knight-grain" aria-hidden="true" />

      <header className="knight-header">
        <a
          className="knight-brand"
          href="https://t.me/xapsu"
          target="_blank"
          rel="noreferrer"
          aria-label="Открыть Telegram flyingway"
        >
          <TelegramMark />
          <span>flyingway</span>
        </a>

        <nav aria-label="Основная навигация">
          <a href="#projects">WORK</a>
          <a href="https://t.me/xapsu" target="_blank" rel="noreferrer">
            CONTACT
          </a>
        </nav>
      </header>

      <section className="knight-hero" aria-label="Главный экран портфолио">
        <div className="knight-backdrop" aria-hidden="true">
          <video
            className="knight-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/hero/portfolio-hero.mp4" type="video/mp4" />
          </video>
          <div className="knight-video-sheen" />
          <div className="knight-image" />
          <div className="knight-atmosphere" />
          <div className="knight-figure-glow" />
          <div className="knight-canopy-mask" />
          <div className="knight-leaves" aria-hidden="true">
            {leaves.map((leaf) => (
              <span
                key={leaf.id}
                className="knight-leaf"
                style={
                  {
                    '--leaf-left': `${leaf.left}%`,
                    '--leaf-duration': `${leaf.duration}s`,
                    '--leaf-delay': `${leaf.delay}s`,
                    '--leaf-drift': `${leaf.drift}px`,
                    '--leaf-scale': leaf.scale,
                    '--leaf-rotate': `${leaf.rotate}deg`,
                    '--leaf-opacity': leaf.opacity,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
          <div className="knight-backdrop-glow" />
          <div className="knight-backdrop-fade" />
        </div>

        <div className="knight-hero-copy">
          <div className="knight-kicker">LANDINGS • TELEGRAM MINI APPS • CREATIVE FRONTEND</div>
          <h1>
            Сайты и
            <span>Telegram-продукты</span>
          </h1>
          <p>
            Собираю тёплые, выразительные интерфейсы, которые выглядят цельно
            и запоминаются с первого экрана.
          </p>

          <div className="knight-actions">
            <a
              href="https://t.me/xapsu"
              target="_blank"
              rel="noreferrer"
              className="knight-button knight-button-primary"
            >
              Написать в Telegram
            </a>
            <a href="#projects" className="knight-button knight-button-secondary">
              Посмотреть проекты
            </a>
          </div>

          <div className="knight-stats" aria-label="Краткая сводка">
            {heroStats.map((stat) => (
              <div key={stat.label} className="knight-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section" aria-label="Проекты">
        <div className="projects-shell">
          <div className="projects-heading reveal" data-reveal>
            <span>WORK</span>
            <h2>Выбранные проекты.</h2>
            <p>
              Несколько живых работ, которые можно открыть, посмотреть и почувствовать в реальном виде.
            </p>
          </div>

          <div className="projects-grid">
            {portfolioProjects.map((project) => {
              const visual = projectVisuals[project.id]

              return (
                <article key={project.id} className="project-card reveal" data-reveal>
                  <div className={`project-visual ${visual.tintClass}`}>
                    <div className={`project-orbit ${visual.orbitClass}`}>
                      <span className="project-orbit-ring ring-a" />
                      <span className="project-orbit-ring ring-b" />
                      <span className="project-orbit-dot dot-a" />
                      <span className="project-orbit-dot dot-b" />
                    </div>
                    <div className="project-icon-wrap">{visual.icon}</div>
                  </div>

                  <div className="project-body">
                    <div>
                      <div className="project-kind">{project.kind}</div>
                      <h3>{project.title}</h3>
                    </div>

                    <div className="project-actions">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        Открыть проект
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="closing-section" aria-label="Продолжение портфолио">
        <div className="closing-shell">
          <div className="closing-copy reveal" data-reveal>
            <span>ДАЛЬШЕ</span>
            <h2>Если нужен сайт со своей атмосферой, а не просто ещё один шаблон, можем собрать его вместе.</h2>
            <a
              href="https://t.me/xapsu"
              target="_blank"
              rel="noreferrer"
              className="knight-button knight-button-primary"
            >
              Обсудить проект
            </a>
          </div>

          <div className="closing-notes">
            {closingNotes.map((note) => (
              <div key={note} className="closing-note reveal" data-reveal>
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
