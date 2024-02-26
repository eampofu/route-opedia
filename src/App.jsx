import { useState } from "react";
import reactLogo from "./assets/images/react.svg";

import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./pages/Home";
import ProductDetails from "./Components/ProductDetails";
import ProductList from "./Components/ProductList";
import Product from "./Components/Product";
import CreateProduct from "./Components/CreateProduct";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<BrowserRouter>
				<Header></Header>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/product" element={<Product />}></Route>
					<Route path="/product/create" element={<CreateProduct />}></Route>
					<Route path="/product/details" element={<ProductDetails />}></Route>
					<Route path="/product/list" element={<ProductList />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
