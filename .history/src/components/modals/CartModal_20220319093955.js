import { useContext } from "react";
import { Modal } from "react-bootstrap";
import { ShoppingCartContext } from "../context/contexts";
import Header from "../Header";

const CartModal = () => {
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
      <Modal.Body>CartModal</Modal.Body>
    </Modal>
  );
};

export default CartModal;
