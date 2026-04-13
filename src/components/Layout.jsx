function Layout({ children }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
        <div className="container-fluid">
          <span className="navbar-brand fw-bold">
            Solicitud de Repuestos
          </span>

          <div className="d-flex align-items-center gap-3 text-white">
            <span className="small">Taller agrícola</span>
            <button
              className="btn btn-light btn-sm"
              onClick={() => (window.location.href = '/')}
            >
              Salir
            </button>
          </div>
        </div>
      </nav>

      <main className="container-fluid py-4">
        {children}
      </main>
    </div>
  )
}

export default Layout