import { useContext } from "react";
import { Modal } from "react-bootstrap";
import { ShoppingCartContext } from "../../context/contexts";
import Header from "../../Header";
import SingleCartItem from "./SingleCartItem";
import styles from "./cart.module.css";
import Paper from "../../paper/Paper";
import { AiFillShopping } from "react-icons/ai";
import PaystackBtn from "../../payment/PaystackBtn";
import Price from "../../Price";
import useAuth from "../../../hooks/useAuth";
import SignInMessage from "../../SignInMessage";

const CartModal = () => {
  // const { loading, user, signIn, signOut } = useAuth();

  const { showCart, handleCloseCart, cart, isLoading } =
    useContext(ShoppingCartContext);
  const offlineCart = [];

  const Total = cart.reduce((acc, product) => {
    acc += Number(product.price);
    return acc;
  }, 0);

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
            // <h2>Loading...</h2>
            <SignInMessage />
          ) : (
            <>
              <div className={styles.products}>
                <Paper>
                  {cart.length > 0 ? (
                    cart.map((product) => <SingleCartItem product={product} />)
                  ) : (
                    <h2>Your Cart is Empty</h2>
                  )}
                </Paper>
              </div>
              <div className={styles.payment}>
                <Paper>
                  <p className={styles.total}>
                    Total:{" "}
                    <Price
                      txtColor="var(--red-color)"
                      size="3rem"
                      weight="bold"
                      align="center"
                      amount={Total}
                    />
                  </p>

                  <div className={styles.method}>
                    <div className={styles.paystackBox}>
                      <span>Pay with</span>{" "}
                      <PaystackBtn
                        productPrice={Total}
                        className={styles.paystack}
                      />
                    </div>
                    <p>Do A Bank Transfer</p>
                  </div>
                </Paper>
              </div>
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;
