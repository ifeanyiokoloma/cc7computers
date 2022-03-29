import React from "react";
import LoginBtn from "./account/LoginBtn";

const SignInMessage = () => {
  return (
    <section className="centered">
      <h1>Please Login to access this page</h1>
      <LoginBtn size="lg" />
    </section>
  );
};

export default SignInMessage;
