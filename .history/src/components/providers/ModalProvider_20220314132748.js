import { useState } from "react";
import { ModalContext } from "../context/contexts";

const ModalProvider = ({ children }) => {
  const [showVerifyUser, setShowVerifyUser] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showNameForm, setShowNameForm] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Show Modal Functions
  function handleShowSearch() {
    setShowSearch(true);
  }
  function handleShowVerifyUser() {
    setShowVerifyUser(true);
  }
  function handleShowEmailForm() {
    setShowEmailForm(true);
  }
  function handleShowNameForm() {
    setShowNameForm(true);
  }

  // Close Modal Functions
  function handleCloseSearch() {
    setShowSearch(false);
  }
  function handleCloseVerifyUser() {
    setShowVerifyUser(false);
  }
  function handleCloseEmailForm() {
    setShowEmailForm(false);
  }
  function handleCloseNameForm() {
    setShowNameForm(false);
  }

  return (
    <ModalContext.Provider
      value={{
        showVerifyUser,
        showEmailForm,
        showNameForm,
        showSearch,
        handleShowSearch,
        handleShowVerifyUser,
        handleShowEmailForm,
        handleShowNameForm,
        handleCloseVerifyUser,
        handleCloseEmailForm,
        handleCloseNameForm,
        handleCloseSearch,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
