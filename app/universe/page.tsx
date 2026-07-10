const orbitCards = [
  {
    title: 'Bot Layer',
    value: 'Lead capture, replies, reminders',
    tone: 'cyan',
    style: {
      top: '8%',
      right: '4%',
      width: '220px',
      transform: 'rotate(-4deg)',
    },
  },
  {
    title: 'Mini App',
    value: 'Catalog, onboarding, booking',
    tone: 'amber',
    style: {
      top: '36%',
      left: '-2%',
      width: '240px',
      transform: 'rotate(3deg)',
    },
  },
  {
    title: 'Payment Flow',
    value: 'Checkout, status, upsell',
    tone: 'slate',
    style: {
      bottom: '14%',
      right: '8%',
      width: '230px',
      transform: 'rotate(-2deg)',
    },
  },
]

const rails = [
  'Лендинг -> Telegram -> Mini App -> Оплата -> Возврат клиента',
  'Собираю не экранчики, а всю цифровую цепочку внутри Telegram.',
  'Проект выглядит дорого, работает быстро и ведет человека до действия.',
]

const caseNodes = [
  {
    name: 'IRON CLUB AI',
    type: 'Fitness mini app',
    outcome: 'Тренировки, питание, удержание внутри Telegram',
    accent: '#6ee7ff',
  },
  {
    name: 'BRUTAL CUT',
    type: 'Booking funnel',
    outcome: 'Запись в барбершоп без лишних шагов',
    accent: '#f4b75d',
  },
  {
    name: 'MIZUNA',
    type: 'Premium landing',
    outcome: 'Сильная подача бренда и аккуратный маршрут в заявку',
    accent: '#c7d2fe',
  },
]

const systemSteps = [
  {
    index: '01',
    title: 'Захват внимания',
    text: 'Человек заходит на лендинг и сразу понимает, что продукт живой, современный и ему можно доверять.',
  },
  {
    index: '02',
    title: 'Переход в Telegram',
    text: 'Дальше не тупик и не форма ради формы. Пользователь попадает в бота или mini app с понятным сценарием.',
  },
  {
    index: '03',
    title: 'Действие и возврат',
    text: 'Запись, заказ, оплата, уведомления, повторные касания. Вся система уже работает как единый механизм.',
  },
]

