import React from "react";
import Navbar from "../components/navbar";
import { Card } from "../components/card";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className="container-fluid">
				<div>
					<Navbar />
				</div>
				<div>
					<Card />
				</div>
				<div>3rd</div>
			</div>
		);
	}
}
