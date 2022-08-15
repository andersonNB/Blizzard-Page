import diabloCard from "../../assets/diablo-immortalCARD.jpg";
import d2Card from "../../assets/d2CARD.jpg";
import wowThrall from "../../assets/wowThrallCARD.jpg";
import wowClassicIllidan from "../../assets/wowClassicCARD.jpg";
import blizzardIcon from "../../assets/battle-net-brands.svg";
import appleIcon from "../../assets/apple-brands.svg";
import playStoreIcon from "../../assets/google-play-brands.svg";

const Cards = () => {
	return (
		<>
			<div className="row">
				<div className="col">
					<div
						className="card"
						style={{
							width: 250,
							height: 450,
							backgroundColor: "transparent",
							border: "none",
						}}
					>
						<img src={diabloCard} className="card-img-top" alt="game diablo" />
						<div className="card-body contenidoCards">
							<h5 className="card-title">Diablo immortal</h5>
							<p className="card-text">ROL Y ACCIÓN</p>
							<span>
								<img
									src={blizzardIcon}
									alt="IconBlizzard"
									style={{width: 20, height: 20}}
								/>
								<img
									src={appleIcon}
									alt="appleIcon"
									style={{width: 20, height: 20}}
								/>
								<img
									src={playStoreIcon}
									alt="appleIcon"
									style={{width: 20, height: 20}}
								/>
							</span>
						</div>
					</div>
				</div>
				<div className="col">
					<div
						className="card"
						style={{
							width: 250,
							height: 436,
							backgroundColor: "transparent",
							border: "none",
						}}
					>
						<img src={d2Card} className="card-img-top" alt="game diablo" />
						<div className="card-body contenidoCards">
							<h5 className="card-title">Diablo II: Resurrected</h5>
							<p className="card-text">ROL Y ACCIÓN</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div
						className="card"
						style={{
							width: 250,
							height: 436,
							backgroundColor: "transparent",
							border: "none",
						}}
					>
						<img src={wowThrall} className="card-img-top" alt="game diablo" />
						<div className="card-body contenidoCards">
							<h5 className="card-title">World of Warcraft</h5>
							<p className="card-text">MMORPG</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div
						className="card"
						style={{
							width: 250,
							height: 436,
							backgroundColor: "transparent",
							border: "none",
						}}
					>
						<img
							src={wowClassicIllidan}
							className="card-img-top"
							alt="game diablo"
						/>
						<div className="card-body contenidoCards">
							<h5 className="card-title">World of Warcraft Classic</h5>
							<p className="card-text">MMORPG</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col" style={{backgroundColor: "#00FFAB"}}>
					1
				</div>
				<div className="col" style={{backgroundColor: "#00FFAB"}}>
					2
				</div>
				<div className="col" style={{backgroundColor: "#14C38E"}}>
					3
				</div>
				<div className="col" style={{backgroundColor: "#B8F1B0"}}>
					4
				</div>
				<div className="col" style={{backgroundColor: "#E3FCBF"}}>
					5
				</div>
			</div>
		</>
	);
};

export default Cards;
