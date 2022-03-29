import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import { auth } from "../firebase/app";
import { uiConfig } from "../firebase/config";
import LoginBtn from "./account/LoginBtn";

const SignInMessage = () => {
  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(auth());

  if (ui.isPendingRedirect()) {
    ui.start("#firebaseUI-container", uiConfig);
  }

  return (
    <section className="centered">
      <h1>Please Login to access this page</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />
      {/* <LoginBtn size="lg" /> */}
    </section>
  );
};

export default SignInMessage;
