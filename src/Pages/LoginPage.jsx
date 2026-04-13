import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function LoginPage() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    usuario: '',
    password: ''
  })

  const [error, setError] = useState('')

  const [showChangePassword, setShowChangePassword] = useState(false)

  const [changePasswordForm, setChangePasswordForm] = useState({
    usuario: '',
    actual: '',
    nueva: '',
    confirmar: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleChangePasswordFields = (e) => {
    setChangePasswordForm({
      ...changePasswordForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.usuario || !form.password) {
      setError('Debe ingresar usuario y contraseña.')
      return
    }

    setError('')

    Swal.fire({
      icon: 'success',
      title: 'Ingreso exitoso',
      text: 'Bienvenido al sistema'
    }).then(() => {
      navigate('/home')
    })
  }

  const handleChangePasswordSubmit = (e) => {
    e.preventDefault()

    const { usuario, actual, nueva, confirmar } = changePasswordForm

    if (!usuario || !actual || !nueva || !confirmar) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Debe diligenciar toda la información.'
      })
      return
    }

    if (nueva !== confirmar) {
      Swal.fire({
        icon: 'error',
        title: 'Validación',
        text: 'La nueva contraseña y la confirmación no coinciden.'
      })
      return
    }

    if (nueva.length < 6) {
      Swal.fire({
        icon: 'warning',
        title: 'Contraseña no válida',
        text: 'La nueva contraseña debe tener al menos 6 caracteres.'
      })
      return
    }

    Swal.fire({
      icon: 'success',
      title: 'Solicitud procesada',
      text: 'La contraseña fue actualizada correctamente.'
    })

    setChangePasswordForm({
      usuario: '',
      actual: '',
      nueva: '',
      confirmar: ''
    })

    setShowChangePassword(false)
  }

  return (
    <div className="login-page">
      <div className="overlay"></div>

      <div className="login-section animate__animated animate__fadeIn">
        <div className="login-form">
          <div className="brand-title">
            <h1>
              SOLICITUD DE <span>REPUESTOS</span>
            </h1>
            <div className="brand-subtitle">Taller agrícola</div>
          </div>

          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="mb-3">
              <label className="form-label">Usuario</label>
              <input
                type="text"
                name="usuario"
                className="form-control"
                value={form.usuario}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
            </div>

            <div className="d-flex justify-content-end mb-2">
              <button
                type="button"
                className="btn btn-link p-0 login-link"
                onClick={() => {
                  setChangePasswordForm((prev) => ({
                    ...prev,
                    usuario: form.usuario
                  }))
                  setShowChangePassword(true)
                }}
              >
                Cambiar contraseña
              </button>
            </div>

            <div className="alert-text">{error}</div>

            <button type="submit" className="btn btn-primary w-100">
              Iniciar sesión
            </button>
          </form>

          <footer>© 2026 - SRE</footer>
        </div>
      </div>

      {showChangePassword && (
        <div className="custom-modal-backdrop">
          <div className="custom-modal-card animate__animated animate__fadeInDown">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">Cambiar contraseña</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowChangePassword(false)}
              ></button>
            </div>

            <form onSubmit={handleChangePasswordSubmit}>
              <div className="mb-3">
                <label className="form-label">Usuario</label>
                <input
                  type="text"
                  name="usuario"
                  className="form-control"
                  value={changePasswordForm.usuario}
                  onChange={handleChangePasswordFields}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Contraseña actual</label>
                <input
                  type="password"
                  name="actual"
                  className="form-control"
                  value={changePasswordForm.actual}
                  onChange={handleChangePasswordFields}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Nueva contraseña</label>
                <input
                  type="password"
                  name="nueva"
                  className="form-control"
                  value={changePasswordForm.nueva}
                  onChange={handleChangePasswordFields}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirmar nueva contraseña</label>
                <input
                  type="password"
                  name="confirmar"
                  className="form-control"
                  value={changePasswordForm.confirmar}
                  onChange={handleChangePasswordFields}
                />
              </div>

              <div className="d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowChangePassword(false)}
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Guardar cambio
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default LoginPage