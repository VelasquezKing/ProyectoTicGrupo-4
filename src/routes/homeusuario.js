import React from 'react'
import { NavLink,Link } from 'react-router-dom';

function homeusuario() {
    return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container d-flex justify-content-between align-items-center">

            <NavLink class="navbar-brand text-success logo h1 align-self-center" to="/">
                Inicio campeonato
            </NavLink>

            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>

    

            <div class="limiter">
		          <div class="container-login100">
			          <div class="wrap-login999">
              <div>
              <h2 className="display-5">USUARIO INTERNO</h2>

              <div class="container-login100-form-btn">
						<button  class="login980-form-btn">
						Crear campeonato
						</button>
					</div>

          <div class="container-login100-form-btn">
						<button  class="login980-form-btn">
						Modificar campeonato
						</button>
					</div>

          <div class="container-login100-form-btn">
						<button  class="login980-form-btn">
						Cancelar un campeonato
						</button>
					</div>

          <div class="container-login100-form-btn">
						<button  class="login980-form-btn">
						Aceptar/Aprobar registro 
						</button>
					</div>

          <div class="container-login100-form-btn">
						<button  class="login980-form-btn">
						Ingresar/actualizar el campeonato
						</button>
					</div>

          <div class="container-login100-form-btn">
						<button  class="login980-form-btn">
						Generar un reporte
						</button>
					</div>

          <div class="container-login100-form-btn">
						<button  class="login980-form-btn">
						Tabla de posiciones
						</button>
					</div>

          <div class="container-login100-form-btn">
						<button  class="login980-form-btn">
						Crear listado
						</button>
					</div>

          <div class="container-login100-form-btn">
						<button  class="login980-form-btn">
						Definir fechas
						</button>
					</div>

          <div class="container-login100-form-btn">
						<button  class="login980-form-btn">
						Definir resultados
						</button>
					</div>

        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default homeusuario
