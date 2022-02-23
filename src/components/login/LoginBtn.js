import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LogOutBtn from "./LogOutBtn";

const LoginBtn = ({ className }) => {
  const { signIn } = useAuth();
  const login = {
    boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.3)",
    borderRadius: "3px",
    border: "none",
    fontWeight: 600,
    backgroundColor: "var(--pri-color)",
  };

  return (
    <div>
      {signIn && <LogOutBtn className={className} />}
      {!signIn && (
        <button style={login} type="button" className={className}>
          <Link replace={true} style={{ color: "white" }} to="/login">
            Login
          </Link>
        </button>
      )}
    </div>
  );
};

export default LoginBtn;
