import { StyledFirebaseAuth } from "react-firebaseui";
import { auth } from "../firebase/app";
import { uiConfig } from "../firebase/config";

const FirebaseUI = () => {
  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(auth());

  if (ui.isPendingRedirect()) {
    ui.start("#firebaseUI-container", uiConfig);
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
