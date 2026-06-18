import { MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32" aria-labelledby="contact-heading">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" aria-hidden="true" />

      <div className="mx-auto max-w-4xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Напишите мне
        </p>

        <h2
          id="contact-heading"
          className="text-pretty mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Связаться со мной
        </h2>
        <p className="mb-14 max-w-md leading-relaxed text-muted-foreground">
          Есть идея для проекта или просто хотите поздороваться? Напишите — обычно отвечаю быстро.
        </p>

        <a
          href="https://t.me/xapsu"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:border-primary/30 hover:-translate-y-0.5"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
            <MessageCircle size={16} aria-hidden="true" />
          </div>
          <div>
            <p className="mb-1 font-mono text-sm font-medium text-foreground">Telegram</p>
            <p className="font-mono text-xs text-muted-foreground">@xapsu</p>
          </div>
        </a>
      </div>
    </section>
  )
}
