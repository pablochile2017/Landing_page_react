import React from "react";
import PropType from "prop-types";

export const Card = props => {
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<div className="card h-100">
				<img
					className="card-img-top"
					src="http://placehold.it/500x325"
					alt=""
				/>
				<div className="card-body">
					<h4 className="card-title">Card title</h4>
					<p className="card-text">{props.description}</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	description: PropType.string
};
