import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LogOutBtn from "./LogOutBtn";

const LoginBtn = ({ className }) => {
  const {isSignedIn} = useAuth();
  const login = {
    boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.3)",
    borderRadius: "3px",
    border: "none",
    fontWeight: 600,
    backgroundColor: "var(--pri-color)",
  };

  if (isSignedIn) {
    return <LogOutBtn className={className} />;
  }
  return (
    <button style={login} type="button" className={className}>
      <Link replace={true} style={{ color: "white" }} to="/login">
        Login
      </Link>
    </button>
  );
};

export default LoginBtn;
