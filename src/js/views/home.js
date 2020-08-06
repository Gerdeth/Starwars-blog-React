import React from "react";
import Navbar from "../components/navbar";
import { Card } from "../components/card";
import { PlanetHome } from "./planetHome";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			char: []
		};
	}
	componentDidMount() {
		fetch("https://swapi.dev/api/people/")
			.then(response => response.json())
			.then(characters => {
				this.setState({ char: characters.results });
			});
	}
	render() {
		var charCards = null;
		if (this.state.char.length > 1) {
			charCards = this.state.char.map((character, cardIndex) => {
				return (
					<div key={cardIndex}>
						<Card
							imageSrc={`https://loremflickr.com/200/200/starwars?random=${cardIndex +
								1}`}
							character={character}
						/>
					</div>
				);
			});
		} else {
			console.log("loading");
		}

		return (
			<div className="container-fluid">
				<Navbar />

				<div className="cardsdisplay">{charCards}</div>
				<hr />
				<PlanetHome />
			</div>
		);
	}
}
