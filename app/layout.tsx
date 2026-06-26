import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'flyingway — Telegram Developer',
  description:
    'Портфолио flyingway — создаю Telegram-боты, мини-приложения и лендинги.',
  keywords: ['flyingway', 'telegram bot', 'telegram developer', 'mini app', 'portfolio'],
  authors: [{ name: 'flyingway' }],
  openGraph: {
    title: 'flyingway — Telegram Developer',
    description: 'Создаю Telegram-продукты — от умных ботов до мини-приложений.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} style={{ backgroundColor: '#04070e' }}>
      <body style={{ backgroundColor: '#04070e', color: '#f8fafc', fontFamily: 'var(--font-sans)', WebkitFontSmoothing: 'antialiased' }}>{children}</body>
    </html>
  )
}
