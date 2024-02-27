import React from "react";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
	const navigate = useNavigate();
	return (
		<div>
			CreateProduct
			<button
				onClick={() => {
                    // This enables you to go back to the last page if you want to go back two pages use -2
					navigate(-1);
				}}
			>
				Go Back
			</button>
		</div>
	);
}

export default CreateProduct;
