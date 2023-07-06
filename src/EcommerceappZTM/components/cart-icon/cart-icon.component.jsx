import "./cart-icon.styles.scss";
import shopping from "../../../assets/shopping.svg";
import { useContext, useState } from "react";
import { CartContext } from "../contextapi/cart.context";


const CartIcon = () => {
  const {isCartOpen , setIsCartOpen, cartCount} = useContext(CartContext)

 const toggleIsCartOpen = () => {
    return  setIsCartOpen(prev => !prev)
 }

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img src={shopping} className="shopping-icon" alt="img not" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};
export default CartIcon;
