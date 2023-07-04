import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./Registration";
import State from "./State";
import Login from "./Login";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/state" element={<State />} />
				<Route path="/register" element={<Registration />} />
				<Route path="/" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
