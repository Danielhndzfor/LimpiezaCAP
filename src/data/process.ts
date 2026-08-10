export interface ProcessStep {
  n: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    n: '01',
    title: 'Cotiza',
    description: 'Cuéntanos qué necesitas por WhatsApp o con el formulario. Precio cerrado, sin sorpresas.',
  },
  {
    n: '02',
    title: 'Agenda',
    description: 'Elige fecha y horario. Confirmamos disponibilidad en menos de una hora.',
  },
  {
    n: '03',
    title: 'Limpiamos',
    description: 'Llega el equipo CAP con todo el material. Tú no pones nada, solo abres la puerta.',
  },
  {
    n: '04',
    title: 'Verificamos',
    description: 'Recorrido final con checklist. Si algo no te convence, lo resolvemos al momento.',
  },
]
