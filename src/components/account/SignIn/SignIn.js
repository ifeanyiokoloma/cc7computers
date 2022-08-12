import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Typography,
  Grid,
  Container,
  Dialog,
  IconButton,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Alert,
  AlertTitle,
  InputAdornment,
  FormControl,
  InputLabel,
  FilledInput,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { ModalContext } from "../../context/contexts";
import {
  GoogleAuthProvider,
  // FacebookAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../../../firebase/app";
import {
  // Facebook,
  Google,
  Close,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useSnackbar } from "notistack";
import { Transition } from "../../Functions/Functions";

const theme = createTheme();

export default function SignIn() {
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const { enqueueSnackbar } = useSnackbar("");
  const { signIn, closeSignIn, openSignUp, openForgetPwd } = useContext(
    ModalContext
  );

  const handleForgetPwd = () => {
    closeSignIn();
    openForgetPwd();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email");
    const password = data.get("password");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        closeSignIn();
        enqueueSnackbar(`You are signed in as ${user.displayName}`, {
          variant: "success",
        });
        // ...
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
          case "auth/user-disabled":
            setError(
              "User corresponding to the given email has been disabled."
            );
            enqueueSnackbar(
              "User corresponding to the given email has been disabled.",
              { variant: "error" }
            );
            break;
          case "auth/user-not-found":
            setError("There is no user corresponding to the given email.");
            enqueueSnackbar(
              "There is no user corresponding to the given email.",
              { variant: "error" }
            );
            break;
          case "auth/wrong-password":
            setError(
              "Password is invalid for the given email, or the account corresponding to the email does not have a password set."
            );
            enqueueSnackbar(
              "Password is invalid for the given email, or the account corresponding to the email does not have a password set.",
              { variant: "error" }
            );
            break;

          default:
            setError("Error unknown");
            enqueueSnackbar("Error unknown", { variant: "error" });
            break;
        }
      });
  };

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    await signInWithRedirect(auth, provider);
  };

  // const fbSignIn = async () => {
  //   const provider = new FacebookAuthProvider();

  //   await signInWithRedirect(auth, provider);
  // };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClose = () => {
    window.location.reload();
    closeSignIn();
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <ThemeProvider theme={theme}>
      <Dialog
        fullScreen
        open={signIn}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <IconButton
          sx={{ position: "absolute", top: 10, right: 10 }}
          aria-label="close"
          color="error"
          size="large"
          onClick={handleClose}
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
              Sign in
            </Typography>
            <Button
              style={{
                margin: "1rem .5rem auto",
                background: "#4285F4",
                color: "white",
              }}
              startIcon={<Google />}
              size="large"
              onClick={googleSignIn}
            >
              Sign in with Google
            </Button>
            {/* <Button
              style={{
                margin: ".5rem auto",
                background: "#3b5998",
                color: "white",
              }}
              startIcon={<Facebook />}
              size="large"
              onClick={fbSignIn}
            >
              Sign in with Facebook
            </Button> */}
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
              <FormControl fullWidth margin="normal" required variant="filled">
                <InputLabel htmlFor="password">Password</InputLabel>
                <FilledInput
                  name="password"
                  id="password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              {error ? (
                <Grid item xs={12}>
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {error}
                  </Alert>
                </Grid>
              ) : null}

              <Grid container>
                <Grid item xs>
                  <Button
                    sx={{ textTransform: "unset", textDecoration: "underline" }}
                    onClick={handleForgetPwd}
                  >
                    Forgot password?
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    sx={{ textTransform: "unset", textDecoration: "underline" }}
                    onClick={() => {
                      closeSignIn();
                      openSignUp();
                    }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Dialog>
    </ThemeProvider>
  );
}
