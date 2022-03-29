import { collection, onSnapshot, query } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { auth, db } from "../../../firebase/app";
import { ShoppingCartContext } from "../../context/contexts";
import Header from "../../Header";
import SingleCartItem from "./SingleCartItem";
import styles from "./cart.module.css";
import Paper from "../../Paper";
import useAuth from "../../../hooks/useAuth";

const CartModal = () => {
  const [cart, setCart] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const { signIn, loading } = useAuth();

  useEffect(() => {
    let unSubcribe;
    console.log(signIn);

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
        <Header element="h2" title="Shopping Cart" className={styles.header} />
      </Modal.Header>
      <Modal.Body className={styles.container}>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Paper className={styles.productsBox}>
            {cart ? (
              cart.map((product) => <SingleCartItem product={product} />)
            ) : (
              <h3>Your Cart is Empty</h3>
            )}
          </Paper>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;
