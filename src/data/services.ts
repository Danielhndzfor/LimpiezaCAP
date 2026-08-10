export interface Service {
  num: string
  slug: string
  icon: string
  tag: string
  title: string
  shortDescription: string
  longDescription: string
  includes: string[]
  idealFor: string
}

export const services: Service[] = [
  {
    num: '01',
    slug: 'residencial',
    icon: '🏠',
    tag: 'Residencial',
    title: 'Limpieza residencial',
    shortDescription:
      'Profunda o de mantenimiento: cocina, baños, recámaras y áreas comunes, habitación por habitación.',
    longDescription:
      'Limpieza completa de tu hogar, habitación por habitación y con checklist de verificación. Puede ser un servicio profundo de una sola vez (mudanzas, ocasiones especiales, limpiezas de temporada) o un plan de mantenimiento semanal o quincenal con el mismo equipo asignado siempre a tu casa.',
    includes: [
      'Cocina: desengrasado de estufa, campana, alacenas y electrodomésticos por fuera',
      'Baños: desinfección de sanitarios, canceles, azulejos y coladeras',
      'Recámaras y áreas comunes: polvo, pisos, vidrios interiores y acomodo ligero',
      'Insumos y equipo profesional incluidos, biodegradables y seguros para mascotas',
    ],
    idealFor:
      'Hogares con poco tiempo, mudanzas, entregas de departamento y familias que quieren un mantenimiento constante sin preocuparse por nada.',
  },
  {
    num: '02',
    slug: 'oficinas',
    icon: '🏢',
    tag: 'Oficina',
    title: 'Oficinas y corporativos',
    shortDescription:
      'Planes por visita o mensuales, en horarios que no interrumpen tu operación. Facturamos.',
    longDescription:
      'Mantenimiento profesional para oficinas, consultorios y locales comerciales. Trabajamos antes o después de tu horario de operación, con personal uniformado e identificado y supervisión de calidad en cada visita. Todos los planes son facturables.',
    includes: [
      'Estaciones de trabajo, salas de juntas y recepción',
      'Baños y cocineta con reposición de consumibles (opcional)',
      'Pisos, vidrios interiores y desinfección de puntos de contacto',
      'Plan por visita, semanal o mensual con supervisor asignado',
    ],
    idealFor:
      'Empresas que necesitan un espacio impecable todos los días sin distraer a su equipo, con factura y un solo proveedor.',
  },
  {
    num: '03',
    slug: 'muebles',
    icon: '🛋️',
    tag: 'Muebles',
    title: 'Muebles y tapicería',
    shortDescription:
      'Lavado profundo de salas, colchones, sillas y alfombras con extracción y secado rápido.',
    longDescription:
      'Lavado profundo con inyección-extracción: retiramos manchas, ácaros y malos olores de salas, colchones, sillas de oficina, tapetes y alfombras. Usamos productos específicos por tipo de tela y el secado tarda solo unas horas.',
    includes: [
      'Salas y sillones: lavado por pieza con protección de estructura',
      'Colchones: desinfección y eliminación de ácaros por ambas caras',
      'Sillas, tapetes y alfombras: tratamiento de manchas y tránsito',
      'Aromatización final y tiempo de secado de 4 a 8 horas',
    ],
    idealFor:
      'Hogares con niños o mascotas, muebles con manchas o malos olores, y oficinas que quieren renovar sus sillas sin comprar nuevas.',
  },
  {
    num: '04',
    slug: 'aires',
    icon: '❄️',
    tag: 'Aires',
    title: 'Aires acondicionados',
    shortDescription:
      'Lavado y desinfección de minisplits y equipos: mejor aire, menor consumo y más vida útil.',
    longDescription:
      'Lavado completo de minisplits y equipos de ventana: turbina, serpentín, filtros y drenado. Un equipo limpio enfría mejor, consume menos energía y evita enfermedades respiratorias. En clima de puerto como Manzanillo, se recomienda cada 4 a 6 meses.',
    includes: [
      'Desarmado y lavado de turbina, serpentín y filtros',
      'Desinfección antibacterial y limpieza de drenado',
      'Revisión de funcionamiento general al finalizar',
      'Servicio a domicilio para equipos residenciales y de oficina',
    ],
    idealFor:
      'Casas y negocios en zona de costa, equipos que gotean, huelen a humedad o ya no enfrían como antes.',
  },
  {
    num: '05',
    slug: 'postobra',
    icon: '🧱',
    tag: 'Post-obra',
    title: 'Limpieza post-obra',
    shortDescription:
      'Retiro de polvo fino, residuos de pintura y cemento. Entregamos tu obra lista para estrenar.',
    longDescription:
      'Limpieza fina de entrega para obras nuevas y remodelaciones: retiramos polvo de construcción, restos de pintura, cemento y etiquetas, y detallamos vidrios, aluminio y pisos. Tu obra queda lista para entregar o habitar.',
    includes: [
      'Retiro de escombro ligero, polvo fino y residuos de obra',
      'Despegue de pintura, cemento y etiquetas en vidrios y pisos',
      'Detallado de cancelería, aluminio, sanitarios y muebles fijos',
      'Entrega con recorrido final y checklist junto al responsable de obra',
    ],
    idealFor:
      'Constructoras, arquitectos y propietarios que están por entregar o estrenar una obra o remodelación.',
  },
  {
    num: '06',
    slug: 'vidrios',
    icon: '🪟',
    tag: 'Vidrios',
    title: 'Vidrios y fachadas',
    shortDescription: 'Cristales, canceles y fachadas sin marcas, con equipo y técnica profesional.',
    longDescription:
      'Limpieza profesional de cristales, canceles, domos y fachadas comerciales, por dentro y por fuera. Usamos técnica y herramienta profesional para un acabado sin marcas, incluso en alturas accesibles con equipo de extensión.',
    includes: [
      'Cristales interiores y exteriores sin marcas ni escurrimientos',
      'Canceles de baño: retiro de sarro y sello de agua',
      'Fachadas comerciales y domos con equipo de extensión',
      'Marcos, rieles y mosquiteros incluidos',
    ],
    idealFor:
      'Locales comerciales que viven de su aparador, casas con canceles opacos por sarro y edificios con fachada de cristal.',
  },
]

export function getServiceBySlug(slug: string | undefined) {
  return services.find((service) => service.slug === slug)
}
