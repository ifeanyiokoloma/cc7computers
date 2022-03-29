import { StyledFirebaseAuth } from "react-firebaseui";
import { auth } from "../firebase/app";

const FirebaseUI = () => {
  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(auth());

  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function () {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById("loader").style.display = "none";
      },
    },
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
    // Terms of service url.
    // tosUrl: "<your-tos-url>",
    // Privacy policy url.
    // privacyPolicyUrl: "<your-privacy-policy-url>",
    // Other config options...
  };

  if (ui.isPendingRedirect()) {
    ui.start("#firebaseui-auth-container", uiConfig);
  }

  return (
    <>
      <h1>Welcome to My Awesome App</h1>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />
    </>
  );
};

export default FirebaseUI;
