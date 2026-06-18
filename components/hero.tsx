'use client'

import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'

const roles = ['developer', 'bot builder', 'разработчик', 'tg ecosystem']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section
      className="relative flex min-h-screen flex-col items-start justify-center px-6 pt-24"
      aria-label="Hero section"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(oklch(1 0 0 / 3%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 3%) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full opacity-10 blur-3xl"
        style={{ background: 'oklch(0.78 0.15 195)' }}
      />

      <div className="relative mx-auto w-full max-w-4xl">
        {/* Status pill */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-xs text-muted-foreground">открыт для проектов</span>
        </div>

        {/* Name */}
        <h1 className="text-pretty mb-4 text-6xl font-bold leading-none tracking-tight text-foreground sm:text-7xl md:text-8xl">
          flyingway
        </h1>

        {/* Typewriter role */}
        <p className="mb-6 flex items-center gap-1 font-mono text-xl text-primary sm:text-2xl">
          <span aria-live="polite">{displayed}</span>
          <span className="animate-pulse text-primary">|</span>
        </p>

        {/* Bio */}
        <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Создаю проекты для Telegram — от умных ботов для записи до готовых мини-приложений. Чистый код,
          хороший вайб, быстрая доставка.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded border border-primary bg-primary px-5 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Смотреть проекты
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded border border-border px-5 py-2.5 font-mono text-sm font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            Написать мне
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <ArrowDown size={16} aria-hidden="true" />
        <span className="sr-only">Scroll down</span>
      </div>
    </section>
  )
}
