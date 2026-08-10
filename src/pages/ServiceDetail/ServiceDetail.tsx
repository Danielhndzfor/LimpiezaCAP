import { Link, Navigate, useParams } from 'react-router-dom'
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder'
import { getServiceBySlug } from '../../data/services'
import { workItems } from '../../data/workItems'
import shared from '../../styles/shared.module.css'
import styles from './ServiceDetail.module.css'

function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = getServiceBySlug(slug)

  if (!service) {
    return <Navigate to="/servicios" replace />
  }

  const relatedWork = workItems.filter((item) => item.tag === service.tag)

  return (
    <div>
      <section className={`section ${styles['service-detail__intro']}`}>
        <Link to="/servicios" className={styles['service-detail__back']}>
          ← Todos los servicios
        </Link>
        <div className={styles['service-detail__head']}>
          <span className={styles['service-detail__icon']}>{service.icon}</span>
          <h1>{service.title}</h1>
        </div>
        <p className={styles['service-detail__long']}>{service.longDescription}</p>
      </section>

      <section className={`section ${styles['service-detail__grid']}`}>
        <div className={styles['service-detail__card']}>
          <h2>¿Qué incluye?</h2>
          <div className={shared.checklist}>
            {service.includes.map((item) => (
              <div key={item} className={shared['checklist-item']}>
                <span className={shared['checklist-item__mark']}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles['service-detail__card']} ${styles['service-detail__card--dark']}`}>
          <h2>Ideal para</h2>
          <p>{service.idealFor}</p>
          <Link
            to={`/contacto?servicio=${encodeURIComponent(service.title)}`}
            className="btn-primary"
          >
            Agendar este servicio →
          </Link>
        </div>
      </section>

      {relatedWork.length > 0 && (
        <section className={`section ${styles['service-detail__related']}`}>
          <h2 className="section-title">Trabajos de este servicio</h2>
          <div className={`${shared['grid-auto']} ${shared['grid-auto--wide']}`}>
            {relatedWork.map((item) => (
              <div key={item.id}>
                <div className={shared['work-card__image']}>
                  <ImagePlaceholder label={item.placeholder} />
                </div>
                <div className={`${shared['work-card__title']} ${styles['service-detail__work-title']}`}>
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default ServiceDetail
