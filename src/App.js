import logo from "./logo.svg";
import "./App.css";
import Device from "./components/Device/Device";
import Watch from "./components/Watch/Watch";

function App() {
	return (
		<div className="App" style={{ border: "1px solid orange", margin: "10px" }}>
			<Device name="iPhone" price="120000"></Device>
			<Watch></Watch>
		</div>
	);
}

export default App;
