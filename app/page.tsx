import { ArrowDown, ArrowRight, BriefcaseBusiness, Scale, ShieldCheck, Zap } from 'lucide-react';
import { Reveal } from '@/components/reveal';

const heroPills = [
  { icon: ShieldCheck, title: 'Снижение\nрасходов' },
  { icon: Scale, title: 'Юридическая\nподдержка' },
  { icon: Zap, title: 'Консультации\nпо рынку' },
  { icon: BriefcaseBusiness, title: 'Обучение\nперсонала' },
];

const aboutParagraphs = [
  '"Pro Energy" - команда экспертов по вопросам энергоснабжения.',
  'Более 20 лет работаем в электроэнергетике и понимаем, как устроены энергорынки.',
  'Находим рабочие решения быстро, аккуратно и с понятной экономикой.',
];

const offerItems = [
  'Подключение к сетям и энергоснабжение.',
  'Помогаем снижать затраты на покупку электроэнергии.',
  'Юридическая и экспертная поддержка.',
  'Консультации по сложным вопросам энергорынка.',
];

const processSteps = [
  'Вы кратко описываете задачу по почте или телефону.',
  'Мы согласуем формат консультации и стоимость.',
  'Изучаем документы и предлагаем решение.',
  'Запускаем сопровождение в оговоренные сроки.',
];

const serviceSections = [
  {
    id: 'I.',
    title: 'Снижение расходов на энергоснабжение',
    items: [
      'анализируем текущие условия энергоснабжения',
      'находим точки экономии',
      'предлагаем рабочие изменения по договору и схеме снабжения',
    ],
    note: 'Оплата - процент от достигнутой экономии.',
  },
  {
    id: 'II.',
    title: 'Экспертная и юридическая поддержка при взаимодействии с энергетическими компаниями',
    intro: 'При подключении к электросетям и работе по договорам.',
    items: [
      'проверяем договоры на соответствие законодательству РФ',
      'оспариваем отказы, штрафы и необоснованные начисления',
      'сопровождаем переговоры с поставщиками и сетевыми организациями',
    ],
    note: 'Стоимость услуг - фиксированная или за результат.',
  },
  {
    id: 'III.',
    title: 'Консультации по широкому кругу вопросов в сфере электроэнергетики',
    items: [
      'технологическое присоединение и перераспределение мощности',
      'договоры энергоснабжения и расчеты за электроэнергию',
      'тарифы, регулирование, генерация и ESG',
    ],
    note: 'Стоимость консультации - фиксированная.',
  },
  {
    id: 'IV.',
    title: 'Обучение персонала',
    items: [
      'Очные семинары и вебинары по энергорынкам, энергоэффективности и ценообразованию.',
    ],
    note: 'Оплата - за час обучающего мероприятия.',
  },
];

