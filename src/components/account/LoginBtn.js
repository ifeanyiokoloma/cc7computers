import { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import { ModalContext } from "../context/contexts";
import LogOutBtn from "./LogOutBtn";
import React from "react";
import { Button } from "@mui/material";

const LoginBtn = ({ margin, size }) => {
  const { signIn } = useAuth();
  // const login = {
  //   fontWeight: 600,
  // };

  const { openSignIn } = useContext(ModalContext);

  return (
    <>
      {signIn && <LogOutBtn />}
      {!signIn && (
        <Button
          variant="contained"
          onClick={() => openSignIn()}
          type="button"
          size={size}
        >
          Login
        </Button>
      )}
    </>
  );
};

export default LoginBtn;
