import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../../config/navigation'
import { contactInfo, whatsappLink } from '../../config/contact'
import logo from '../../assets/logo.jpg'
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from '../Footer/SocialIcons'
import styles from './Navbar.module.css'

const menuSocialLinks = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'TikTok', href: 'https://tiktok.com', Icon: TikTokIcon },
  {
    label: 'WhatsApp',
    href: whatsappLink('Hola, me gustaría más información sobre sus servicios.'),
    Icon: WhatsAppIcon,
  },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const [lastPathname, setLastPathname] = useState(location.pathname)

  if (location.pathname !== lastPathname) {
    setLastPathname(location.pathname)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', isMenuOpen)
  }, [isMenuOpen])

  return (
    <header className={`${styles.navbar}${isScrolled ? ` ${styles['navbar--scrolled']}` : ''}`}>
      <div className={styles['navbar__inner']}>
        <NavLink to="/" className={styles['navbar__brand']} onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="Logo Limpieza CAP" className={styles['navbar__logo']} />
          Limpieza <span>CAP</span>
        </NavLink>

        <nav
          id="navbar-menu"
          className={`${styles['navbar__nav']}${isMenuOpen ? ` ${styles['navbar__nav--open']}` : ''}`}
          aria-label="Principal"
        >
          <ul>
            {navLinks.map(({ to, label, end }, index) => (
              <li key={to}>
                <NavLink to={to} end={end} onClick={() => setIsMenuOpen(false)}>
                  <span className={styles['navbar__nav-index']}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink to="/contacto" className={styles['navbar__cta']} onClick={() => setIsMenuOpen(false)}>
            <span>Agenda Ahora</span>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavLink>

          <div className={styles['navbar__menu-footer']}>
            <a href={contactInfo.phoneHref} className={styles['navbar__menu-contact']}>
              {contactInfo.phoneDisplay}
            </a>
            <ul className={styles['navbar__menu-social']}>
              {menuSocialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <button
          type="button"
          className={`${styles['navbar__toggle']}${isMenuOpen ? ` ${styles['navbar__toggle--open']}` : ''}`}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
