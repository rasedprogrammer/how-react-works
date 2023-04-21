import React from "react";

const Dial = (props) => {
	return (
		<div style={{ border: "1px solid blue", margin: "15px" }}>
			<h2>This Dial Component</h2>
			<p>Steps Count: {props.steps}</p>
		</div>
	);
};

export default Dial;
