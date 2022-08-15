import "./styles/MainContent.css";
import hearsthone from "../../assets/HS_24p0_Castle_Nathria_AvailableNow_BlizzardComDesktop.webp";
import diablo from "../../assets/Blizard.com_Banner-_1600x720-v4nologo.png";
import LK from "../../assets/WoW_WotLK_DateAnnounce_BlizzardCom_desktop_1600x720.png";
import wow from "../../assets/WoW_AltKeyArt_BlizzardBanner_desktop_1600x720_B01.jpg";
import HSNathria from "../../assets/HSNathria.png";
import LogoDiablo from "../../assets/DIABLO_Immortal_VectorLogo_White_FINAL.webp";
import WOWLK from "../../assets/WoW_C_WotLK_Logo_PF03c_Horzontal.webp";
import WOWDragonFligth from "../../assets/wow_dragonflight_golden_logo.png";
import Cards from "../Cards/Cards";

const MainContent = () => {
	return (
		<>
			<div
				id="carouselExampleCaptions"
				className="carousel slide"
				data-bs-ride="false"
			>
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="3"
						aria-label="Slide 4"
					></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={hearsthone} className="d-block w-100" alt="HearSthone" />
						<div className="carousel-caption d-none d-md-block">
							<img
								src={HSNathria}
								alt="Logo Castillo de Nathria"
								className="imgNathria"
							/>
							<div className="contenidoNathria">
								<h2>Nueva expansión de Hearthstone</h2>
								<div className="row justify-content-start">
									<div className="col-4">
										<button className="btn btn-primary">Compra Ahora</button>
									</div>
									<div className="col-6">
										<button className="btn infoBtn">Más información</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<img src={diablo} className="d-block w-100" alt="diablo" />
						<div className="carousel-caption d-none d-md-block">
							<img src={LogoDiablo} alt="Logo Diablo" className="imgDiablo" />
							<div className="contenidoDiablo">
								<h2>Temporada 3 ya disponible</h2>
								<div className="row justify-content-start">
									<div className="col-4">
										<button className="btn btn-primary">Más Información</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<img src={LK} className="d-block w-100" alt="Rey Lich" />
						<div className="carousel-caption d-none d-md-block">
							<img src={WOWLK} alt="Logo Lich King" className="imgLK" />
							<div className="contenidoLK">
								<h2>El Rey vuelve el 26 de septiembre</h2>
								<div className="row justify-content-start">
									<div className="col-4">
										<button className="btn btn-primary infoBtnLK">
											Más Información
										</button>
									</div>
									<div className="col-6">
										<button className="btn susBtnLK">Suscribirse</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<img src={wow} className="d-block w-100" alt="World Of Warcraft" />
						<div className="carousel-caption d-none d-md-block">
							<img
								src={WOWDragonFligth}
								alt="Logo Dragón FLigth"
								className="imgDragonFligth"
							/>
							<div className="contenidoDragonFligth">
								<h2>Domina el poder</h2>
								<div className="row justify-content-start">
									<div className="col-4">
										<button className="btn btn-primary infoBtnDragonFligth">
											Precomprar
										</button>
									</div>
									<div className="col-5">
										<button className="btn susBtnDragonFligth">
											Más Información
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<div className="contenidoCentral">
				<div className="container text-center">
					<div className="row containerP align-items-center">
						<div className="col">
							<h2>JUEGOS DESTACADOS</h2>
						</div>
						<div className="col btnGeneralInfos">
							<button className="btn">PC</button>
							<button className="btn">CONSOLA</button>
							<button className="btn">MÓVIL</button>
						</div>
					</div>
					<Cards />
				</div>
			</div>
		</>
	);
};

export default MainContent;
