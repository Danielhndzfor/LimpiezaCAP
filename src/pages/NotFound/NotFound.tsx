import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <section className={`section ${styles['not-found']}`}>
      <p className="eyebrow">ERROR 404</p>
      <h1>Página no encontrada</h1>
      <p className={styles['not-found__lead']}>
        Parece que esta página se limpió demasiado bien y ya no está aquí.
      </p>
      <Link to="/" className="btn-primary">
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFound
