import React, { useState } from "react";
import { ShoppingCartContext } from "../context/contexts";

const ShoppingCartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const cart = [];

  // Show Modal Functions
  function handleShowCart() {
    setShowCart(true);
  }

  // Close Modal Functions
  function handleCloseCart() {
    setShowCart(false);
  }

  return (
    <ShoppingCartContext.Provider
      value={{ cart, showCart, handleShowCart, handleCloseCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
