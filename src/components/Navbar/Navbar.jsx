import logoBliz from "../../assets/Blizzard.png";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img src={logoBliz} alt="LogoBlizzard" width="80" height="46" />
				</a>
				<div className="collapse navbar-collapse" id="navbarScroll">
					{/* style={{--bs-scroll-height: 100px}} */}
					<ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								JUEGOS
							</a>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="#">
										Action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Another action
									</a>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								TIENDA
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="#">
								NOTICIAS
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								ESPORTS
							</a>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="#">
										Action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Another action
									</a>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</li>
							</ul>
						</li>
						<div className="d-flex">
							<li className="nav-item">
								<a className="nav-link" href="#">
									Asistencia
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Mi Cuenta
								</a>
								<ul className="dropdown-menu">
									<li>
										<a className="dropdown-item" href="#">
											Iniciar Sesión
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Opciones de la cuenta
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Crear una cuenta gratuita
										</a>
									</li>
								</ul>
							</li>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
