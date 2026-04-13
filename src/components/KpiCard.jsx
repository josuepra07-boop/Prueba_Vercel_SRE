function KpiCard({ title, value, borderClass = '' }) {
  return (
    <div className={`card dash-card kpi-card p-3 text-center ${borderClass}`}>
      <div className="kpi-title">{title}</div>
      <div className="kpi-value">{value}</div>
    </div>
  )
}

export default KpiCard