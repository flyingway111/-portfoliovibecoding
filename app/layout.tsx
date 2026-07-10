import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, JetBrains_Mono, Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
})

const cormorant = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'flyingway | Telegram Developer',
  description: 'Портфолио flyingway: Telegram-боты, Mini Apps, AI-продукты и выразительные лендинги.',
  keywords: ['flyingway', 'telegram bot', 'telegram developer', 'mini app', 'portfolio'],
  authors: [{ name: 'flyingway' }],
  openGraph: {
    title: 'flyingway | Telegram Developer',
    description: 'Строю Telegram-продукты, сайты и интерфейсы, в которые хочется зайти.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#020912',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${jetbrainsMono.variable} ${cormorant.variable}`}
      style={{ backgroundColor: '#020912' }}
    >
      <body
        style={{
          backgroundColor: '#020912',
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
