import { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import Button from "../button/Button";
import { ModalContext } from "../context/contexts";
import LogOutBtn from "./LogOutBtn";

const LoginBtn = ({ className, size }) => {
  const { signIn } = useAuth();
  const login = {
    fontWeight: 600,
  };

  const { handleShowVerifyUser } = useContext(ModalContext);

  return (
    <div>
      {signIn && <LogOutBtn className={className} />}
      {!signIn && (
        <Button
          onClick={() => handleShowVerifyUser()}
          className={className}
          style={login}
          type="button"
          btnColor="var(--pri-color)"
          size={size}
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default LoginBtn;
