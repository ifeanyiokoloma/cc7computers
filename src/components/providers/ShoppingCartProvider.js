import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { ShoppingCartContext } from "../context/contexts";
import { onSnapshot, doc } from "firebase/firestore";
import { useEffect } from "react";
import { auth, db } from "../../firebase/app";
import useLocalStorage from "use-local-storage";

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState(false);
  const [userCart, setUserCart] = useState([]);
  const [userCartLength, setCartLength] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [browserCart] = useLocalStorage("cart", []);
  const { signIn, loading } = useAuth();

  const browserCartLength = browserCart.length;

  useEffect(() => {
    let unSubcribe;

    if (loading) {
      setLoading(true);
    }

    if (signIn) {
      setLoading(false);
      unSubcribe = onSnapshot(
        doc(db, "customers", auth.currentUser.uid),
        (doc) => {
          const docs = doc.data();
          const cartDocs = docs["cart"];
          if (cartDocs.length > 0) {
            setUserCart(cartDocs);
            setCartLength(cartDocs.length);
          }
        }
      );
      return () => {
        unSubcribe();
      };
    }
  }, [signIn]);

  // Show Modal Functions
  function openCart() {
    setCart(true);
  }

  // Close Modal Functions
  function closeCart() {
    setCart(false);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        userCart,
        cart,
        openCart,
        closeCart,
        isLoading,
        userCartLength,
        browserCart,
        browserCartLength,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
