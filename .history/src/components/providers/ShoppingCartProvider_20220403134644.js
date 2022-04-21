import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { ShoppingCartContext } from "../context/contexts";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect } from "react";
import { auth, db } from "../../firebase/app";

const ShoppingCartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const { signIn, loading } = useAuth();

  useEffect(() => {
    let unSubcribe;

    if (loading) {
      setLoading(true);
    }

    if (signIn) {
      setLoading(false);
      const q = query(collection(db, auth.currentUser.uid));
      unSubcribe = onSnapshot(q, (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => {
          return { ...doc.data() };
        });
        setCart((item) => (item = [...newData]));
      });
      return () => {
        unSubcribe();
      };
    }
  }, [signIn, loading]);

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
      value={{ cart, showCart, handleShowCart, handleCloseCart, isLoading }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
