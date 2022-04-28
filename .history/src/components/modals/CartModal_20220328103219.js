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
    const unsub = onSnapshot(doc(db, "users", auth.currentUser.uid), (doc) => {
      const newData = doc.data();
      setCart((newItem) => (newItem = [newData]));
    });
    return () => unsub;
    // eslint-disable-next-line
  }, []);

  console.log(cart);

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
        {cart ? (
          cart.map((product) => {
            console.log(product);
          })
        ) : (
          <h3>Your Cart is Empty</h3>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;