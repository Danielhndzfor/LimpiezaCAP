import { useEffect } from 'react'
import styles from './Lightbox.module.css'

interface LightboxProps {
  label: string
  title: string
  tag: string
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
}

function Lightbox({ label, title, tag, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onPrev?.()
      if (event.key === 'ArrowRight') onNext?.()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className={styles.lightbox}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <button type="button" className={styles['lightbox__close']} aria-label="Cerrar" onClick={onClose}>
        ×
      </button>

      {onPrev && (
        <button
          type="button"
          className={`${styles['lightbox__nav']} ${styles['lightbox__nav--prev']}`}
          aria-label="Anterior"
          onClick={(event) => {
            event.stopPropagation()
            onPrev()
          }}
        >
          ←
        </button>
      )}

      <div className={styles['lightbox__content']} onClick={(event) => event.stopPropagation()}>
        <div className={styles['lightbox__image']}>
          <span className={styles['lightbox__icon']}>🫧</span>
          <span className={styles['lightbox__label']}>{label}</span>
        </div>
        <div className={styles['lightbox__meta']}>
          <span className="pill">{tag}</span>
          <span className={styles['lightbox__title']}>{title}</span>
        </div>
      </div>

      {onNext && (
        <button
          type="button"
          className={`${styles['lightbox__nav']} ${styles['lightbox__nav--next']}`}
          aria-label="Siguiente"
          onClick={(event) => {
            event.stopPropagation()
            onNext()
          }}
        >
          →
        </button>
      )}
    </div>
  )
}

export default Lightbox
