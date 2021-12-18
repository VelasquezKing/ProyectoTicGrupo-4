import React from 'react'
import {NavLink} from "react-router-dom";

function recuperar() {
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

	<div class="limiterr">
		<div class="container-login200">
			<div class="wrap-login1200">
				<div class="login100-pic js-tilt" data-tilt>
				</div>

				<form class="login100-form validate-form">
					<span class="login100-form-title">
						RECUPERAR CUENTA
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" placeholder="Email"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" name="pass" placeholder="Nueva contraseña"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login100-form-btn">
						 <button class="login200-form-btn">
						 <NavLink to="/login">Recuperar</NavLink>
						</button>

					

					
					</div>
				</form>
			</div>
		</div>
	</div>
					

</body>
        </div>
    )
}

export default recuperar
