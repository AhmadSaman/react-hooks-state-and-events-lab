import React, { useState } from "react";

function Item({ name, category }) {
	const [inCart, setInCart] = useState(false);
	function handleAdd() {
		setInCart((cartStatus) => !cartStatus);
	}
	return (
		<li className={inCart ? "in-cart" : ""}>
			<span>{name}</span>
			<span className="category">{category}</span>
			<button className="add" onClick={handleAdd}>
				Add to Cart
			</button>
		</li>
	);
}

export default Item;
