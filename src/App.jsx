import { useState } from "react";
import reactLogo from "./assets/images/react.svg";

import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./pages/Home";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<BrowserRouter>
				<Header></Header>
				<Routes>
					<Route path="/" element={<Home/>}></Route>
					<Route path="/about" element={<About/>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