export default function UniversePage() {
  return (
    <main className="universe-page">
      <section className="universe-hero">
        <div className="universe-noise" />
        <div className="universe-grid" />

        <div className="universe-shell">
          <div className="universe-copy">
            <span className="universe-kicker">Telegram Product Universe</span>
            <h1>
              Портфолио не как список работ,
              <br />
              а как живая система продуктов.
            </h1>
            <p>
              Это концепт нового портфолио, где ты показываешь себя не просто
              фронтендером, а человеком, который собирает целую экосистему:
              лендинг, бот, mini app, оплату, аналитику и путь клиента внутри
              Telegram.
            </p>

            <div className="universe-actions">
              <a href="#cases" className="universe-primary">
                Смотреть, как это работает
              </a>
              <a href="/" className="universe-secondary">
                Вернуться к текущему портфолио
              </a>
            </div>

            <div className="universe-rails">
              {rails.map((rail) => (
                <div key={rail} className="universe-rail">
                  <span className="universe-rail-dot" />
                  <span>{rail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="universe-stage">
            <div className="universe-core">
              <div className="universe-core-ring universe-core-ring-a" />
              <div className="universe-core-ring universe-core-ring-b" />
              <div className="universe-phone">
                <div className="universe-phone-top" />
                <div className="universe-screen">
                  <div className="universe-screen-header">
                    <div className="universe-avatar">FW</div>
                    <div>
                      <div className="universe-screen-title">Product Flow</div>
                      <div className="universe-screen-subtitle">
                        Telegram-first ecosystem
                      </div>
                    </div>
                    <div className="universe-live-pill">LIVE</div>
                  </div>

                  <div className="universe-screen-metric">
                    <span>Pipeline status</span>
                    <strong>6 active modules</strong>
                  </div>

                  <div className="universe-screen-grid">
                    <div className="universe-screen-card">
                      <em>Landing</em>
                      <strong>Entry point</strong>
                    </div>
                    <div className="universe-screen-card">
                      <em>Bot</em>
                      <strong>Lead logic</strong>
                    </div>
                    <div className="universe-screen-card universe-screen-card-wide">
                      <em>Mini App</em>
                      <strong>Booking, catalog, retention</strong>
                    </div>
                  </div>

                  <div className="universe-screen-flow">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="universe-screen-footer">
                    <div>
                      <small>Conversion route</small>
                      <strong>{'Site -> TG -> Action'}</strong>
                    </div>
                    <div>
                      <small>Experience</small>
                      <strong>Fast, visual, sticky</strong>
                    </div>
                  </div>
                </div>
              </div>

              {orbitCards.map((card) => (
                <article
                  key={card.title}
                  className={`universe-orbit universe-orbit-${card.tone}`}
                  style={card.style}
                >
                  <span>{card.title}</span>
                  <strong>{card.value}</strong>
                </article>
              ))}

              <div className="universe-link universe-link-a" />
              <div className="universe-link universe-link-b" />
              <div className="universe-link universe-link-c" />
            </div>
          </div>
        </div>
      </section>

      <section className="universe-section" id="cases">
        <div className="universe-section-head">
          <span>Case Constellation</span>
          <h2>Каждый кейс это часть одной экосистемы, а не отдельная карточка.</h2>
        </div>

        <div className="universe-case-grid">
          {caseNodes.map((node) => (
            <article key={node.name} className="universe-case-card">
              <div
                className="universe-case-glow"
                style={{ background: `radial-gradient(circle, ${node.accent}44, transparent 70%)` }}
              />
              <div className="universe-case-line" style={{ backgroundColor: node.accent }} />
              <span>{node.type}</span>
              <h3>{node.name}</h3>
              <p>{node.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="universe-section universe-system">
        <div className="universe-section-head">
          <span>Why This Hits</span>
          <h2>Сайт сразу объясняет, чем ты отличаешься от обычного разработчика.</h2>
        </div>

        <div className="universe-system-grid">
          {systemSteps.map((step) => (
            <article key={step.index} className="universe-system-card">
              <span>{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="universe-section universe-endcap">
        <div className="universe-endcap-copy">
          <span>Что это сейчас</span>
          <h2>Это новый концепт твоего портфолио, пока как отдельная превью-страница.</h2>
          <p>
            То есть да: по сути это новая версия твоего портфолио. Пока она
            живет отдельно, чтобы ты мог спокойно посмотреть вайб, подачу и
            структуру. Если концепт зайдет, мы потом перенесем его на главную и
            дожмем до полноценного продакшена.
          </p>
        </div>
      </section>

      <style>{`
        .universe-page {
          min-height: 100dvh;
          background:
            radial-gradient(circle at top left, rgba(110, 231, 255, 0.09), transparent 28%),
            radial-gradient(circle at 85% 20%, rgba(244, 183, 93, 0.1), transparent 24%),
            linear-gradient(180deg, #06070b 0%, #090b12 52%, #05060a 100%);
          color: #f3f6fb;
        }

        .universe-hero {
          position: relative;
          overflow: hidden;
          padding: 40px 24px 24px;
        }

        .universe-noise,
        .universe-grid {
          pointer-events: none;
          position: absolute;
          inset: 0;
        }

        .universe-noise {
          opacity: 0.12;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 140px 140px;
          mask-image: radial-gradient(circle at center, black, transparent 86%);
        }

        .universe-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 32px 32px;
        }

        .universe-shell,
        .universe-section {
          position: relative;
          z-index: 1;
          width: min(1380px, 100%);
          margin: 0 auto;
        }

        .universe-shell {
          min-height: calc(100dvh - 64px);
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(420px, 0.95fr);
          gap: 40px;
          align-items: center;
        }

        .universe-copy {
          padding-top: 48px;
        }

        .universe-kicker,
        .universe-section-head span,
        .universe-endcap-copy span {
          display: inline-flex;
          align-items: center;
          min-height: 38px;
          padding: 0 16px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #a9b4c7;
        }

        .universe-copy h1,
        .universe-section-head h2,
        .universe-endcap-copy h2 {
          margin: 24px 0 0;
          font-size: clamp(52px, 6vw, 94px);
          line-height: 0.94;
          letter-spacing: -0.06em;
          text-wrap: balance;
        }

        .universe-copy p,
        .universe-endcap-copy p {
          margin: 28px 0 0;
          max-width: 42rem;
          color: #8c97ab;
          font-size: 18px;
          line-height: 1.8;
        }

        .universe-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 36px;
        }

        .universe-primary,
        .universe-secondary {
          min-height: 56px;
          padding: 0 24px;
          border-radius: 999px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 220ms cubic-bezier(0.32, 0.72, 0, 1), border-color 220ms ease, background 220ms ease;
        }

        .universe-primary {
          color: #051018;
          background: linear-gradient(135deg, #6ee7ff 0%, #f4b75d 130%);
          font-weight: 700;
          box-shadow: 0 18px 54px rgba(110, 231, 255, 0.18);
        }

        .universe-secondary {
          color: #d7deea;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.03);
        }

        .universe-primary:hover,
        .universe-secondary:hover {
          transform: translateY(-2px);
        }

        .universe-rails {
          margin-top: 42px;
          display: grid;
          gap: 12px;
        }

        .universe-rail {
          display: flex;
          align-items: center;
          gap: 14px;
          color: #a1adbf;
          font-size: 15px;
        }

        .universe-rail-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6ee7ff, #f4b75d);
          box-shadow: 0 0 16px rgba(110, 231, 255, 0.55);
          flex: 0 0 auto;
        }

        .universe-stage {
          position: relative;
          min-height: 760px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .universe-core {
          position: relative;
          width: 100%;
          max-width: 620px;
          aspect-ratio: 1 / 1;
          border-radius: 44px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02)),
            rgba(7, 10, 16, 0.72);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow:
            0 40px 120px rgba(0,0,0,0.55),
            inset 0 1px 0 rgba(255,255,255,0.1);
          overflow: hidden;
        }

        .universe-core::before {
          content: '';
          position: absolute;
          inset: 16px;
          border-radius: 34px;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .universe-core-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .universe-core-ring-a {
          width: 76%;
          height: 76%;
        }

        .universe-core-ring-b {
          width: 96%;
          height: 96%;
          border-color: rgba(110, 231, 255, 0.09);
        }

        .universe-phone {
          position: absolute;
          inset: 50%;
          width: 292px;
          height: 594px;
          transform: translate(-50%, -50%);
          border-radius: 40px;
          padding: 9px;
          background: linear-gradient(160deg, #1b2230 0%, #0f131d 50%, #090d14 100%);
          box-shadow:
            0 32px 90px rgba(0,0,0,0.7),
            0 0 0 1px rgba(255,255,255,0.08),
            inset 0 1px 0 rgba(255,255,255,0.1);
        }

        .universe-phone-top {
          position: absolute;
          left: 50%;
          top: 9px;
          width: 96px;
          height: 28px;
          transform: translateX(-50%);
          border-radius: 0 0 18px 18px;
          background: #05070b;
          z-index: 2;
        }

        .universe-screen {
          height: 100%;
          border-radius: 32px;
          background:
            radial-gradient(circle at top, rgba(110, 231, 255, 0.13), transparent 30%),
            linear-gradient(180deg, #0b0f17 0%, #09111a 100%);
          border: 1px solid rgba(255,255,255,0.05);
          overflow: hidden;
          padding: 54px 18px 18px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .universe-screen-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .universe-avatar {
          width: 38px;
          height: 38px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          color: #041119;
          font-weight: 800;
          background: linear-gradient(135deg, #6ee7ff, #f4b75d);
        }

        .universe-screen-title {
          font-size: 14px;
          font-weight: 700;
        }

        .universe-screen-subtitle,
        .universe-screen-header div:last-child,
        .universe-screen small,
        .universe-screen-metric span,
        .universe-screen-card em {
          color: #8490a2;
          font-style: normal;
          font-size: 11px;
        }

        .universe-live-pill {
          margin-left: auto;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid rgba(110, 231, 255, 0.22);
          background: rgba(110, 231, 255, 0.1);
          color: #6ee7ff;
          font-size: 10px;
          letter-spacing: 0.12em;
        }

        .universe-screen-metric,
        .universe-screen-footer,
        .universe-screen-card {
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.04);
        }

        .universe-screen-metric {
          padding: 14px 16px;
          display: flex;
          justify-content: space-between;
          align-items: end;
        }

        .universe-screen-metric strong,
        .universe-screen-card strong,
        .universe-screen-footer strong {
          font-size: 14px;
          line-height: 1.3;
        }

        .universe-screen-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .universe-screen-card {
          min-height: 94px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .universe-screen-card-wide {
          grid-column: span 2;
          min-height: 112px;
          background: linear-gradient(135deg, rgba(110, 231, 255, 0.1), rgba(244, 183, 93, 0.08));
        }

        .universe-screen-flow {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-top: auto;
        }

        .universe-screen-flow span {
          height: 8px;
          border-radius: 999px;
          background: linear-gradient(90deg, rgba(110, 231, 255, 0.14), rgba(244, 183, 93, 0.72));
        }

        .universe-screen-footer {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          padding: 14px 16px;
        }

        .universe-orbit {
          position: absolute;
          z-index: 3;
          padding: 16px 18px;
          border-radius: 22px;
          backdrop-filter: blur(20px);
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 18px 44px rgba(0,0,0,0.28);
        }

        .universe-orbit span {
          display: block;
          color: #8f9cb0;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .universe-orbit strong {
          display: block;
          margin-top: 10px;
          font-size: 16px;
          line-height: 1.45;
          font-weight: 650;
        }

        .universe-orbit-cyan strong { color: #d9fbff; }
        .universe-orbit-amber strong { color: #ffe2b3; }
        .universe-orbit-slate strong { color: #e4e9f8; }

        .universe-link {
          position: absolute;
          border-top: 1px dashed rgba(255,255,255,0.16);
          transform-origin: left center;
          opacity: 0.75;
        }

        .universe-link-a {
          width: 132px;
          top: 26%;
          right: 31%;
          transform: rotate(-20deg);
        }

        .universe-link-b {
          width: 146px;
          bottom: 31%;
          left: 17%;
          transform: rotate(18deg);
        }

        .universe-link-c {
          width: 112px;
          bottom: 21%;
          right: 23%;
          transform: rotate(33deg);
        }

        .universe-section {
          padding: 42px 24px 110px;
        }

        .universe-section-head {
          max-width: 920px;
        }

        .universe-section-head h2,
        .universe-endcap-copy h2 {
          font-size: clamp(36px, 4.4vw, 64px);
          line-height: 1;
        }

        .universe-case-grid,
        .universe-system-grid {
          margin-top: 34px;
          display: grid;
          gap: 18px;
        }

        .universe-case-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .universe-case-card,
        .universe-system-card,
        .universe-endcap-copy {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
        }

        .universe-case-card {
          min-height: 290px;
          padding: 28px;
        }

        .universe-case-glow {
          position: absolute;
          inset: -10% auto auto -10%;
          width: 180px;
          height: 180px;
          filter: blur(12px);
          opacity: 0.9;
        }

        .universe-case-line {
          width: 56px;
          height: 3px;
          border-radius: 999px;
          position: relative;
          z-index: 1;
        }

        .universe-case-card span,
        .universe-system-card span {
          position: relative;
          z-index: 1;
          display: block;
          margin-top: 18px;
          color: #8a96aa;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .universe-case-card h3,
        .universe-system-card h3 {
          position: relative;
          z-index: 1;
          margin: 14px 0 0;
          font-size: 28px;
          line-height: 0.98;
          letter-spacing: -0.04em;
        }

        .universe-case-card p,
        .universe-system-card p {
          position: relative;
          z-index: 1;
          margin: 14px 0 0;
          color: #91a0b4;
          line-height: 1.75;
          font-size: 15px;
        }

        .universe-system-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .universe-system-card {
          padding: 28px;
          min-height: 260px;
        }

        .universe-system-card span {
          color: #f4b75d;
          font-family: var(--font-mono);
          font-size: 14px;
          letter-spacing: 0.1em;
        }

        .universe-endcap {
          padding-bottom: 140px;
        }

        .universe-endcap-copy {
          padding: 34px;
          max-width: 960px;
        }

        @media (max-width: 1180px) {
          .universe-shell {
            grid-template-columns: 1fr;
          }

          .universe-copy {
            padding-top: 90px;
          }

          .universe-stage {
            min-height: 680px;
          }
        }

        @media (max-width: 960px) {
          .universe-case-grid,
          .universe-system-grid {
            grid-template-columns: 1fr;
          }

          .universe-core {
            max-width: 100%;
          }
        }

        @media (max-width: 720px) {
          .universe-hero,
          .universe-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .universe-copy h1 {
            font-size: clamp(42px, 13vw, 66px);
          }

          .universe-copy p,
          .universe-endcap-copy p {
            font-size: 16px;
          }

          .universe-stage {
            min-height: 560px;
          }

          .universe-phone {
            width: 236px;
            height: 490px;
          }

          .universe-orbit {
            display: none;
          }

          .universe-link {
            display: none;
          }

          .universe-screen-footer {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  )
}
