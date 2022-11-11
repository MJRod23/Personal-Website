import React from "react";

const Jumbotron = (props) => {
	//here you have to return expected html using the properties being passed to the component
	return (
		<div className="jumbotron m-5">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<a className="btn btn-primary btn-lg" href="https://youtu.be/qztuEucrNBc" role="button">
				{props.buttonLabel}
			</a>
		</div>
	)};
    export default Jumbotron;