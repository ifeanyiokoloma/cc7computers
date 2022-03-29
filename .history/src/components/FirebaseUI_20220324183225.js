import { StyledFirebaseAuth } from "react-firebaseui";
import { auth } from "../firebase/app";

const FirebaseUI = () => {
  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(auth());

  var uiConfig = {
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

  if (ui.isPendingRedirect()) {
    ui.start("#firebaseui-auth-container", uiConfig);
  }

  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />
      </div>
    );
  }
  return (
    <div>
      <h1>My App</h1>
      <p>Welcome {auth().currentUser.displayName}! You are now signed-in!</p>
      <a onClick={() => auth().signOut()}>Sign-out</a>
    </div>
  );
};

export default FirebaseUI;
