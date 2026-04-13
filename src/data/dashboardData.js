export const dashboardData = {
  total: 48,
  pendientes: 18,
  aprobadas: 22,
  eliminadas: 8,

  estados: [
    { label: 'PENDIENTES', total: 18 },
    { label: 'APROBADOS', total: 22 },
    { label: 'ELIMINADOS', total: 8 }
  ],

  areas: [
    { nombre: 'Taller Altillanura', total: 12 },
    { nombre: 'Agricultura', total: 10 },
    { nombre: 'Frigorífico', total: 9 },
    { nombre: 'Engativá', total: 7 },
    { nombre: 'Operaciones Finca', total: 10 }
  ],

  supervisores: [
    { nombre: 'Carlos Pérez', total: 9 },
    { nombre: 'María Torres', total: 7 },
    { nombre: 'Javier Rojas', total: 11 },
    { nombre: 'Ana Gómez', total: 6 },
    { nombre: 'Luis Medina', total: 15 }
  ],

  ultimasSolicitudes: [
    {
      idSolicitud: 1001,
      fecha: '2026-04-13',
      area: 'Taller Altillanura',
      supervisor: 'Carlos Pérez',
      estado: 'Pendiente',
      analista: 'Diana Ruiz',
      estadoAna: 'En revisión',
      prioridad: 'Alta'
    },
    {
      idSolicitud: 1002,
      fecha: '2026-04-13',
      area: 'Agricultura',
      supervisor: 'María Torres',
      estado: 'Aprobada',
      analista: 'Juan López',
      estadoAna: 'Atendida',
      prioridad: 'Media'
    },
    {
      idSolicitud: 1003,
      fecha: '2026-04-13',
      area: 'Frigorífico',
      supervisor: 'Javier Rojas',
      estado: 'Eliminada',
      analista: 'Paula Castro',
      estadoAna: 'Cerrada',
      prioridad: 'Baja'
    }
  ]
}