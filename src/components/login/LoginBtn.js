import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/app";
import useAuth from "../../hooks/useAuth";

const LoginBtn = ({className}) => {
  const [isSignedIn] = useAuth();

  const login = {
    boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.3)",
    borderRadius: "3px",
    border: "none",
    fontWeight: 600,
    backgroundColor: "var(--pri-color)",
  };

  const logout = {
    boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.3)",
    borderRadius: "3px",
    border: "none",
    fontWeight: 600,
    backgroundColor: "var(--sec-color)",
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  if (isSignedIn) {
    return (
      <button
        type="button"
        style={logout}
        className={className}
        onClick={logOut}
      >
        Logout
      </button>
    );
  }
  return (
    <button style={login} type="button" className={className}>
      <Link replace={true} style={{color: "white"}} to="/login">Login</Link>
    </button>
  );
};

export default LoginBtn;
