import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LoginBtn from "./LoginBtn";

const AccountIcon = () => {
  const { signIn } = useAuth();

  return (
    <>
      {signIn && (
        <Link to="/my-account">
          <MdAccountCircle cursor="pointer" size="2.5rem" />
        </Link>
      )}

      {!signIn && <LoginBtn />}
    </>
  );
};

export default AccountIcon;
