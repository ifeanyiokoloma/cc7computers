import { StyledFirebaseAuth } from "react-firebaseui";
import { auth } from "../firebase/app";

const FirebaseUI = () => {
  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(auth());

  if (ui.isPendingRedirect()) {
    ui.start("#firebaseui-auth-container", {
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
      // Other config options...
    });
  }

  return (
    <>
      <h1>Welcome to My Awesome App</h1>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
      <StyledFirebaseAuth />
    </>
  );
};

export default FirebaseUI;