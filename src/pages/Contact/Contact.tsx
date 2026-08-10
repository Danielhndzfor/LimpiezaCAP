import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Reveal from '../../components/Reveal/Reveal'
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder'
import { contactInfo, whatsappLink } from '../../config/contact'
import { services } from '../../data/services'
import shared from '../../styles/shared.module.css'
import styles from './Contact.module.css'

const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  contactInfo.address,
)}&output=embed`

function Contact() {
  const [searchParams] = useSearchParams()
  const preselectedService = searchParams.get('servicio') ?? services[0].title

  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    servicio: preselectedService,
    fecha: '',
    mensaje: '',
  })

  const setField =
    (key: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: event.target.value }))

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const message = [
      'Hola Limpieza CAP 👋 Quiero agendar una limpieza:',
      `• Nombre: ${form.nombre}`,
      `• Teléfono: ${form.telefono}`,
      `• Servicio: ${form.servicio}`,
      `• Fecha deseada: ${form.fecha || 'por definir'}`,
      `• Detalles: ${form.mensaje || '—'}`,
    ].join('\n')
    window.open(whatsappLink(message), '_blank')
  }

  return (
    <div>
      <section className={`section ${styles['contact-hero']}`}>
        <div>
          <Reveal as="p" className="eyebrow">
            CONTACTO
          </Reveal>
          <Reveal as="h1" delay={100} className={styles['contact-hero__title']}>
            Agenda tu limpieza
          </Reveal>
          <Reveal as="p" delay={200} className={styles['contact-hero__lead']}>
            Completa el formulario y tu solicitud se abrirá lista para enviar en WhatsApp. Te
            confirmamos disponibilidad en menos de una hora.
          </Reveal>
          <Reveal delay={300} className={styles['contact-hero__details']}>
            <a
              href={whatsappLink('Hola Limpieza CAP 👋 Me gustaría más información.')}
              target="_blank"
              rel="noreferrer"
              className={styles['contact-hero__detail']}
            >
              <span
                className={`${styles['contact-hero__detail-icon']} ${styles['contact-hero__detail-icon--whatsapp']}`}
              >
                💬
              </span>
              WhatsApp: {contactInfo.phoneDisplay}
            </a>
            <div className={styles['contact-hero__detail']}>
              <span className={styles['contact-hero__detail-icon']}>🕐</span>
              {contactInfo.hours}
            </div>
            <div className={styles['contact-hero__detail']}>
              <span className={styles['contact-hero__detail-icon']}>📍</span>
              {contactInfo.address}
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} as="form" className={shared['contact-form']} onSubmit={handleSubmit}>
          <label className={shared['contact-form__field']}>
            Nombre completo
            <input
              value={form.nombre}
              onChange={setField('nombre')}
              required
              placeholder="Tu nombre"
            />
          </label>
          <label className={shared['contact-form__field']}>
            Teléfono
            <input
              value={form.telefono}
              onChange={setField('telefono')}
              required
              placeholder="Tu número de contacto"
            />
          </label>
          <div className={shared['contact-form__row']}>
            <label className={shared['contact-form__field']}>
              Servicio
              <select value={form.servicio} onChange={setField('servicio')}>
                {services.map((service) => (
                  <option key={service.slug} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
            <label className={shared['contact-form__field']}>
              Fecha deseada
              <input type="date" value={form.fecha} onChange={setField('fecha')} />
            </label>
          </div>
          <label className={shared['contact-form__field']}>
            Cuéntanos del espacio
            <textarea
              value={form.mensaje}
              onChange={setField('mensaje')}
              rows={3}
              placeholder="p. ej. Departamento de 2 recámaras, limpieza profunda de cocina y baños"
            />
          </label>
          <button type="submit" className={`btn-whatsapp ${shared['contact-form__submit']}`}>
            💬 Enviar por WhatsApp
          </button>
          <p className={shared['contact-form__hint']}>
            Se abrirá WhatsApp con tu solicitud lista para enviar.
          </p>
        </Reveal>
      </section>

      <section className="section">
        <Reveal as="p" className="eyebrow">
          NUESTRA OFICINA
        </Reveal>
        <Reveal as="h2" delay={100} className="section-title">
          Visítanos en Manzanillo
        </Reveal>
        <Reveal as="p" delay={180} className={styles['contact-office__address']}>
          📍 {contactInfo.address}
        </Reveal>
        <div className={shared['office-grid']}>
          <iframe src={mapsEmbedSrc} title="Mapa: oficina Limpieza CAP" loading="lazy" />
          <div className={shared['office-grid__photos']}>
            <div>
              <ImagePlaceholder label="Foto: fachada de la oficina" />
            </div>
            <div>
              <ImagePlaceholder label="Foto: recepción" />
            </div>
            <div>
              <ImagePlaceholder label="Foto: equipo en la oficina" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
