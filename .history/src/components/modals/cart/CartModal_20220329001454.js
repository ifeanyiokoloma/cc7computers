// import { collection, onSnapshot, query } from "firebase/firestore";
import {
  useContext,
  // useEffect,
  // useState,
} from "react";
import { Modal } from "react-bootstrap";
// import { auth, db } from "../../../firebase/app";
import { ShoppingCartContext } from "../../context/contexts";
import Header from "../../Header";
import SingleCartItem from "./SingleCartItem";
import styles from "./cart.module.css";
import Paper from "../../Paper";
// import useAuth from "../../../hooks/useAuth";
import { AiFillShopping } from "react-icons/ai";
import PaystackBtn from "../../payment/PaystackBtn";
import Price from "../../Price";

const CartModal = () => {
  // const [cart, setCart] = useState([]);
  // const [isLoading, setLoading] = useState(false);

  // const { signIn, loading } = useAuth();
  const { showCart, handleCloseCart, cart, isLoading } =
    useContext(ShoppingCartContext);

  const Total = cart.reduce((acc, product) => {
    acc += Number(product.price);
    return acc;
  }, 0);

  // useEffect(() => {
  //   let unSubcribe;
  //   console.log(signIn);

  //   if (loading) {
  //     setLoading(true);
  //   }

  //   if (signIn) {
  //     setLoading(false);
  //     const q = query(collection(db, auth.currentUser.uid));
  //     unSubcribe = onSnapshot(q, (querySnapshot) => {
  //       const newData = querySnapshot.docs.map((doc) => {
  //         return { ...doc.data() };
  //       });
  //       setCart((item) => (item = [...newData]));
  //     });
  //     return () => {
  //       unSubcribe();
  //     };
  //   }
  // }, [signIn, loading]);
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
        <AiFillShopping size="2rem" />{" "}
        <Header element="h2" title="Shopping Cart" />
      </Modal.Header>
      <Modal.Body>
        <div className={styles.container}>
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            <>
              <Paper className={styles.productsBox}>
                {cart ? (
                  cart.map((product) => <SingleCartItem product={product} />)
                ) : (
                  <h2>Your Cart is Empty</h2>
                )}
              </Paper>
              <Paper className={styles.payment}>
                <p className="mb-5">
                  Total:{" "}
                  <Price
                    txtColor="var(--red-color)"
                    size="3rem"
                    weight="bold"
                    align="center"
                    amount={Total}
                  />
                </p>

                <p className={styles.method}>
                  <span>Pay with</span>{" "}
                  <PaystackBtn
                    productPrice={Total}
                    className={styles.paystack}
                  />
                </p>
                <p className={styles.method}>Do A Bank Transfer</p>
              </Paper>
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;
