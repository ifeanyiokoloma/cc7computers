import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import EmailForm from "../form/EmailForm";
import { ModalContext } from "../context/contexts";
import Header from "../Header";

const EmailFormModal = () => {
  const { handleCloseEmailForm, showEmailForm } = useContext(ModalContext);
  return (
    <Modal
      scrollable={true}
      centered
      show={showEmailForm}
      onHide={handleCloseEmailForm}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <Header header="h1" title="Email Form" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EmailForm />
      </Modal.Body>
    </Modal>
  );
};

export default EmailFormModal;
