import React from "react";
import "./categories.styles.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navigationbar from "./Navigationbar";
import Authentication from "../authentication/authentication.component";
import Shop from "../shop/shop.component";
import Checkout from "../checkout/checkout.component";

export default function Navbar() {
  return (
    <Routes>
      <Route path="/" element={<Navigationbar />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
