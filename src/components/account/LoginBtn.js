import { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import Button from "../button/Button";
import { ModalContext } from "../context/contexts";
import LogOutBtn from "./LogOutBtn";
import React from "react";

const LoginBtn = ({ margin, size }) => {
  const { signIn } = useAuth();
  const login = {
    fontWeight: 600,
  };

  const { openSignIn } = useContext(ModalContext);

  return (
    <div>
      {signIn && <LogOutBtn />}
      {!signIn && (
        <Button
          onClick={() => openSignIn()}
          style={login}
          type="button"
          btnColor="var(--pri-color)"
          size={size}
          margin={margin}
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default LoginBtn;
