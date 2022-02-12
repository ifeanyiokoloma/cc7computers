import { signOut } from "firebase/auth";
import { auth } from "../../firebase/app";
import { useNavigate } from "react-router-dom";

const LogOutBtn = ({className}) => {
  const navigate = useNavigate()
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const logout = {
    boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.3)",
    borderRadius: "3px",
    border: "none",
    fontWeight: 600,
    backgroundColor: "var(--sec-color)",
  };

  return (
    <button type="button" style={logout} className={className} onClick={logOut}>
      Logout
    </button>
  );
};

export default LogOutBtn;
