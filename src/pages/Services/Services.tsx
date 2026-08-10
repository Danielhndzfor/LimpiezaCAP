import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal/Reveal'
import { services } from '../../data/services'
import { processSteps } from '../../data/process'
import shared from '../../styles/shared.module.css'
import styles from './Services.module.css'

function Services() {
  return (
    <div>
      <section className="section">
        <Reveal as="p" className="eyebrow">
          SERVICIOS
        </Reveal>
        <Reveal as="h1" delay={100} className={styles['services-page__title']}>
          Todo tipo de limpieza, un solo equipo
        </Reveal>
        <Reveal as="p" delay={200} className={styles['services-page__lead']}>
          Cada servicio incluye inspección inicial, materiales profesionales y verificación final
          con checklist. Si algo no queda bien, regresamos sin costo.
        </Reveal>
        <div className={`${shared['grid-auto']} ${shared['grid-auto--wide']}`}>
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 60} className={shared['service-card']}>
              <Link to={`/servicios/${service.slug}`} className={shared['service-card__link']}>
                <div className={styles['services-page__card-head']}>
                  <span className={`${shared['service-card__meta']} ${styles['services-page__card-num']}`}>
                    {service.num}
                  </span>
                  <span className={styles['services-page__icon']}>{service.icon}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
                <span className={shared['service-card__cta']}>Ver detalle →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={`section ${styles['services-page__process']}`}>
        <Reveal as="h2" className="section-title">
          Así trabajamos
        </Reveal>
        <div className={`${shared['grid-auto']} ${shared['grid-auto--narrow']}`}>
          {processSteps.map((step, index) => (
            <Reveal key={step.n} delay={index * 70} className={shared['step-card']}>
              <div className={shared['step-card__n']}>{step.n}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
