import React from 'react'
import { NavLink,Link } from 'react-router-dom';
function homeexterno() {
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
              <h2 className="display-5">USUARIO EXTERNO</h2>

              <div class="container-login100-form-btn">
						<button  class="login980-form-btn">
						Inscribir un equipo a un campeonato.
						</button>
					</div>

          <div class="container-login100-form-btn">
						<button  class="login980-form-btn">
						Eliminar un equipo.
						</button>
					</div>

          <div class="container-login100-form-btn">
						<button  class="login980-form-btn">
						Crear y configurar el equipo
						</button>
					</div>

          <div class="container-login100-form-btn">
						<button  class="login980-form-btn">
						Retirar la inscripción de el equipo. 
						</button>
					</div>

          <div class="container-login100-form-btn">
						<button  class="login980-form-btn">
						Ver tabla de posiciones de un campeonato
						</button>
					</div>
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}

export default homeexterno
