import Reveal from '../../components/Reveal/Reveal'
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion'
import { useWhatsAppBot } from '../../components/WhatsAppBot/useWhatsAppBot'
import { faqs } from '../../data/faqs'
import styles from './Faq.module.css'

function Faq() {
  const { open } = useWhatsAppBot()

  return (
    <div className={`section ${styles['faq-page']}`}>
      <Reveal as="p" className="eyebrow">
        PREGUNTAS FRECUENTES
      </Reveal>
      <Reveal as="h1" delay={100} className={styles['faq-page__title']}>
        Resolvemos tus dudas
      </Reveal>
      <FaqAccordion items={faqs} />
      <Reveal delay={100} className={styles['faq-page__banner']}>
        <p>¿No encuentras tu respuesta? Pregúntale a nuestro asistente 🫧</p>
        <button type="button" className="btn-primary" onClick={open}>
          Abrir chat
        </button>
      </Reveal>
    </div>
  )
}

export default Faq
