export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <p className="font-mono text-xs text-muted-foreground">
          flyingway<span className="text-primary">.</span>
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          &copy; {year} — сделано с хорошим настроением
        </p>
      </div>
    </footer>
  )
}
