import { Outlet } from "react-router-dom";


const ProtectedRoute = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      <Outlet />
      // ...
    } else {
      // User is signed out
      <Login />
    }
  });
};

export default ProtectedRoute;
