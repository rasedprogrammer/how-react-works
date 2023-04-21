import React from "react";
import DeviceDetails from "../DeviceDetails/DeviceDetails";

const Device = (props) => {
	// Props Only Read Only Value Provide
	return (
		<div>
			<h1>I Have: {props.name}</h1>
			<DeviceDetails price={props.price}></DeviceDetails>
		</div>
	);
};

export default Device;
