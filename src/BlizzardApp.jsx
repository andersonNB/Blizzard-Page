import {Navbar, MainContent} from "./components";

function BlizzardApp() {
	return (
		<div className="App">
			<Navbar />
			<MainContent />
			<footer style={{backgroundColor: "salmon"}}>footer</footer>
		</div>
	);
}

export default BlizzardApp;
