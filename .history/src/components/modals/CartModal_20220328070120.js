import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { auth, db } from "../../firebase/app";
import useFetchLive from "../../hooks/useFetchLive";
import { ShoppingCartContext } from "../context/contexts";
import Header from "../Header";

const CartModal = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let unSubcribe;
    const userRef = doc(db, "user", "qObpS64HRUYCmC4U9LTFIaP1mmo1");
    unSubcribe = onSnapshot(userRef, (doc) => {
      // const newData = docs.map((doc) => {
      //   return { ...doc.data() };
      // });
      // setCart(doc);
      console.log(doc.id);
    });

    return () => {
      unSubcribe();
    };
    // eslint-disable-next-line
  }, []);

  // console.log(cart);

  const { showCart, handleCloseCart } = useContext(ShoppingCartContext);

  return (
    <Modal
      fullscreen={
        true | "sm-down" | "md-down" | "lg-down" | "xl-down" | "xxl-down"
      }
      scrollable={true}
      show={showCart}
      onHide={handleCloseCart}
    >
      <Modal.Header closeButton>
        <Header element="h2" title="Shopping Cart" />
      </Modal.Header>
      <Modal.Body>
        {/* {cart ? (
          cart.map((product) => (
            <h6>
              {product.brand} {product.model}
            </h6>
          ))
        ) : (
          <h3>Your Cart is Empty</h3>
        )} */}
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;
