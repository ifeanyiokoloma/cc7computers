import { Modal } from "react-bootstrap";
import { NameForm } from "../form/NameForm";
import { ModalContext } from "../context/contexts";
import Header from "../Header";
import React, { useContext } from "react";

const NameFormModal = () => {
  const { handleCloseNameForm, showNameForm } = useContext(ModalContext);
  return (
    <Modal centered show={showNameForm} onHide={handleCloseNameForm}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Header header="h1" title="UserName Form" />
        </Modal.Title>
      </Modal.Header>
      <NameForm />
    </Modal>
  );
};

export default NameFormModal;
