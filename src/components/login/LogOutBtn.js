import { signOut } from "firebase/auth";
import { auth } from "../../firebase/app";
import { useNavigate } from "react-router-dom";

const LogOutBtn = ({ className }) => {
  const navigate = useNavigate();
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <button type="button" className="btn btn-danger" onClick={logOut}>
      Logout
    </button>
  );
};

export default LogOutBtn;
