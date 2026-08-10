export interface Milestone {
  year: string
  title: string
  description: string
}

export const milestones: Milestone[] = [
  {
    year: '2014',
    title: 'El comienzo',
    description: 'Tres personas, una camioneta y las primeras casas en Salagua.',
  },
  {
    year: '2018',
    title: 'Primeros corporativos',
    description:
      'Firmamos los primeros contratos de mantenimiento mensual con oficinas de Manzanillo.',
  },
  {
    year: '2022',
    title: 'Nuevos servicios',
    description: 'Sumamos lavado de muebles, aires acondicionados y limpieza post-obra.',
  },
  {
    year: '2026',
    title: 'Hoy',
    description: 'Un equipo consolidado, más de 480 clientes y oficina propia en Nuevo Salagua.',
  },
]

export const companyStats = {
  years: 12,
  clients: 480,
  squareMetersK: 95,
}
