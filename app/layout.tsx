import type { Metadata, Viewport } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'flyingway — Telegram Developer',
  description: 'Портфолио flyingway — создаю Telegram-боты, мини-приложения и лендинги.',
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
  themeColor: '#12121C',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`${outfit.variable} ${jetbrainsMono.variable}`}
      style={{ backgroundColor: '#12121C' }}
    >
      <body
        style={{
          backgroundColor: '#12121C',
          color: '#F0EFF8',
          fontFamily: 'var(--font-sans)',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        {children}
      </body>
    </html>
  )
}
