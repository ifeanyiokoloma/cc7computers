import { Modal } from "bootstrap";
import React from "react";
import Button from "../button/Button";
import { ModalContext } from "../context/contexts";

const InfoModal = () => {
  const { handleCloseInfo } = useContext(ModalContext);
  return (
    <Modal>
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
