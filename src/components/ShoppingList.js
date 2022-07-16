import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedItem, setSelectedItem] = useState("All");
  
  function handleChange(event) {
  
    setSelectedItem(event.target.value);
  }

    const itemsToShow = items.filter((item) => {
      if (selectedItem === "All") return true;
  
      return item.category === selectedItem;
    });

  
  return (
    <div className="ShoppingList">
      <div className="Filter">


        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToShow.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
