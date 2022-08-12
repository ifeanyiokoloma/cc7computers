import { useState } from "react";
import { ModalContext } from "../context/contexts";
import React from "react";

const ModalProvider = ({ children }) => {
  const [showVerifyUser, setShowVerifyUser] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showNameForm, setShowNameForm] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [forgetPwd, setForgetPwd] = useState(false);
  const [response, setResponse] = useState(false);
  const [message, setMessage] = useState("");

  // Create Response close/open Function
  const openResponse = () => {
    setResponse(true);
  };

  const closeResponse = () => {
    setResponse(false);
  };

  // Create ForgetPwd close/open Function
  const openForgetPwd = () => {
    setForgetPwd(true);
  };

  const closeForgetPwd = () => {
    setForgetPwd(false);
  };

  // Create SignUp close/open Function
  const openSignUp = () => {
    setSignUp(true);
  };

  const closeSignUp = () => {
    setSignUp(false);
  };

  // Create SignIn close/open Function
  const openSignIn = () => {
    setSignIn(true);
  };

  const closeSignIn = () => {
    setSignIn(false);
  };

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
        openSignUp,
        openSignIn,
        closeSignUp,
        closeSignIn,
        signUp,
        signIn,
        forgetPwd,
        openForgetPwd,
        closeForgetPwd,
        message,
        setMessage,
        response,
        openResponse,
        closeResponse,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
