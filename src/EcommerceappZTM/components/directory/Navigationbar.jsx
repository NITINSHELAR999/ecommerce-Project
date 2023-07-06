import React, { useContext, useState } from "react";
import "./Navigationbar.scss";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import crown from "../../../assets/crown.svg";
import { UserContext } from "../contextapi/user.context";
import { CartContext } from "../contextapi/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

export default function Navigationbar() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <div>
          <Link className="logo-container" to="/">
            <img className="img" src={crown} alt="img not found" />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
}
