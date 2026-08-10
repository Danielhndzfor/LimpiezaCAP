export const contactInfo = {
  phoneDisplay: '+52 1 314 133 4880',
  phoneHref: 'tel:+523141334880',
  whatsappNumber: '5213141334880',
  email: 'contacto@limpiezacap.com',
  address: 'Rosario Castellanos 15, Nuevo Salagua, 28869 Manzanillo, Colima',
  hours: 'Lunes a sábado, 8:00 – 18:00',
}

export function whatsappLink(message: string) {
  return `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(message)}`
}
