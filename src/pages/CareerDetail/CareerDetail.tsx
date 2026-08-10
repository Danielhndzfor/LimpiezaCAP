import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getJobBySlug } from '../../data/jobs'
import { whatsappLink } from '../../config/contact'
import shared from '../../styles/shared.module.css'
import styles from './CareerDetail.module.css'

function CareerDetail() {
  const { slug } = useParams<{ slug: string }>()
  const job = getJobBySlug(slug)
  const [form, setForm] = useState({ nombre: '', telefono: '', experiencia: '' })

  if (!job) {
    return <Navigate to="/nosotros#vacantes" replace />
  }

  const setField =
    (key: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: event.target.value }))

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const message = [
      `Hola Limpieza CAP 👋 Quiero postularme a la vacante de ${job.title}:`,
      `• Nombre: ${form.nombre}`,
      `• Teléfono: ${form.telefono}`,
      `• Experiencia: ${form.experiencia || '—'}`,
    ].join('\n')
    window.open(whatsappLink(message), '_blank')
  }

  return (
    <div className={`section ${styles['career-detail']}`}>
      <Link to="/nosotros#vacantes" className={styles['career-detail__back']}>
        ← Todas las vacantes
      </Link>
      <div className={styles['career-detail__grid']}>
        <div>
          <span className="pill">{job.type}</span>
          <h1 className={styles['career-detail__title']}>{job.title}</h1>
          <p className={styles['career-detail__description']}>{job.description}</p>
          <h2 className={styles['career-detail__subtitle']}>Requisitos</h2>
          <div className={shared.checklist}>
            {job.requirements.map((requirement) => (
              <div key={requirement} className={shared['checklist-item']}>
                <span className={shared['checklist-item__mark']}>✓</span> {requirement}
              </div>
            ))}
          </div>
          <div className={styles['career-detail__perks']}>
            <strong>Ofrecemos:</strong> capacitación pagada, uniforme, seguro y horarios estables.
          </div>
        </div>

        <form onSubmit={handleSubmit} className={shared['contact-form']}>
          <h2 className={styles['career-detail__form-title']}>Postúlate aquí</h2>
          <label className={shared['contact-form__field']}>
            Nombre completo
            <input value={form.nombre} onChange={setField('nombre')} required placeholder="Tu nombre" />
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
          <label className={shared['contact-form__field']}>
            Tu experiencia (breve)
            <textarea
              value={form.experiencia}
              onChange={setField('experiencia')}
              rows={4}
              placeholder="p. ej. 2 años en limpieza de oficinas"
            />
          </label>
          <button type="submit" className={`btn-whatsapp ${shared['contact-form__submit']}`}>
            💬 Postularme por WhatsApp
          </button>
          <p className={shared['contact-form__hint']}>
            Se abrirá WhatsApp con tu postulación a &ldquo;{job.title}&rdquo; lista para enviar.
          </p>
        </form>
      </div>
    </div>
  )
}

export default CareerDetail