function SignalGridBackdrop() {
  return (
    <div className="hero-cinema pointer-events-none absolute inset-0 overflow-hidden">
      <video
        className="hero-cinema-video absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero/poster.jpg"
        aria-hidden="true"
      >
        <source media="(max-width: 768px)" src="/hero/pro-energy-grid.mp4" type="video/mp4" />
        <source src="/hero/pro-energy-grid-loop-hq.mp4" type="video/mp4" />
      </video>
      <div className="hero-cinema-soften absolute inset-0" />
      <div className="hero-cinema-grade absolute inset-0" />
      <div className="hero-cinema-vignette absolute inset-0" />
      <div className="hero-cinema-fade absolute inset-0" />
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#040506] text-[#F7F0E6]">
      <section className="relative overflow-hidden px-5 pb-22 pt-6 sm:px-8 lg:px-10">
        <SignalGridBackdrop />

        <div className="relative mx-auto max-w-[1500px]">
          <div className="hero-reveal flex flex-wrap items-end justify-between gap-5 px-2">
            <div className="flex flex-wrap items-end gap-4 sm:gap-6">
              <h1 className="font-[family:var(--font-display)] text-[2.6rem] leading-none tracking-[-0.04em] text-[#F9F3E8] sm:text-[4rem]">
                Pro Energy
              </h1>
              <div className="mb-2 hidden h-7 w-px bg-[#8F7247] sm:block" />
              <div className="mb-2 text-[11px] uppercase tracking-[0.42em] text-[#C79A57] sm:text-[13px]">
                консалтинг в энергетике
              </div>
            </div>
          </div>

          <div className="relative mt-10 min-h-[760px] px-2 pb-10 pt-5">
            <div className="hero-reveal flex items-center text-[12px] text-white/72">
              <div className="hidden items-center gap-3 md:flex">
                <a
                  href="#about"
                  className="rounded-full px-4 py-2.5 text-[14px] font-medium transition duration-300 hover:bg-white/[0.04] hover:text-white active:scale-[0.98]"
                >
                  О компании
                </a>
                <a
                  href="#services"
                  className="rounded-full px-4 py-2.5 text-[14px] font-medium transition duration-300 hover:bg-white/[0.04] hover:text-white active:scale-[0.98]"
                >
                  Услуги
                </a>
                <a
                  href="#process"
                  className="rounded-full px-4 py-2.5 text-[14px] font-medium transition duration-300 hover:bg-white/[0.04] hover:text-white active:scale-[0.98]"
                >
                  Как работаем
                </a>
                <a
                  href="#contact"
                  className="rounded-full px-4 py-2.5 text-[14px] font-medium transition duration-300 hover:bg-white/[0.04] hover:text-white active:scale-[0.98]"
                >
                  Контакты
                </a>
              </div>
            </div>

            <div className="grid min-h-[660px] grid-cols-1 gap-10 pt-16">
              <div className="flex flex-col justify-between">
                <div className="max-w-[740px]">
                  <div className="hero-reveal text-[11px] uppercase tracking-[0.34em] text-[#C79A57]">
                    консультации в энергетике
                  </div>
                  <h2 className="hero-reveal mt-7 max-w-[740px] break-words font-[family:var(--font-display)] text-[clamp(1.9rem,9vw,5.55rem)] leading-[0.98] tracking-[-0.03em] text-[#FAF4EA] sm:leading-[0.92] sm:tracking-[-0.055em]">
                    Решения
                    <br />
                    для энергоснабжения
                  </h2>

                  <a
                    href="#contact"
                    className="hero-reveal mt-9 inline-flex min-h-14 items-center gap-4 rounded-[10px] bg-[#E8B55D] px-7 text-[15px] font-semibold text-[#18120B] transition duration-300 hover:translate-y-[-2px] hover:bg-[#F0C271] active:scale-[0.985]"
                  >
                    Получить консультацию
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="hero-reveal mt-14 grid max-w-[790px] grid-cols-2 gap-3 bg-[#0A0C10]/58 p-2 backdrop-blur-md sm:grid-cols-4">
                  {heroPills.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="scroll-card group relative overflow-hidden px-3 py-4 transition hover:bg-white/[0.03]">
                        <span className="scroll-card-glow" />
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D0A15D]/10 text-[#E5B666]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="mt-4 whitespace-pre-line text-[13px] leading-6 text-white/74">
                          {item.title}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="hero-reveal mt-8 flex justify-end text-[13px] text-white/54">
                  <a
                    href="#about"
                    className="scroll-chip flex h-12 w-12 items-center justify-center rounded-full border border-white/14 bg-[#0B0D10]/74 text-[#F5E4C1] transition hover:border-[#D0A15D]/36 hover:text-[#E8B55D]"
                  >
                    <ArrowDown className="h-4 w-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-8 border-t border-white/12" />
        </div>
      </section>

      <section id="about" className="px-5 py-22 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <Reveal className="max-w-[860px]">
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#B99862]">о компании</div>
            <h3 className="mt-4 font-[family:var(--font-display)] text-[clamp(2.5rem,4vw,4.5rem)] leading-[0.94] tracking-[-0.045em] text-[#F8F1E6]">
              Кто мы и что мы предлагаем
            </h3>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <Reveal className="scroll-panel bg-white/[0.025] p-6" delayMs={40}>
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#B99862]">Кто мы</div>
              <div className="mt-5 space-y-4 text-[15px] leading-8 text-white/70">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="border border-white/8 bg-black/18 p-5">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[#B99862]">опыт</div>
                  <div className="mt-3 text-[2.25rem] font-semibold leading-none text-[#E3B061]">20+</div>
                  <div className="mt-2 text-[14px] leading-6 text-white/62">лет в электроэнергетике</div>
                </div>
                <div className="border border-white/8 bg-black/18 p-5">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[#B99862]">формат</div>
                  <div className="mt-3 text-[1.3rem] font-semibold leading-tight text-[#F7E4BF]">
                    Устная и письменная консультация
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="scroll-panel bg-white/[0.025] p-6" delayMs={110}>
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#B99862]">Что мы предлагаем</div>
              <ul className="mt-5 space-y-4 text-[15px] leading-8 text-white/70">
                {offerItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D0A15D]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-white/8 px-5 py-22 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <Reveal className="max-w-[920px]">
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#B99862]">наши услуги</div>
            <h3 className="mt-4 font-[family:var(--font-display)] text-[clamp(2.5rem,4vw,4.5rem)] leading-[0.94] tracking-[-0.045em] text-[#F8F1E6]">
              Основные направления работы компании
            </h3>
          </Reveal>

          <div className="mt-12 space-y-6">
            {serviceSections.map((section, index) => (
              <Reveal
                key={section.title}
                className="scroll-panel bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-6 sm:p-7"
                delayMs={index * 80}
              >
                <div className="text-[11px] uppercase tracking-[0.28em] text-[#B99862]">{section.id}</div>
                <h4 className="mt-3 text-[1.55rem] font-semibold leading-tight text-[#FCF4EA]">{section.title}</h4>
                {section.intro ? <p className="mt-4 text-[15px] leading-8 text-white/68">{section.intro}</p> : null}
                <ul className="mt-5 space-y-4 text-[15px] leading-8 text-white/68">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D0A15D]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-l border-[#D0A15D]/30 pl-4 text-[15px] leading-8 text-[#F0D6A7]">
                  {section.note}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-t border-white/8 px-5 py-22 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#B99862]">как мы работаем</div>
            <h3 className="mt-4 font-[family:var(--font-display)] text-[clamp(2.4rem,3.7vw,4.2rem)] leading-[0.96] tracking-[-0.045em] text-[#F8F1E6]">
              Как проходит
              <br />
              консультация
              <br />
              и сопровождение
            </h3>
          </Reveal>

          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <Reveal
                key={step}
                className="scroll-panel flex items-start gap-5 bg-white/[0.025] px-5 py-5"
                delayMs={index * 70}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8B55D]/10 text-sm font-semibold text-[#F6C16A]">
                  {index + 1}
                </div>
                <div className="pt-2 text-[16px] leading-7 text-white/74">{step}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/8 px-5 py-22 sm:px-8 lg:px-10">
        <Reveal className="scroll-panel mx-auto max-w-[1500px] bg-[linear-gradient(180deg,rgba(232,181,93,0.08),rgba(255,255,255,0.02))] p-8 sm:p-10 lg:p-12">
          <div className="max-w-[860px]">
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#B99862]">контакты</div>
            <h3 className="mt-4 font-[family:var(--font-display)] text-[clamp(2.4rem,4vw,4.2rem)] leading-[0.95] tracking-[-0.04em] text-[#F8F1E6]">
              Получите
              <br />
              индивидуальную
              <br />
              консультацию
            </h3>
            <p className="mt-6 max-w-[760px] text-[16px] leading-8 text-white/64">
              Позвоните нам по номеру телефона +7 (916) 852 93 05, напишите в мессенджер
              или по электронной почте proenergyconsult@ya.ru.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:proenergyconsult@ya.ru"
              className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#E8B55D] px-7 text-[15px] font-semibold text-[#1A140B] transition duration-300 hover:translate-y-[-2px] hover:bg-[#F0C271] active:scale-[0.985]"
            >
              Написать на почту
            </a>
            <a
              href="tel:+79168529305"
              className="inline-flex min-h-13 items-center justify-center rounded-full bg-white/[0.03] px-7 text-[15px] font-semibold text-[#FAF3E8] transition duration-300 hover:translate-y-[-2px] hover:bg-white/[0.05] active:scale-[0.985]"
            >
              Позвонить
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
