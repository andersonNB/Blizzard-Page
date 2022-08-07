import logoBliz from "../../assets/Blizzard.png";

const Navbar = () => {
	return (
		<>
			<header>
				<nav className="navbar-dark bg-dark text-white" style={{height: 57}}>
					<div className="container-fluid">
						<div className="row">
							<ul className="" style={{listStyle: "none"}}>
								<div className="col d-flex">
									<li className="p-1">
										<img
											src={logoBliz}
											alt="LogoBlizzard"
											width="80"
											height="46"
										/>
									</li>
									<li className="fs-5 p-3 dropdown">
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
													Overwatch
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													World of Warcraft
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Hearsthone
												</a>
											</li>
										</ul>
									</li>
									<li className="fs-5 p-3">TIENDA</li>
									<li className="fs-5 p-3">NOTICIAS</li>
									<li className="fs-5 me-auto p-3 dropdown">
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
													Overwatch League
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													World of Warcraft League
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Hearsthone League
												</a>
											</li>
										</ul>
									</li>
									<li className="fs-5 p-3">Asistencia</li>
									<li className="fs-5 p-3 dropdown">
										<a
											className="nav-link dropdown-toggle"
											href="#"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											Mi cuenta
										</a>
										<ul className="dropdown-menu p-2" style={{width: 300}}>
											<li>
												<button className="btn btn-primary w-100">
													Iniciar sesión
												</button>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Opciones de la cuenta
												</a>
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
			</header>

			{/* Sección de Pruebas */}
			{/* <p>Sección de pruebas</p>
			<div className="container mt-2" style={{backgroundColor: "#C1EFFF"}}>
				<div className="row" style={{backgroundColor: "#C3AAFF"}}>
					<div className="col bg-primary text-white">
						<nav className="navbar-dark bg-dark">
							<ul className="d-flex" style={{listStyle: "none"}}>
								<li className="p-2">Item 1</li>
								<li className="p-2">Item 2</li>
								<li className="me-auto p-2">Item 3</li>
								<li className="p-2">Item 4</li>
								<li className="p-2">Item 5</li>
							</ul>
						</nav>
					</div>
				</div>
			</div> */}
		</>
	);
};

export default Navbar;
