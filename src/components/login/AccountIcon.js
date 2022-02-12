import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AccountIcon = ({ className }) => {
  const { signIn } = useAuth();

  const login = {
    boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.3)",
    borderRadius: "3px",
    border: "none",
    fontWeight: 600,
    backgroundColor: "var(--pri-color)",
  };

  if (signIn) {
    return (
      <Link to="/my-account">
        <MdAccountCircle cursor="pointer" size="2.5rem" />
      </Link>
    );
  }
  return (
    <button style={login} type="button" className={className}>
      <Link replace={true} style={{ color: "white" }} to="/login">
        Login
      </Link>
    </button>
  );
};

export default AccountIcon;
