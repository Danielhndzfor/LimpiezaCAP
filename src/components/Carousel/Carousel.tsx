import { useRef, type ReactNode } from 'react'
import styles from './Carousel.module.css'

interface CarouselProps {
  children: ReactNode
}

function Carousel({ children }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null)

  const scrollBy = (amount: number) => {
    trackRef.current?.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <div className={styles.carousel}>
      <div className={styles['carousel__controls']}>
        <button
          type="button"
          className={styles['carousel__btn']}
          aria-label="Anterior"
          onClick={() => scrollBy(-420)}
        >
          ←
        </button>
        <button
          type="button"
          className={styles['carousel__btn']}
          aria-label="Siguiente"
          onClick={() => scrollBy(420)}
        >
          →
        </button>
      </div>
      <div ref={trackRef} className={styles['carousel__track']}>
        {children}
      </div>
    </div>
  )
}

export default Carousel
