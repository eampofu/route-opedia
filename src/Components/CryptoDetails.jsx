import React from "react";
import { useParams } from "react-router-dom";

function CryptoDetails() {
	const { cryptoSymbol, id } = useParams();
	return (
		<div>
			<h4>CryptoDetails</h4>
			<p>Symbol:{cryptoSymbol} </p>
			<p>Id:{id} </p>
		</div>
	);
}

export default CryptoDetails;
