import { useEffect, useRef, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { botPresets } from '../../data/faqs'
import { whatsappLink } from '../../config/contact'
import logo from '../../assets/logo.jpg'
import { useWhatsAppBot } from './useWhatsAppBot'
import styles from './WhatsAppBot.module.css'

interface BotMessage {
  id: number
  from: 'bot' | 'user'
  text: string
}

const INITIAL_MESSAGE: BotMessage = {
  id: 0,
  from: 'bot',
  text: '¡Hola! Soy CAPi, el asistente de Limpieza CAP 🫧 ¿En qué puedo ayudarte? Elige una pregunta abajo.',
}

function WhatsAppBot() {
  const { isOpen, close, toggle } = useWhatsAppBot()
  const [messages, setMessages] = useState<BotMessage[]>([INITIAL_MESSAGE])
  const [isTyping, setIsTyping] = useState(false)
  const bodyRef = useRef<HTMLDivElement | null>(null)
  const nextId = useRef(1)

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const askPreset = (question: string, answer: string) => {
    const userMsg: BotMessage = { id: nextId.current++, from: 'user', text: question }
    setMessages((prev) => [...prev, userMsg])
    setIsTyping(true)
    window.setTimeout(() => {
      setIsTyping(false)
      setMessages((prev) => [...prev, { id: nextId.current++, from: 'bot', text: answer }])
    }, 900)
  }

  return (
    <div className={styles['wa-bot']}>
      {isOpen && (
        <div className={styles['wa-bot__panel']} role="dialog" aria-label="Chat de WhatsApp">
          <div className={styles['wa-bot__header']}>
            <span className={styles['wa-bot__avatar-wrap']}>
              <img src={logo} alt="CAPi" className={styles['wa-bot__avatar']} />
              <FaWhatsapp className={styles['wa-bot__avatar-badge']} aria-hidden="true" />
            </span>
            <div className={styles['wa-bot__identity']}>
              <p className={styles['wa-bot__name']}>CAPi · Asistente CAP</p>
              <p className={styles['wa-bot__status']}>
                <span className={styles['wa-bot__dot']} />
                En línea · responde al instante
              </p>
            </div>
            <button
              type="button"
              className={styles['wa-bot__close']}
              onClick={close}
              aria-label="Cerrar chat"
            >
              ×
            </button>
          </div>

          <div className={styles['wa-bot__body']} ref={bodyRef}>
            {messages.map((message) => (
              <p
                key={message.id}
                className={`${styles['wa-bot__bubble']}${
                  message.from === 'user' ? ` ${styles['wa-bot__bubble--user']}` : ''
                }`}
              >
                {message.text}
              </p>
            ))}
            {isTyping && (
              <p
                className={`${styles['wa-bot__bubble']} ${styles['wa-bot__bubble--typing']}`}
                aria-label="Escribiendo…"
              >
                <span />
                <span />
                <span />
              </p>
            )}
          </div>

          <div className={styles['wa-bot__presets']}>
            {botPresets.map((preset) => (
              <button
                key={preset.question}
                type="button"
                onClick={() => askPreset(preset.question, preset.answer)}
              >
                {preset.question}
              </button>
            ))}
          </div>

          <a
            className={styles['wa-bot__cta']}
            href={whatsappLink('Hola Limpieza CAP 👋 Me gustaría más información.')}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp aria-hidden="true" /> Continuar en WhatsApp
          </a>
        </div>
      )}

      <button
        type="button"
        className={`${styles['wa-bot__toggle']}${isOpen ? ` ${styles['wa-bot__toggle--open']}` : ''}`}
        onClick={toggle}
        aria-label={isOpen ? 'Cerrar chat de WhatsApp' : 'Abrir chat de WhatsApp'}
      >
        {!isOpen && <span className={styles['wa-bot__ping']} aria-hidden="true" />}
        <FaWhatsapp aria-hidden="true" />
      </button>
    </div>
  )
}

export default WhatsAppBot
