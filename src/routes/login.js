import React from 'react'
import { NavLink,Link } from 'react-router-dom';

const login = () => {
  return (
    <div>
       <body>
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
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src="assets/img/img-01.png" alt="IMG"/>
				</div>

				<form class="login100-form validate-form">
					<span class="login100-form-title">
						INICIAR SESION
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" placeholder="Email"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" name="pass" placeholder="Contraseña"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login100-form-btn">
						<button  class="login100-form-btn">
						<NavLink to="/homeInterno"> Iniciar </NavLink>
						</button>
					</div>

					<div class="text-center p-t-12">
						<span class="txt1">
							Olvido
						</span>
						<NavLink class="txt2" to="/recuperar">
							Username / Contraseña?
						</NavLink>
					</div>

					<div class="text-center p-t-136">
						<NavLink class="txt2" to="/registro">
							Crear una cuenta
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</NavLink>
					</div>
				</form>
			</div>
		</div>
	</div>
	
	

		
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
	<script src="vendor/select2/select2.min.js"></script>
	<script src="vendor/tilt/tilt.jquery.min.js"></script>

	<script src="js/main.js"></script>
  </body>
      </div>
  );
}

export default login
