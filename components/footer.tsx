export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.07)',
      padding: '28px clamp(20px, 5vw, 80px)',
      background: '#0E0E18',
    }}>
      <div style={{
        margin: '0 auto', maxWidth: '1200px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '12px',
      }}>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '14px', fontWeight: 700,
          letterSpacing: '-0.02em', color: '#F0EFF8',
        }}>
          flyingway<span style={{ color: '#6366F1' }}>.</span>
        </p>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px', color: 'rgba(255,255,255,0.2)',
        }}>
          {year} — сделано с душой
        </p>
      </div>
    </footer>
  )
}
