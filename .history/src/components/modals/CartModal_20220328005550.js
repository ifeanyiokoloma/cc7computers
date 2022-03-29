import { useContext } from "react";
import { Modal } from "react-bootstrap";
import { ShoppingCartContext } from "../context/contexts";
import Header from "../Header";

const CartModal = () => {
  const { showCart, handleCloseCart, cart } = useContext(ShoppingCartContext);
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
          cart.map((product) => (
            <h6>
              {product.brand} {product.model}
            </h6>
          ))
        ) : (
          <h3>Your Cart is Empty</h3>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;
