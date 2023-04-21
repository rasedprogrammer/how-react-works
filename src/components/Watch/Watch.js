import React, { useEffect, useState } from "react";
import Display from "../Display/Display";
import Tablet from "../Tablet/Tablet";

const Watch = () => {
	const [steps, setSteps] = useState(0);
	const increseStepsCount = () => {
		const newStepsCount = steps + 1;
		setSteps(newStepsCount);
	};
	useEffect(() => {
		console.log("Hello World");
		console.log(steps);
	}, [steps]);

	return (
		<div style={{ border: "1px solid black", margin: "20px" }}>
			<h2>This is smart Watch</h2>
			<h3>Your Steps: {steps}</h3>
			<button onClick={increseStepsCount}>Increse Step</button>
			<Display phone="Garmani" steps={steps}></Display>
			<Tablet></Tablet>
		</div>
	);
};

export default Watch;
