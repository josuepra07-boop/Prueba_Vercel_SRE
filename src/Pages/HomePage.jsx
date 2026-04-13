import KpiCard from '../components/KpiCard'
import DoughnutChart from '../components/DoughnutChart'
import BarChart from '../components/BarChart'
import { dashboardData } from '../data/dashboardData'

function HomePage() {
  const estadoColorMap = {
    PENDIENTES: '#212529',
    APROBADOS: '#198754',
    ELIMINADOS: '#dc3545'
  }

  const estadosLabels = dashboardData.estados.map((x) => x.label)
  const estadosValues = dashboardData.estados.map((x) => x.total)
  const estadosColors = estadosLabels.map(
    (x) => estadoColorMap[x] || '#6c757d'
  )

  const areasLabels = dashboardData.areas.map((x) => x.nombre)
  const areasValues = dashboardData.areas.map((x) => x.total)

  const supervisoresLabels = dashboardData.supervisores.map((x) => x.nombre)
  const supervisoresValues = dashboardData.supervisores.map((x) => x.total)

  return (
    <div className="container-fluid">
      <div className="row g-3 mb-3">
        <div className="col-12">
          <div className="section-title">SOLICITUDES POR ESTADO</div>
        </div>

        <div className="col-md-2">
          <KpiCard title="Total" value={dashboardData.total} />
        </div>

        <div className="col-md-2">
          <KpiCard title="Pendientes" value={dashboardData.pendientes} borderClass="border-start border-4 border-dark" />
        </div>

        <div className="col-md-2">
          <KpiCard title="Aprobadas" value={dashboardData.aprobadas} borderClass="border-start border-4 border-success" />
        </div>

        <div className="col-md-2">
          <KpiCard title="Eliminadas" value={dashboardData.eliminadas} borderClass="border-start border-4 border-danger" />
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <div className="card dash-card p-3">
            <h6 className="mb-3">Solicitudes por Estado</h6>
            <DoughnutChart
              labels={estadosLabels}
              values={estadosValues}
              colors={estadosColors}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="card dash-card p-3">
            <h6 className="mb-3">Solicitudes por Área</h6>
            <DoughnutChart
              labels={areasLabels}
              values={areasValues}
              colors={['#0d6efd', '#fd7e14', '#20c997', '#6f42c1', '#ffc107', '#dc3545']}
            />
          </div>
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <div className="card dash-card p-3">
            <h6 className="mb-3">Solicitudes por Supervisor</h6>
            <BarChart
              labels={supervisoresLabels}
              values={supervisoresValues}
              horizontal={true}
            />
          </div>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-12">
          <div className="card dash-card p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="mb-0">SOLICITUDES DEL DÍA</h6>
            </div>

            <div className="table-responsive">
              <table className="table table-hover table-bordered align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="text-center"># SOLICITUD</th>
                    <th className="text-center">FECHA</th>
                    <th className="text-center">ÁREA</th>
                    <th className="text-center">SUPERVISOR</th>
                    <th className="text-center">ESTADO SUP</th>
                    <th className="text-center">ANALISTA</th>
                    <th className="text-center">ESTADO ANA</th>
                    <th className="text-center">PRIORIDAD</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardData.ultimasSolicitudes.length > 0 ? (
                    dashboardData.ultimasSolicitudes.map((item) => (
                      <tr key={item.idSolicitud}>
                        <td className="text-center">{item.idSolicitud}</td>
                        <td className="text-center">{item.fecha}</td>
                        <td className="text-center">{item.area}</td>
                        <td className="text-center">{item.supervisor}</td>
                        <td className="text-center">{item.estado}</td>
                        <td className="text-center">{item.analista}</td>
                        <td className="text-center">{item.estadoAna}</td>
                        <td className="text-center">{item.prioridad}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center text-muted">
                        No hay registros para mostrar.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage