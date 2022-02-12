import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/app";

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [signIn, setSignIn] = useState(false);
  const [signOut, setSignOut] = useState(false);
  const [user, setUser] = useState({});

   useEffect(() => {
     let unSub;
     onAuthStateChanged(
       auth,
       (user) => {
         if (user) {
           // User is signed in, see docs for a list of available properties
           // https://firebase.google.com/docs/reference/js/firebase.User
           // const uid = user.uid;
           setUser(user)
           setSignIn(true);
           setLoading(false);
         } else {
           // User is signed out
           setSignOut(true);
           setLoading(false);
         }
       },
       (error) => {
         console.log(error);
       },
       (unSub = () => {
         console.log("unsubed");
       })
     );
     return () => {
       unSub();
     };
   }, [signIn, signOut]);

  return { loading, signIn, signOut, user };
};

export default useAuth;
