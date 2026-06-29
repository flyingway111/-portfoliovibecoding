const row1 = ['Next.js', 'Telegram Bot API', 'TypeScript', 'Mini Apps', 'Supabase', 'Tailwind CSS', 'React', 'Python', 'aiogram', 'Vercel', 'PostgreSQL', 'Next.js', 'Telegram Bot API', 'TypeScript', 'Mini Apps', 'Supabase', 'Tailwind CSS', 'React', 'Python', 'aiogram', 'Vercel', 'PostgreSQL']
const row2 = ['Landing Pages', 'Telegram Bots', 'UI/UX Design', 'API Integration', 'Animations', 'Dark Mode', 'Responsive', 'TypeScript', 'Деплой', 'Боты', 'Мини-приложения', 'Landing Pages', 'Telegram Bots', 'UI/UX Design', 'API Integration', 'Animations', 'Dark Mode', 'Responsive', 'TypeScript', 'Деплой', 'Боты', 'Мини-приложения']

export default function Ticker() {
  return (
    <div style={{
      overflow: 'hidden',
      padding: '28px 0',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      background: 'rgba(255,255,255,0.015)',
      display: 'flex', flexDirection: 'column', gap: '10px',
    }}>
      {/* Row 1 — left */}
      <div style={{ display: 'flex', gap: '0', width: 'max-content', animation: 'ticker-left 35s linear infinite' }}>
        {row1.map((w, i) => <TickerItem key={i} text={w} />)}
      </div>

      {/* Row 2 — right */}
      <div style={{ display: 'flex', gap: '0', width: 'max-content', animation: 'ticker-right 40s linear infinite' }}>
        {row2.map((w, i) => <TickerItem key={i} text={w} accent={i % 5 === 2} />)}
      </div>

      <style>{`
        @keyframes ticker-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes ticker-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}

function TickerItem({ text, accent = false }: { text: string; accent?: boolean }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '16px',
      padding: '0 20px',
      fontFamily: 'var(--font-mono)',
      fontSize: '12px', fontWeight: 500,
      color: accent ? '#818CF8' : 'rgba(255,255,255,0.2)',
      whiteSpace: 'nowrap',
      letterSpacing: '0.04em',
    }}>
      {text}
      <span style={{ color: 'rgba(99,102,241,0.3)', fontSize: '10px' }}>✦</span>
    </span>
  )
}
