import { useState } from 'react'
import Reveal from '../../components/Reveal/Reveal'
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder'
import Lightbox from '../../components/Lightbox/Lightbox'
import { workItems } from '../../data/workItems'
import shared from '../../styles/shared.module.css'
import styles from './RecentWork.module.css'

function RecentWork() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const activeItem = activeIndex !== null ? workItems[activeIndex] : null

  const showPrev = () =>
    setActiveIndex((index) => (index === null ? null : (index - 1 + workItems.length) % workItems.length))
  const showNext = () =>
    setActiveIndex((index) => (index === null ? null : (index + 1) % workItems.length))

  return (
    <div className="section">
      <Reveal as="p" className="eyebrow">
        ÚLTIMOS TRABAJOS
      </Reveal>
      <Reveal as="h1" delay={100} className={styles['recent-work__title']}>
        El resultado habla solo
      </Reveal>
      <Reveal as="p" delay={200} className={styles['recent-work__lead']}>
        Trabajos recientes de nuestro equipo. Toca una foto para verla en grande. Arrastra aquí
        las fotos reales de cada proyecto para mantener la galería siempre al día.
      </Reveal>
      <div className={`${shared['grid-auto']} ${shared['grid-auto--wide']}`}>
        {workItems.map((item, index) => (
          <Reveal key={item.id} delay={index * 60}>
            <button
              type="button"
              className={styles['recent-work__item']}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ampliar foto: ${item.title}`}
            >
              <div className={`${shared['work-card__image']} ${styles['work-card__image--tall']}`}>
                <ImagePlaceholder label={item.placeholder} />
                <span className={styles['recent-work__expand']} aria-hidden="true">
                  ⤢
                </span>
              </div>
            </button>
            <div className={shared['work-card__meta']}>
              <span className="pill">{item.tag}</span>
              <span className={shared['work-card__title']}>{item.title}</span>
            </div>
          </Reveal>
        ))}
      </div>

      {activeItem && (
        <Lightbox
          label={activeItem.placeholder}
          title={activeItem.title}
          tag={activeItem.tag}
          onClose={() => setActiveIndex(null)}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </div>
  )
}

export default RecentWork
