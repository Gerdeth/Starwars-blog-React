import React from "react";
import Navbar from "../components/navbar";
import { PlanetCard } from "../components/planetCard";
export class PlanetHome extends React.Component {
	constructor() {
		super();
		this.state = {
			plnt: []
		};
	}
	componentDidMount() {
		fetch("https://swapi.dev/api/planets/")
			.then(response => response.json())
			.then(hPlanet => {
				this.setState({ plnt: hPlanet.results });
			});
	}
	render() {
		var plntCards = null;
		if (this.state.plnt.length > 1) {
			plntCards = this.state.plnt.map((hPlanet, plntcardIndex) => {
				return (
					<div key={plntcardIndex}>
						<PlanetCard
							imageSrc={`https://loremflickr.com/200/200/starwars?random=${plntcardIndex +
								1}`}
							hPlanet={hPlanet}
						/>
					</div>
				);
			});
		} else {
			console.log("loading");
		}

		return <div className="planetdisplay">{plntCards}</div>;
	}
}
