import React from "react";
import Dial from "../Dial/Dial";

const Display = (props) => {
	return (
		<div style={{ border: "1px solid purple", margin: "10px" }}>
			<h2>Phone Display: {props.phone}</h2>
			<p>So far steps: {props.steps}</p>
			<Dial steps={props.steps}></Dial>
		</div>
	);
};

export default Display;
