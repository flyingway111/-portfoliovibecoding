export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      borderTop: '1px solid rgba(56,189,248,0.07)',
      padding: '28px 24px',
    }}>
      <div style={{
        margin: '0 auto', maxWidth: '860px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'rgba(148,163,184,0.3)' }}>
          flyingway<span style={{ color: '#38bdf8' }}>.</span>
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'rgba(148,163,184,0.25)' }}>
          © {year} — сделано с душой
        </p>
      </div>
    </footer>
  )
}
