import React from "react";
import { Card } from "./Card";

const descriptions = [
	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
	"Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.",
	"Sapiente esse necessitatibus neque.",
	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
];

export const CardList = () => {
	let cardArray = descriptions.map((card, i) => {
		return <Card key={i.toString()} description={card} />;
	});
	return <div className="row text-center">{cardArray}</div>;
};
