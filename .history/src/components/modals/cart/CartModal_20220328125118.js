import { collection, onSnapshot, query } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { auth, db } from "../../../firebase/app";
import { ShoppingCartContext } from "../../context/contexts";
import Header from "../../Header";
import SingleCartItem from "./SingleCartItem";
import styles from "./cart.module.css";
import Paper from "../../Paper";

const CartModal = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let unSubcribe;
    if (auth.currentUser.uid !== null) {
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
    } else {
      setLoading(true);
    }
  }, []);

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
      <Modal.Body className={styles.container}>
        {!loading ? (
          <Paper className={styles.productsBox}>
            {cart ? (
              cart.map((product) => <SingleCartItem product={product} />)
            ) : (
              <h3>Your Cart is Empty</h3>
            )}
          </Paper>
        ) : (
          <h1>Loading</h1>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;
