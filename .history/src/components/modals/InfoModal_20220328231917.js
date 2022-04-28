import { Modal } from "react-bootstrap";
import React, { useContext } from "react";
import Button from "../button/Button";
import { ModalContext } from "../context/contexts";
import Header from "../Header";
import { AiFillShopping } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";

const InfoModal = () => {
  const { handleCloseInfo, showInfo } = useContext(ModalContext);
  return (
    <Modal show={showInfo} onHide={handleCloseInfo}>
      <Modal.Header>
        <Header txtColor="gray" title="Shopping Cart" element="h5" />
        <AiFillShopping color="var(--pri-color)" size="2rem" />
      </Modal.Header>
      <Modal.Body>
        <p style={{ fontSize: "1rem" }}>
          Product Added to Cart <GiCheckMark color="var(--green-color)" />
        </p>
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