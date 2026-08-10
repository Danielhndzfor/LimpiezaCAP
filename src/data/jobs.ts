export interface Job {
  slug: string
  title: string
  type: string
  description: string
  requirements: string[]
}

export const jobs: Job[] = [
  {
    slug: 'auxiliar-de-limpieza',
    title: 'Auxiliar de limpieza',
    type: 'Tiempo completo',
    description:
      'Limpieza residencial y de oficinas. No necesitas experiencia: nosotros te capacitamos. Zona centro y alrededores.',
    requirements: [
      'Mayor de 18 años, con disponibilidad de lunes a sábado',
      'Gusto por el trabajo detallista y en equipo',
      'No necesitas experiencia: nosotros te capacitamos',
    ],
  },
  {
    slug: 'supervisor-de-cuadrilla',
    title: 'Supervisor(a) de cuadrilla',
    type: 'Tiempo completo',
    description:
      'Coordina equipos de 3 a 5 personas, verifica checklists de calidad y atiende al cliente en sitio. 2+ años de experiencia.',
    requirements: [
      '2+ años de experiencia en limpieza profesional o supervisión',
      'Manejo de checklists y trato directo con clientes',
      'Licencia de manejo vigente (deseable)',
    ],
  },
  {
    slug: 'tecnico-lavado-muebles',
    title: 'Técnico en lavado de muebles',
    type: 'Medio tiempo',
    description:
      'Lavado de salas, colchones y tapicería con equipo de extracción. Experiencia deseable, licencia de manejo.',
    requirements: [
      'Experiencia deseable con equipo de inyección-extracción',
      'Licencia de manejo vigente',
      'Disponibilidad de medio tiempo con horario flexible',
    ],
  },
]

export function getJobBySlug(slug: string | undefined) {
  return jobs.find((job) => job.slug === slug)
}
