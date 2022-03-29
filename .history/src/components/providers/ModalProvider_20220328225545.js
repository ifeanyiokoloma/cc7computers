import { useState } from "react";
import { ModalContext } from "../context/contexts";

const ModalProvider = ({ children }) => {
  const [showVerifyUser, setShowVerifyUser] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showNameForm, setShowNameForm] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

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
  function handleShowInfo() {
    setShowInfo(true);
    console.log("Clicked");
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
  function handleCloseInfo() {
    setShowInfo(false);
  }

  return (
    <ModalContext.Provider
      value={{
        showVerifyUser,
        showEmailForm,
        showNameForm,
        showSearch,
        showInfo,
        handleShowSearch,
        handleShowVerifyUser,
        handleShowEmailForm,
        handleShowNameForm,
        handleShowInfo,
        handleCloseVerifyUser,
        handleCloseEmailForm,
        handleCloseNameForm,
        handleCloseSearch,
        handleCloseInfo,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
