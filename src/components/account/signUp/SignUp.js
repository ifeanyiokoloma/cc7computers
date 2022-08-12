import React, { useContext, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  CssBaseline,
  Button,
  Avatar,
  Alert,
  AlertTitle,
  Dialog,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Close, Lock } from "@mui/icons-material";
import { ModalContext } from "../../context/contexts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../../firebase/app";
import { doc, setDoc } from "firebase/firestore";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSnackbar } from "notistack";
import { Transition } from "../../Functions/Functions";

const theme = createTheme();

export default function SignUp() {
  const [startDate, setStartDate] = useState(new Date());
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);

    const tel = data.get("tel");
    const email = data.get("email");
    const fName = data.get("fName");
    const lName = data.get("lName");
    const password = data.get("password");
    const dob = data.get("dob");
    const gender = data.get("gender");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const userID = user.uid;

        setDoc(doc(db, "customers", userID), {
          userID: userID,
          tel: tel,
          dob: dob,
          gender: gender,
          email: email,
          name: { first: fName, last: lName },
          cart: [],
        })
          .then(() => {
            updateProfile(auth.currentUser, {
              displayName: `${fName} ${lName}`,
            });
          })
          .then(() => {
            enqueueSnackbar(`Signed in as ${user.displayName}`, {
              variant: "success",
            });
            closeSignUp();
          });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        setLoading(false);
        switch (errorCode) {
          case "auth/email-already-in-use":
            setError("Already exists an account with the given email address");
            enqueueSnackbar(
              "Already exists an account with the given email address",
              { variant: "error" }
            );
            break;
          case "auth/invalid-email":
            setError("Email address is not valid");
            enqueueSnackbar("Email address is not valid", { variant: "error" });
            break;
          case "auth/weak-password":
            setError("Password is not strong enough");
            enqueueSnackbar("Password is not strong enough", {
              variant: "error",
            });
            break;

          default:
            setError("Error Unknown");
            enqueueSnackbar("Error Unknown", { variant: "error" });
            break;
        }
        // ..
      });
  };

  const handleClose = () => {
    setError("");
    window.location.reload();
    closeSignUp();
  };

  const { signUp, closeSignUp, openSignIn } = useContext(ModalContext);

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        fullScreen
        open={signUp}
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
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="fName"
                    required
                    fullWidth
                    id="fName"
                    label="First Name"
                    autoFocus
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lName"
                    label="Last Name"
                    name="lName"
                    autoComplete="family-name"
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="tel"
                    label="Mobile Number"
                    name="tel"
                    autoComplete="tel"
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12}>
                  <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-wb57ya-MuiFormControl-root-MuiTextField-root">
                    <label
                      className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-filled MuiFormLabel-root MuiFormLabel-colorPrimary MuiFormLabel-filled Mui-required css-o943dk-MuiFormLabel-root-MuiInputLabel-root"
                      data-shrink="true"
                      htmlFor="dob"
                      id="dob-label"
                    >
                      Date Of Birth
                      <span
                        aria-hidden="true"
                        className="MuiInputLabel-asterisk MuiFormLabel-asterisk css-wgai2y-MuiFormLabel-asterisk"
                      >
                         *
                      </span>
                    </label>
                    <div className="MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-gjbq6i-MuiInputBase-root-MuiFilledInput-root">
                      <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="MuiFilledInput-input MuiInputBase-input css-10botns-MuiInputBase-input-MuiFilledInput-input"
                        id="dob"
                        name="dob"
                        onFocus={(e) => {
                          e.currentTarget.parentElement.parentElement.parentElement.classList.add(
                            "Mui-focused"
                          );
                        }}
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <FormControl variant="filled" sx={{ width: "100%" }}>
                    <InputLabel id="gender">Gender</InputLabel>
                    <Select
                      labelId="gender"
                      id="gender"
                      name="gender"
                      value={gender}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <LoadingButton
                loading={loading}
                variant="contained"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
                type="submit"
              >
                Submit
              </LoadingButton>

              {error ? (
                <Grid item xs={12}>
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {error}
                  </Alert>
                </Grid>
              ) : null}
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Button
                    sx={{ textTransform: "unset", textDecoration: "underline" }}
                    onClick={() => {
                      closeSignUp();
                      openSignIn();
                    }}
                  >
                    Already have an account? Sign in
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
