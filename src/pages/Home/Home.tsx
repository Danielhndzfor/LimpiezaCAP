import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal/Reveal'
import Marquee from '../../components/Marquee/Marquee'
import Carousel from '../../components/Carousel/Carousel'
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder'
import { services } from '../../data/services'
import { workItems } from '../../data/workItems'
import { testimonials } from '../../data/testimonials'
import { whatsappLink } from '../../config/contact'
import logo from '../../assets/logo.jpg'
import shared from '../../styles/shared.module.css'
import carouselStyles from '../../components/Carousel/Carousel.module.css'
import styles from './Home.module.css'

const marqueeItems = [
  'RESIDENCIAL ✦',
  'OFICINAS ✦',
  'MUEBLES Y TAPICERÍA ✦',
  'AIRES ACONDICIONADOS ✦',
  'POST-OBRA ✦',
  'VIDRIOS ✦',
  'AGENDA HOY ✦',
]

function Home() {
  return (
    <div>
      <section className={styles['home-hero']}>
        <div className={`${styles['home-hero__blob']} ${styles['home-hero__blob--a']}`} />
        <div className={`${styles['home-hero__blob']} ${styles['home-hero__blob--b']}`} />
        <div className={styles['home-hero__copy']}>
          <Reveal as="p" className="eyebrow">
            ✦ LIMPIEZA PROFESIONAL · HOGARES Y EMPRESAS
          </Reveal>
          <Reveal as="h1" delay={100} className={styles['home-hero__title']}>
            Expertos en dejar tu espacio{' '}
            <span className={styles['home-hero__outline']}>impecable</span>
            <span className={styles['home-hero__dot']}>.</span>
          </Reveal>
          <Reveal as="p" delay={220} className={styles['home-hero__lead']}>
            Muebles, aires acondicionados, oficinas, hogares completos: en <strong>Limpieza CAP</strong>{' '}
            nos encargamos de todo con personal capacitado y productos seguros.{' '}
            <em>Lo hacemos por ti.</em>
          </Reveal>
          <Reveal delay={360} className={styles['home-hero__actions']}>
            <Link to="/contacto" className="btn-primary">
              Agendar limpieza →
            </Link>
            <Link to="/trabajos-recientes" className="btn-outline">
              Ver últimos trabajos
            </Link>
          </Reveal>
          <Reveal delay={500} className={styles['home-hero__stats']}>
            <span>★ 4.9 en reseñas</span>
            <span>· Respuesta en menos de 1 h</span>
            <span>· Garantía de re-limpieza</span>
          </Reveal>
        </div>
        <div className={styles['home-hero__visual']}>
          <div className={styles['home-hero__ring']} />
          <img
            src={logo}
            alt="Limpieza CAP — lo hacemos por ti"
            className={styles['home-hero__photo']}
          />
          <div className={`${styles['home-hero__badge']} ${styles['home-hero__badge--a']}`}>
            🫧 +480 clientes
          </div>
          <div className={`${styles['home-hero__badge']} ${styles['home-hero__badge--b']}`}>
            ✦ Lo hacemos por ti
          </div>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      <section className="section">
        <div className={styles['home-section-head']}>
          <div>
            <Reveal as="p" className="eyebrow">
              SERVICIOS
            </Reveal>
            <Reveal as="h2" delay={100} className="section-title">
              Nos encargamos de todo
            </Reveal>
          </div>
          <Link to="/servicios" className={styles['home-section-head__link']}>
            Ver todos los servicios →
          </Link>
        </div>
        <div className={styles['home-services-grid']}>
          {services.slice(0, 3).map((service, index) => (
            <Reveal key={service.slug} delay={index * 80} className={shared['service-card']}>
              <Link to={`/servicios/${service.slug}`} className={shared['service-card__link']}>
                <div className={shared['service-card__meta']}>
                  {service.num} {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles['home-work']}>
        <div className={`${styles['home-section-head']} ${styles['home-section-head--pad']}`}>
          <div>
            <Reveal as="p" className="eyebrow">
              ÚLTIMOS TRABAJOS
            </Reveal>
            <Reveal as="h2" delay={100} className="section-title">
              Resultados recientes
            </Reveal>
          </div>
        </div>
        <Carousel>
          {workItems.map((item) => (
            <div key={item.id} className={carouselStyles['carousel__item']}>
              <div className={shared['work-card__image']}>
                <ImagePlaceholder label={item.placeholder} />
              </div>
              <div className={shared['work-card__meta']}>
                <span className="pill">{item.tag}</span>
                <span className={shared['work-card__title']}>{item.title}</span>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      <section className="section">
        <Reveal as="p" className="eyebrow">
          TESTIMONIOS
        </Reveal>
        <Reveal as="h2" delay={100} className={`section-title ${styles['home-testimonials__title']}`}>
          Lo que dicen nuestros clientes
        </Reveal>
        <div className={styles['home-testimonials-grid']}>
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 80} className={shared['testimonial-card']}>
              <div className={shared['testimonial-card__stars']}>★★★★★</div>
              <p>&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <div className={shared['testimonial-card__name']}>{testimonial.name}</div>
                <div className={shared['testimonial-card__source']}>{testimonial.source}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal className={styles['home-cta']}>
          <div className={styles['home-cta__blob']} />
          <div className={styles['home-cta__copy']}>
            <h2>¿Listo para olvidarte de la limpieza?</h2>
            <p>Cotización sin costo y agenda en minutos por WhatsApp.</p>
          </div>
          <a
            href={whatsappLink('Hola Limpieza CAP 👋 Me gustaría más información.')}
            target="_blank"
            rel="noreferrer"
            className={styles['home-cta__button']}
          >
            Agendar ahora →
          </a>
        </Reveal>
      </section>
    </div>
  )
}

export default Home
