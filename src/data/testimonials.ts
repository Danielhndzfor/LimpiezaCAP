export interface Testimonial {
  quote: string
  name: string
  source: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Dejaron el departamento como recién entregado. Puntuales, discretos y muy cuidadosos con todo.',
    name: 'Mariana G.',
    source: 'Limpieza residencial · Salagua',
  },
  {
    quote:
      'Contratamos el plan mensual para la oficina y el cambio se nota. El equipo llega siempre a tiempo y facturan sin problema.',
    name: 'Lic. R. Ceballos',
    source: 'Corporativo · Centro de Manzanillo',
  },
  {
    quote:
      'Lavaron la sala y los colchones; quedaron como nuevos y sin olor a humedad. Totalmente recomendados.',
    name: 'Karla M.',
    source: 'Muebles y tapicería',
  },
]
