import { useContext } from "react";
import { CartContext } from "../contextapi/cart.context";
import { useNavigate } from "react-router";
import Button from "../button/button.component";
import "./cart-dropdown.style.scss";
import CartItem from "../cart-item/cart.-item.component";


const CartDropdown = () => {
  const {cartItems, setIsCartOpen} = useContext(CartContext)
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }
  return (
    <div className="cart-dropdown-container">
      <span className="closeCart" onClick={closeCart}>&#10005;</span>
      <div className="cart-items">
  {cartItems.length ? (
    cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
  ) : (
    <span className="empty-message">YOUR CART IS EMPTY</span>
  )}
</div>
      <Button onClick={goToCheckoutHandler}>CHECKOUTS</Button>
    </div>
  );
};
export default CartDropdown;
