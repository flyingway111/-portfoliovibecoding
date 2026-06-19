import { Bot, ShoppingBag, Layers, ExternalLink } from 'lucide-react'

const services = [
  {
    id: 'bots',
    label: 'Telegram боты для записи клиентов',
    icon: <Bot size={18} aria-hidden="true" />,
  },
  {
    id: 'miniapps',
    label: 'Telegram Mini Apps',
    icon: <Layers size={18} aria-hidden="true" />,
  },
  {
    id: 'shops',
    label: 'Интернет-магазины',
    icon: <ShoppingBag size={18} aria-hidden="true" />,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32" aria-labelledby="services-heading">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Что я делаю
        </p>
        <h2
          id="services-heading"
          className="text-pretty mb-16 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Услуги
        </h2>

        <ul role="list" className="flex flex-col">
          {services.map((service, index) => (
            <li
              key={service.id}
              className="flex items-center gap-5 border-t border-border py-8 last:border-b"
            >
              <span className="font-mono text-xs text-muted-foreground/40 w-6 shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="shrink-0 text-primary">{service.icon}</span>
              <span className="text-lg font-medium text-foreground sm:text-xl">
                {service.label}
              </span>
            </li>
          ))}
        </ul>

        {/* Works */}
        <div className="mt-24">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Мои работы
          </p>
          <h2 className="text-pretty mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Проекты
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Project 1 */}
            <a
              href="https://fitness-ai-self.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Bot size={20} />
                </span>
                <ExternalLink size={16} className="text-muted-foreground/40 transition-colors group-hover:text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">IRON CLUB AI</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  AI-ассистент для фитнес-клуба в формате Telegram Mini App. Отвечает на вопросы об абонементах, расписании и программах тренировок.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'Telegram Mini App', 'AI'].map((tag) => (
                  <span key={tag} className="rounded-full border border-border px-3 py-0.5 font-mono text-xs text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </a>

            {/* Project 2 */}
            <div className="flex flex-col gap-4 rounded-2xl border border-border border-dashed bg-card/50 p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                  <Layers size={20} />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground/40">Следующий проект</h3>
                <p className="mt-1 text-sm text-muted-foreground/40">
                  Скоро появится здесь. Напишите мне чтобы обсудить ваш проект.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
