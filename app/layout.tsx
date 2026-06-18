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
  title: 'flyingway — vibe coder',
  description:
    'Portfolio of flyingway — building Telegram bots, mini apps, and tools that just work.',
  keywords: ['flyingway', 'telegram bot', 'vibe coder', 'developer portfolio', 'mini app'],
  authors: [{ name: 'flyingway' }],
  openGraph: {
    title: 'flyingway — vibe coder',
    description: 'Building Telegram bots, mini apps, and tools that just work.',
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`} style={{ backgroundColor: 'oklch(0.1 0 0)' }}>
      <body className="font-sans antialiased bg-background text-foreground" style={{ backgroundColor: 'oklch(0.1 0 0)', color: 'oklch(0.93 0 0)' }}>{children}</body>
    </html>
  )
}
