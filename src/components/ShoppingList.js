import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
	const [selectedCategory, setSelectedCategory] = useState("All");

	function handleFilter(event) {
		setSelectedCategory(event.target.value);
	}

	const filteredArray = items.filter((el) => {
		if (selectedCategory === "All") {
			return el;
		} else {
			return el.category === selectedCategory;
		}
	});
	return (
		<div className="ShoppingList">
			<div className="Filter">
				<select onChange={handleFilter} name="filter">
					<option value="All">Filter by category</option>
					<option value="Produce">Produce</option>
					<option value="Dairy">Dairy</option>
					<option value="Dessert">Dessert</option>
				</select>
			</div>
			<ul className="Items">
				{filteredArray.map((item) => (
					<Item key={item.id} name={item.name} category={item.category} />
				))}
			</ul>
		</div>
	);
}

export default ShoppingList;
