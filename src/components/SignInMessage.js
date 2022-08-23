import LoginBtn from "./account/LoginBtn";
import React from "react";
import { Stack, Typography } from "@mui/material";

const SignInMessage = () => {
  return (
    <Stack
      textAlign="center"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Typography component="b" variant="h4">
        Please log in to access this page
      </Typography>
      <LoginBtn size="lg" />
    </Stack>
  );
};

export default SignInMessage;
