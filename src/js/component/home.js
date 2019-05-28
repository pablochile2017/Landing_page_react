import React from "react";

import { Navbar } from "./navbar";
import Jumbotron from "./jumbotron";
import { CardList } from "./CardList";
import { Footer } from "./footer";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<Navbar />

				<div className="container">
					<Jumbotron />
					<CardList />
				</div>

				<Footer />
			</div>
		);
	}
}
