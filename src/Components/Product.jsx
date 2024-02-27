import React, { useState } from "react";
import { Link, useNavigate,Navigate  } from "react-router-dom";

export default function Product() {
	const navigate = useNavigate();
	const [gotoProduct, setGotToProduct] = useState(() => {
		return false;
	});
	return (
		<div>
			Product
			<button
				className="btn btn-primary"
				onClick={() => {
					navigate("/product/create");
				}}
			>
				Add Product{" "}
			</button>
			<Link to={"/product/details/5"}>
				{" "}
				<button>Navigate to product Detail -5</button>
			</Link>
            {/* using the Navigate component instead of the useNavigate Hook */}
			{gotoProduct && <Navigate to="/product/details/3" />}
			<button
				onClick={() => {
					setGotToProduct({ gotoProduct: true });
				}}
			>
				Navigate to product-3(UseState)
			</button>
		</div>
	);
}
