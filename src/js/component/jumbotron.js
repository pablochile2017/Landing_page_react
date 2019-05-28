import React from "react";
import "./jumbotron.css";

//create your first component
const Jumbotron = () => {
	return (
		<header className="jumbotron my-4">
			<h1 className="display-3"> A Warm Welcome </h1>
			<p className="lead">Lorem ipsum</p>
			<a href="#" className="btn btn-primary btn-lg">
				Call to action!
			</a>
		</header>
	);
};

export default Jumbotron;
