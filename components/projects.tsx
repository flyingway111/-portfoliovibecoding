import { Bot, ShoppingBag, Layers } from 'lucide-react'

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
              <span
                className="shrink-0 text-primary"
              >
                {service.icon}
              </span>
              <span className="text-lg font-medium text-foreground sm:text-xl">
                {service.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
