import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal/Reveal'
import Counter from '../../components/Counter/Counter'
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder'
import { values } from '../../data/values'
import { milestones, companyStats } from '../../data/milestones'
import { jobs } from '../../data/jobs'
import shared from '../../styles/shared.module.css'
import styles from './About.module.css'

function About() {
  return (
    <div>
      <section className={`section ${styles['about-hero']}`}>
        <Reveal className={styles['about-hero__visual']}>
          <div className={styles['about-hero__blob']} />
          <div className={styles['about-hero__photo']}>
            <ImagePlaceholder label="Foto del equipo CAP en acción" icon="🧽" />
          </div>
          <div className={styles['about-hero__badge']}>🫧 Personal capacitado y asegurado</div>
        </Reveal>
        <div>
          <Reveal as="p" className="eyebrow">
            NOSOTROS
          </Reveal>
          <Reveal as="h1" delay={100} className={styles['about-hero__title']}>
            Profesionales obsesionados con el <em>detalle</em>
          </Reveal>
          <Reveal as="p" delay={200} className={styles['about-hero__lead']}>
            Limpieza CAP nació con una idea simple: que confiar la limpieza de tu casa o tu
            empresa sea tan fácil como enviar un mensaje. Hoy operamos con procesos verificados,
            productos biodegradables y un equipo que trata cada espacio como propio.
          </Reveal>
          <Reveal delay={300} className={styles['about-hero__stats']}>
            <div>
              <Counter target={companyStats.years} suffix="+" />
              <div className={styles['about-hero__stat-label']}>años de experiencia</div>
            </div>
            <div>
              <Counter target={companyStats.clients} />
              <div className={styles['about-hero__stat-label']}>clientes atendidos</div>
            </div>
            <div>
              <Counter target={companyStats.squareMetersK} suffix="k" />
              <div className={styles['about-hero__stat-label']}>m² limpiados</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className={shared['grid-auto']}>
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 80} className={shared['value-card']}>
              <div className={shared['value-card__icon']}>{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={`section ${styles['about-tones']}`}>
        <Reveal className={`${shared['tone-card']} ${shared['tone-card--primary']}`}>
          <div className={shared['tone-card__label']}>MISIÓN</div>
          <p>
            Devolver tiempo y tranquilidad a las personas y empresas de Manzanillo, cuidando cada
            espacio como si fuera nuestro.
          </p>
        </Reveal>
        <Reveal delay={100} className={`${shared['tone-card']} ${shared['tone-card--dark']}`}>
          <div className={shared['tone-card__label']}>VISIÓN</div>
          <p>
            Ser la empresa de limpieza de referencia en Colima, reconocida por su calidad
            verificable y por el orgullo de su equipo.
          </p>
        </Reveal>
      </section>

      <section className={`section ${styles['about-history']}`}>
        <Reveal as="p" className="eyebrow">
          HISTORIA
        </Reveal>
        <Reveal as="h2" delay={100} className={`section-title ${styles['about-history__title']}`}>
          Nuestro camino
        </Reveal>
        <div className={shared.timeline}>
          {milestones.map((milestone, index) => (
            <Reveal key={milestone.year} delay={index * 70} className={shared['timeline-item']}>
              <div className={shared['timeline-item__rail']}>
                <span className={shared['timeline-item__dot']} />
                <span className={shared['timeline-item__line']} />
              </div>
              <div>
                <div className={shared['timeline-item__year']}>{milestone.year}</div>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="vacantes" className={styles['about-jobs']}>
        <div className={styles['about-jobs__blob']} />
        <div className={styles['about-jobs__inner']}>
          <Reveal as="p" className="eyebrow eyebrow--light">
            TRABAJA CON NOSOTROS
          </Reveal>
          <Reveal as="h2" delay={100} className={`section-title ${styles['about-jobs__title']}`}>
            Únete al equipo CAP
          </Reveal>
          <Reveal as="p" delay={180} className={styles['about-jobs__lead']}>
            Buscamos personas comprometidas y detallistas. Ofrecemos capacitación pagada,
            uniforme, seguro y horarios estables.
          </Reveal>
          <div className={shared['grid-auto']}>
            {jobs.map((job, index) => (
              <Reveal
                key={job.slug}
                delay={index * 80}
                className={`${shared['job-card']} ${styles['about-jobs__card']}`}
              >
                <div className={shared['job-card__header']}>
                  <h3>{job.title}</h3>
                  <span className={`${shared['job-card__type']} ${styles['about-jobs__job-type']}`}>
                    {job.type}
                  </span>
                </div>
                <p>{job.description}</p>
                <Link
                  to={`/vacantes/${job.slug}`}
                  className={`${shared['job-card__link']} ${styles['about-jobs__link']}`}
                >
                  Ver vacante y postularme →
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
