import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/app";

const useAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // const uid = user.uid;
      console.log(user);
      setIsSignedIn(true);
      setUser(user)
      // ...
    } else {
      // User is signed out
      setIsSignedIn(false);
    }
  });

  return {isSignedIn, user}
};

export default useAuth;
