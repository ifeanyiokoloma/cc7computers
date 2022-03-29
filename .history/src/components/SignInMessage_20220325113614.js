import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import { auth } from "../firebase/app";
import { uiConfig } from "../firebase/config";
import LoginBtn from "./account/LoginBtn";

const SignInMessage = () => {
  return (
    <section className="centered">
      <h1>Please Login to access this page</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />
      {/* <LoginBtn size="lg" /> */}
    </section>
  );
};

export default SignInMessage;
