// import React from "react";
import { StyledFirebaseAuth, FirebaseAuth } from "react-firebaseui";
// import { uiConfig } from "../firebase/config";
import { auth } from "../firebase/app";
// import LoginBtn from "./account/LoginBtn";
import firebaseui from "firebase";

const SignInMessage = () => {
  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(auth());

  if (ui.isPendingRedirect()) {
    ui.start("#firebaseUI-container", uiConfig);
  }

  // const google_id ="395637042685-qsa7gc5lrhliiisku4vlq5e8bj1ggo3c.apps.googleusercontent.com";

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
