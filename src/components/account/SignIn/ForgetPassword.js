import { Lock, Close } from "@mui/icons-material";
import {
  Alert,
  AlertTitle,
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Dialog,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

import React, { useContext, useState } from "react";
import { ModalContext } from "../../context/contexts";
import { Transition } from "../../Functions/Functions";
import { sendPasswordResetEmail } from "firebase/auth";
import { useSnackbar } from "notistack";
import { auth } from "../../../firebase/app";

const ForgetPassword = () => {
  const [error, setError] = useState("");
  const { forgetPwd, closeForgetPwd, setMessage, openResponse } = useContext(
    ModalContext
  );
  const { enqueueSnackbar } = useSnackbar();

  const handleClose = () => {
    window.location.reload();
    closeForgetPwd();
  };

  // handleSubmit Starts
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email");

    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        enqueueSnackbar("Password reset email sent!", { variant: "success" });
        setMessage("Password reset email sent!");
        closeForgetPwd();
        openResponse();
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/invalid-email":
            setError("Email address is not valid.");
            enqueueSnackbar("Email address is not valid.", {
              variant: "error",
            });
            break;
          case "auth/user-not-found":
            setError("There is no user corresponding to the given email.");
            enqueueSnackbar(
              "There is no user corresponding to the given email.",
              { variant: "error" }
            );
            break;

          default:
            setError("Error unknown");
            enqueueSnackbar("Error unknown", { variant: "error" });
            break;
        }
        // ..
      });
  };
  //handleSubmit Ends

  return (
    <Dialog
      fullScreen
      open={forgetPwd}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <IconButton
        sx={{ position: "absolute", top: 10, right: 10 }}
        aria-label="close"
        color="error"
        size="large"
        onClick={closeForgetPwd}
      >
        <Close fontSize="inherit" />
      </IconButton>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <Lock />
          </Avatar>
          <Typography component="h1" variant="h5">
            Find Your Account
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              variant="filled"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Search
            </Button>
            {error ? (
              <Grid item xs={12}>
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  {error}
                </Alert>
              </Grid>
            ) : null}
          </Box>
        </Box>
      </Container>
    </Dialog>
  );
};

export default ForgetPassword;
