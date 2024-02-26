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
import NotFound from "./Components/NotFound";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<BrowserRouter>
				<Header></Header>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
          {/* nesting routes for the product components */}
          <Route path="product">
					<Route path="" element={<Product />}></Route>
					<Route path="create" element={<CreateProduct />}></Route>
					<Route path="details" element={<ProductDetails />}></Route>
					<Route path="list" element={<ProductList />}></Route>
          </Route>
          {/* always put this in the global and not in nested */}
          <Route path="*" element={<NotFound/>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
