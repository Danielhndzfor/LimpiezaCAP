export interface WorkItem {
  id: string
  tag: string
  title: string
  placeholder: string
}

export const workItems: WorkItem[] = [
  {
    id: 'trabajo-1',
    tag: 'Residencial',
    title: 'Casa completa · limpieza profunda',
    placeholder: 'Foto: casa después de limpieza profunda',
  },
  {
    id: 'trabajo-2',
    tag: 'Muebles',
    title: 'Sala de 3 piezas · lavado y extracción',
    placeholder: 'Foto: sala recién lavada',
  },
  {
    id: 'trabajo-3',
    tag: 'Oficina',
    title: 'Corporativo · mantenimiento mensual',
    placeholder: 'Foto: oficina impecable',
  },
  {
    id: 'trabajo-4',
    tag: 'Aires',
    title: 'Minisplit · lavado y desinfección',
    placeholder: 'Foto: minisplit después del servicio',
  },
  {
    id: 'trabajo-5',
    tag: 'Post-obra',
    title: 'Departamento nuevo · entrega final',
    placeholder: 'Foto: depto post-obra terminado',
  },
  {
    id: 'trabajo-6',
    tag: 'Vidrios',
    title: 'Fachada comercial · cristales',
    placeholder: 'Foto: cristales relucientes',
  },
]
