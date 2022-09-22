import { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import { ModalContext } from "../context/contexts";
import LogOutBtn from "./LogOutBtn";
import React from "react";
import { Button } from "@mui/material";

const LoginBtn = () => {
  const { signIn } = useAuth();

  const { openSignIn } = useContext(ModalContext);

  return (
    <>
      {signIn ? (
        <LogOutBtn />
      ) : (
        <Button variant="contained" onClick={() => openSignIn()}>
          Login
        </Button>
      )}
    </>
  );
};

export default LoginBtn;
