// import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
// import { uiConfig } from "../firebase/config";
import { auth, app } from "../firebase/app";
// import LoginBtn from "./account/LoginBtn";
import { firebaseui } from "firebaseui";

const SignInMessage = () => {
  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(auth());

  if (ui.isPendingRedirect()) {
    ui.start("#firebaseUI-container", uiConfig);
  }

  const uiConfig = {
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: "popup",
    signInSuccessUrl: "/signedIn",
    signInOptions: [
      // List of OAuth providers supported.
      auth.GoogleAuthProvider.PROVIDER_ID,
      auth.FacebookAuthProvider.PROVIDER_ID,
      auth.TwitterAuthProvider.PROVIDER_ID,
      auth.GithubAuthProvider.PROVIDER_ID,
      {
        provider: auth.PhoneAuthProvider.PROVIDER_ID,
        defaultCountry: "NG",
        defaultNationalNumber: "+2349030658008",
      },
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
    // Terms of service url.
    // tosUrl: "<your-tos-url>",
    // Privacy policy url.
    // privacyPolicyUrl: "<your-privacy-policy-url>",
    // Other config options...
  };

  return (
    <section className="centered">
      <h1>Please Login to access this page</h1>
      <div id="firebaseUI-container"></div>
      <div id="loader">Loading...</div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />
      {/* <LoginBtn size="lg" /> */}
    </section>
  );
};

export default SignInMessage;
