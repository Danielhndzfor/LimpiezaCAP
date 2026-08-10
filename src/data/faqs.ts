export interface Faq {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: '¿Cómo cotizan un servicio?',
    answer:
      'Envíanos por WhatsApp el tipo de espacio, metros aproximados y el servicio que necesitas. Te respondemos con precio cerrado en menos de una hora, sin visitas obligatorias.',
  },
  {
    question: '¿Qué productos utilizan?',
    answer:
      'Productos profesionales biodegradables, seguros para niños y mascotas. Si alguien en casa tiene alergias, adaptamos los insumos sin costo extra.',
  },
  {
    question: '¿Cuánto tarda una limpieza?',
    answer:
      'Depende del servicio: un departamento estándar toma de 3 a 5 horas; una oficina mediana, de 2 a 4. Al cotizar te damos el tiempo estimado exacto.',
  },
  {
    question: '¿Qué pasa si algo no queda bien?',
    answer:
      'Aplicamos garantía de re-limpieza: si en las primeras 24 horas detectas algo pendiente, regresamos y lo resolvemos sin costo.',
  },
  {
    question: '¿Emiten factura?',
    answer: 'Sí, todos nuestros servicios pueden facturarse. Solo compártenos tus datos fiscales al agendar.',
  },
  {
    question: '¿Debo estar presente durante el servicio?',
    answer:
      'No es necesario. Muchos clientes nos entregan acceso y reciben fotos del antes y después. Todo nuestro personal está identificado y asegurado.',
  },
]

export interface BotPreset {
  question: string
  answer: string
}

export const botPresets: BotPreset[] = [
  {
    question: '¿Cuánto cuesta una limpieza?',
    answer:
      'Los precios dependen del tamaño y tipo de servicio. Una limpieza residencial estándar parte de un precio base accesible; envíanos los detalles por WhatsApp y te cotizamos en menos de 1 hora. 💰',
  },
  {
    question: '¿Qué servicios ofrecen?',
    answer:
      'Limpieza residencial, oficinas, muebles y tapicería, aires acondicionados, post-obra y vidrios. ¡Nos encargamos de todo! ✨',
  },
  {
    question: '¿En qué horarios trabajan?',
    answer:
      'De lunes a sábado, de 8:00 a 18:00. También agendamos servicios especiales en domingo para empresas. 🕐',
  },
  {
    question: '¿Cómo agendo un servicio?',
    answer:
      'Súper fácil: llena el formulario en la sección Contacto o tócame el botón verde de abajo para escribirnos directo por WhatsApp. 📅',
  },
  {
    question: '¿Usan productos seguros?',
    answer: 'Sí, todos nuestros productos son biodegradables y seguros para niños y mascotas. 🌱',
  },
]
