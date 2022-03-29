import { Modal } from "react-bootstrap";
import React, { useContext } from "react";
import Button from "../button/Button";
import { ModalContext } from "../context/contexts";

const InfoModal = () => {
  const { handleCloseInfo, showInfo } = useContext(ModalContext);
  return (
    <Modal show={showInfo} onHide={handleCloseInfo}>
      <Modal.Header>Shopping Cart</Modal.Header>
      <Modal.Body>
        <p>Product Added to Cart</p>
      </Modal.Body>
      <Modal.Footer>
        <Button btnColor="var(--red-color)" onClick={handleCloseInfo}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InfoModal;
