import { useState } from "react";
import { ModalContext } from "../context/contexts";
import React from "react";

const ModalProvider = ({ children }) => {
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [forgetPwd, setForgetPwd] = useState(false);
  const [response, setResponse] = useState(false);
  const [search, setSearch] = useState(false);
  const [message, setMessage] = useState("");
  const [sidebar, setSidebar] = useState(false);

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

  // Create Search close/open Function
  const openSearch = () => {
    setSearch(true);
  };

  const closeSearch = () => {
    setSearch(false);
  };

  // Create Search close/open Function
  const openSidebar = () => {
    setSidebar(true);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <ModalContext.Provider
      value={{
        search,
        openSearch,
        closeSearch,
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
        sidebar,
        setSidebar,
        openSidebar,
        closeSidebar,
        toggleSidebar,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
