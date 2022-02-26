import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/app";

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [signIn, setSignIn] = useState(false);
  const [signOut, setSignOut] = useState(false);
  const [user, setUser] = useState({});

  onAuthStateChanged(
    auth,
    (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        setUser(user);
        setSignIn(true);
        setLoading(false);
      } else {
        // User is signed out
        setSignIn(false);
        setSignOut(true);
        setLoading(false);
      }
    },
    (error) => {
      console.log(error);
    },
    (response) => {
      console.log(response);
    }
  );

  return { loading, signIn, signOut, user };
};

export default useAuth;
