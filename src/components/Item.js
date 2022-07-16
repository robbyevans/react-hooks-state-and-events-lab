import React,{useState} from "react";

function Item({ name, category }) {

  const[inCart, setInCart]=useState(false)

  function handleCart(){
    setInCart((inCart)=>!inCart);
  }
  const cartClass=inCart?"in-cart":"";
  const buttonClass=inCart?"Add to Cart":"Remove From Cart";
  const addClassName=inCart ? "remove" : "add";
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addClassName} onClick={handleCart} >{buttonClass}</button>
    </li>
  );
}

export default Item;
