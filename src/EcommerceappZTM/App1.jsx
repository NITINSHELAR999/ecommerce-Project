import React from "react";
import Navbar from "./components/directory/Navbar";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/contextapi/user.context";
import { CategoriesProvider } from "./components/contextapi/categories.context";
import { CartProvider } from "./components/contextapi/cart.context";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe/stripe.utils";



export default function App1() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <CategoriesProvider>
            <CartProvider>
              <Elements stripe={stripePromise}>
                <Navbar />
              </Elements>
            </CartProvider>
          </CategoriesProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}
