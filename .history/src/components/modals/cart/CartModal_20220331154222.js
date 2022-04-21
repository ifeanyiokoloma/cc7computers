import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { ShoppingCartContext } from "../../context/contexts";
import Header from "../../Header";
import SingleCartItem from "./SingleCartItem";
import styles from "./cart.module.css";
import Paper from "../../paper/Paper";
import { AiFillShopping } from "react-icons/ai";
import PaystackBtn from "../../payment/PaystackBtn";
import Price from "../../Price";
// import useAuth from "../../../hooks/useAuth";
import SignInMessage from "../../SignInMessage";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/app";
import useAuth from "../../../hooks/useAuth";

const CartModal = () => {
  const [productID, setProductID] = useState("");
  const { user } = useAuth();

  const { showCart, handleCloseCart, cart, isLoading } =
    useContext(ShoppingCartContext);

  const Total = cart.reduce((acc, product) => {
    acc += Number(product.price);
    return acc;
  }, 0);

  async function handleProductSale(productID) {}

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
            <div className={styles.signIn}>
              <SignInMessage />
            </div>
          ) : (
            <>
              <div className={styles.products}>
                <Paper>
                  {cart.length > 0 ? (
                    cart.map((product) => {
                      setProductID(product.id);
                      return (
                        <SingleCartItem key={product.id} product={product} />
                      );
                    })
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
                        productID={productID}
                      />
                    </div>
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
