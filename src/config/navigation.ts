export interface NavLinkItem {
  to: string
  label: string
  end?: boolean
}

export const navLinks: NavLinkItem[] = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/trabajos-recientes', label: 'Trabajos Recientes' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contacto', label: 'Contacto' },
]
