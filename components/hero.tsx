'use client'

import { useEffect, useState, useRef } from 'react'

/* ── Chat animation ── */
type Msg = {
  id: number
  from: 'user' | 'bot'
  text: string
  buttons?: string[]
  activeBtn?: number
}

const SEQUENCE: { msg?: Partial<Msg>; activateBtn?: { id: number; idx: number }; clear?: boolean; delay: number }[] = [
  { delay: 800,  msg: { from: 'user', text: 'Хочу записаться на стрижку ✂️' } },
  { delay: 1100, msg: { from: 'bot',  text: 'Выберите мастера:', buttons: ['Алексей', 'Денис', 'Максим'] } },
  { delay: 1600, activateBtn: { id: 1, idx: 0 } },
  { delay: 400,  msg: { from: 'user', text: 'Алексей' } },
  { delay: 1100, msg: { from: 'bot',  text: 'На какое время?', buttons: ['11:00', '14:00', '17:00'] } },
  { delay: 1600, activateBtn: { id: 3, idx: 1 } },
  { delay: 400,  msg: { from: 'user', text: '14:00' } },
  { delay: 1100, msg: { from: 'bot',  text: '✅ Запись подтверждена!\nАлексей — завтра в 14:00' } },
  { delay: 3000, clear: true },
]

let globalId = 0

function useChatLoop() {
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [typing, setTyping] = useState(false)
  const stepRef = useRef(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function runStep() {
      const step = SEQUENCE[stepRef.current % SEQUENCE.length]

      timerRef.current = setTimeout(() => {
        if (step.clear) {
          setMsgs([])
          setTyping(false)
        } else if (step.activateBtn) {
          const { id, idx } = step.activateBtn
          setMsgs(prev => prev.map(m => m.id === id ? { ...m, activeBtn: idx } : m))
        } else if (step.msg) {
          const isBot = step.msg.from === 'bot'
          if (isBot) {
            setTyping(true)
            timerRef.current = setTimeout(() => {
              setTyping(false)
              const newMsg: Msg = { id: ++globalId, from: 'bot', text: step.msg!.text!, buttons: step.msg!.buttons }
              setMsgs(prev => [...prev, newMsg])
              stepRef.current++
              runStep()
            }, 950)
            return
          } else {
            const newMsg: Msg = { id: ++globalId, from: 'user', text: step.msg!.text! }
            setMsgs(prev => [...prev, newMsg])
          }
        }
        stepRef.current++
        runStep()
      }, step.delay)
    }

    runStep()
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [])

  return { msgs, typing }
}

/* ── Phone mockup ── */
function PhoneDemo() {
  const { msgs, typing } = useChatLoop()
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [msgs, typing])

  return (
    <div style={{
      width: '264px',
      background: 'linear-gradient(160deg, #23233a 0%, #18182a 100%)',
      borderRadius: '44px',
      padding: '8px',
      boxShadow: '0 48px 96px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.1)',
    }}>
      {/* Screen */}
      <div style={{
        background: '#0d0d18',
        borderRadius: '38px',
        overflow: 'hidden',
        height: '496px',
        display: 'flex', flexDirection: 'column',
        position: 'relative',
      }}>
        {/* Dynamic island */}
        <div style={{
          width: '88px', height: '28px',
          background: '#000',
          borderRadius: '0 0 20px 20px',
          margin: '0 auto',
          flexShrink: 0,
          position: 'relative', zIndex: 2,
        }} />

        {/* Telegram header */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '10px 16px 12px',
          background: '#0d0d18',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          flexShrink: 0,
        }}>
          <div style={{
            width: '34px', height: '34px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366F1, #818CF8)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '14px', flexShrink: 0,
          }}>
            ✂️
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px', fontWeight: 700, color: '#F0EFF8',
              lineHeight: 1,
            }}>
              CUTBOOK Bot
            </div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '10px', color: '#22c55e',
              marginTop: '3px',
            }}>
              онлайн
            </div>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '14px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
              <path d="M21 21l-4.35-4.35" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Chat area */}
        <div
          ref={scrollRef}
          style={{
            flex: 1, overflowY: 'auto', overflowX: 'hidden',
            padding: '12px 12px 8px',
            display: 'flex', flexDirection: 'column', gap: '6px',
            scrollbarWidth: 'none',
          }}
        >
          {msgs.map(msg => (
            <ChatBubble key={msg.id} msg={msg} />
          ))}

          {typing && <TypingIndicator />}
        </div>

        {/* Input bar */}
        <div style={{
          padding: '8px 10px 12px',
          display: 'flex', alignItems: 'center', gap: '8px',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          flexShrink: 0,
          background: '#0d0d18',
        }}>
          <div style={{
            flex: 1, height: '32px', borderRadius: '16px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex', alignItems: 'center', padding: '0 12px',
          }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>
              Сообщение...
            </span>
          </div>
          <div style={{
            width: '32px', height: '32px', borderRadius: '50%',
            background: '#6366F1',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChatBubble({ msg }: { msg: Msg }) {
  const isUser = msg.from === 'user'
  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      alignItems: isUser ? 'flex-end' : 'flex-start',
      animation: 'chat-in 0.28s cubic-bezier(0.16,1,0.3,1) both',
    }}>
      <div style={{
        maxWidth: '78%',
        padding: '8px 11px',
        background: isUser ? '#6366F1' : '#1e1e30',
        borderRadius: isUser ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
        border: isUser ? 'none' : '1px solid rgba(255,255,255,0.06)',
      }}>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '12px', color: isUser ? '#fff' : '#D0CFDD',
          lineHeight: 1.45, margin: 0,
          whiteSpace: 'pre-line',
        }}>
          {msg.text}
        </p>
      </div>

      {msg.buttons && (
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '5px',
          marginTop: '5px', maxWidth: '90%',
        }}>
          {msg.buttons.map((b, i) => (
            <button key={b} style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px', fontWeight: 600,
              color: msg.activeBtn === i ? '#fff' : '#818CF8',
              padding: '5px 11px',
              background: msg.activeBtn === i ? '#6366F1' : 'rgba(99,102,241,0.1)',
              border: `1px solid ${msg.activeBtn === i ? '#6366F1' : 'rgba(99,102,241,0.25)'}`,
              borderRadius: '10px', cursor: 'default',
              transition: 'all 0.25s ease',
            }}>
              {b}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function TypingIndicator() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '4px',
      padding: '9px 12px',
      background: '#1e1e30',
      borderRadius: '16px 16px 16px 4px',
      width: 'fit-content',
      animation: 'chat-in 0.28s cubic-bezier(0.16,1,0.3,1) both',
    }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          width: '5px', height: '5px', borderRadius: '50%',
          background: '#818CF8',
          animation: `typing-dot 1.2s ease-in-out ${i * 0.2}s infinite`,
        }} />
      ))}
    </div>
  )
}

