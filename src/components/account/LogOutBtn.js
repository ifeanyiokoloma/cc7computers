import { signOut } from "firebase/auth";
import { auth } from "../../firebase/app";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import React from "react";
import { useSnackbar } from "notistack";

const LogOutBtn = ({ className }) => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        enqueueSnackbar("Sign-out successful.", { variant: "success" });
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <Button btnColor="var(--red-color)" onClick={logOut}>
      Logout
    </Button>
  );
};

export default LogOutBtn;
