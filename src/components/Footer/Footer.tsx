import { NavLink } from 'react-router-dom'
import { navLinks } from '../../config/navigation'
import { contactInfo, whatsappLink } from '../../config/contact'
import logo from '../../assets/logo.jpg'
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from './SocialIcons'
import styles from './Footer.module.css'

const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'TikTok', href: 'https://tiktok.com', Icon: TikTokIcon },
  {
    label: 'WhatsApp',
    href: whatsappLink('Hola, me gustaría más información sobre sus servicios.'),
    Icon: WhatsAppIcon,
  },
]

const mapsQuery = encodeURIComponent(contactInfo.address)
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`
const mapsEmbedSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles['footer__inner']}>
        <div className={styles['footer__brand']}>
          <p className={styles['footer__logo']}>
            <img src={logo} alt="Logo Limpieza CAP" className={styles['footer__logo-img']} />
            Limpieza <span>CAP</span>
          </p>
          <p className={styles['footer__tagline']}>
            Limpieza profesional para hogares y empresas.{' '}
            <em>Lo hacemos por ti.</em>
          </p>
          <ul className={styles['footer__social']}>
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  <Icon className={styles['footer__social-icon']} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles['footer__col']}>
          <h3>Navegación</h3>
          <ul>
            {navLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink to={to} end={end}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles['footer__col']}>
          <h3>Contacto</h3>
          <ul className={styles['footer__contact']}>
            <li>
              <a href={contactInfo.phoneHref}>{contactInfo.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </li>
            <li>{contactInfo.hours}</li>
          </ul>
        </div>

        <div className={styles['footer__col']}>
          <h3>Ubicación</h3>
          <ul className={styles['footer__contact']}>
            <li>{contactInfo.address}</li>
            <li>
              <a href={mapsLink} target="_blank" rel="noreferrer">
                Ver en Google Maps
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles['footer__map']}>
        <iframe
          title="Ubicación de Cap Limpieza en Google Maps"
          src={mapsEmbedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <div className={styles['footer__bottom']}>
        <p>&copy; {year} Cap Limpieza. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