/* ── Hero ── */
export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100dvh',
        display: 'flex', alignItems: 'center',
        padding: 'clamp(100px, 12vh, 140px) clamp(20px, 5vw, 80px) clamp(60px, 8vh, 80px)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Dot grid */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />

      {/* Glows */}
      <div aria-hidden style={{
        position: 'absolute', top: '5%', right: '-5%',
        width: '700px', height: '700px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div aria-hidden style={{
        position: 'absolute', bottom: '10%', left: '-8%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.05) 0%, transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{
        margin: '0 auto', maxWidth: '1200px', width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 340px',
        gap: '80px', alignItems: 'center',
      }}>
        {/* LEFT */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 14px 6px 10px',
            background: 'rgba(99,102,241,0.1)',
            border: '1px solid rgba(99,102,241,0.2)',
            borderRadius: '100px', marginBottom: '36px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.55s ease 0.05s, transform 0.55s cubic-bezier(0.16,1,0.3,1) 0.05s',
          }}>
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: '#22c55e', flexShrink: 0,
              animation: 'status-pulse 2.2s ease-in-out infinite',
            }} />
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 500, color: '#9896AA' }}>
              Открыт к проектам
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(38px, 5vw, 68px)',
            fontWeight: 800, letterSpacing: '-0.04em',
            lineHeight: 1.06, color: '#F0EFF8',
            marginBottom: '22px', maxWidth: '12ch',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(18px)',
            transition: 'opacity 0.65s ease 0.15s, transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.15s',
          }}>
            Создаю цифровые{' '}
            <span style={{ color: '#818CF8' }}>Telegram-</span>продукты
          </h1>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(16px, 1.6vw, 18px)',
            color: '#6B6A7C', lineHeight: 1.75,
            maxWidth: '44ch', marginBottom: '36px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity 0.65s ease 0.28s, transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.28s',
          }}>
            Боты, мини-приложения и лендинги на Next.js. Строю продукты, которые работают внутри Telegram.
          </p>

          <div style={{
            display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '44px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.65s ease 0.42s, transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.42s',
          }}>
            <a href="#projects" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '13px 26px',
              background: '#6366F1', color: '#FFFFFF',
              fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 600,
              borderRadius: '12px', textDecoration: 'none',
              boxShadow: '0 4px 24px rgba(99,102,241,0.25)',
              transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#818CF8'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#6366F1'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Смотреть работы
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <a href="https://t.me/xapsu" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '13px 26px',
              background: 'rgba(255,255,255,0.06)', color: '#F0EFF8',
              fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 600,
              borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)',
              textDecoration: 'none',
              transition: 'border-color 0.2s, transform 0.15s, background 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'; e.currentTarget.style.background = 'rgba(99,102,241,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <TelegramSvg />
              Telegram
            </a>
          </div>

          <div style={{
            display: 'flex', gap: '6px', flexWrap: 'wrap',
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.65s ease 0.6s',
          }}>
            {['Next.js', 'TypeScript', 'Tailwind', 'Telegram Bot API', 'Supabase'].map(tag => (
              <span key={tag} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px', color: '#6B6A7C',
                padding: '4px 10px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '6px',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT: Phone demo */}
        <div
          className="hero-visual"
          style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.8s ease 0.3s',
          }}
        >
          <PhoneDemo />
        </div>
      </div>

      <style>{`
        @keyframes chat-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes typing-dot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30%            { transform: translateY(-4px); opacity: 1; }
        }
        @media (max-width: 860px) {
          .hero-visual { display: none !important; }
          #hero > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function TelegramSvg() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8.02c-.12.58-.46.72-.92.44l-2.54-1.87-1.23 1.18c-.14.14-.25.25-.5.25l.18-2.59 4.72-4.26c.2-.18-.05-.28-.32-.1L7.82 14.48 5.32 13.7c-.56-.18-.57-.56.12-.82l8.93-3.44c.47-.17.87.12.72.82z" fill="#F0EFF8"/>
    </svg>
  )
}
