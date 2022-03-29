import LoginBtn from "./account/LoginBtn";
import * as firebaseui from "firebaseui";

const SignInMessage = () => {
  return (
    <section className="centered">
      <h1>Please Login to access this page</h1>
      <LoginBtn size="lg" />
    </section>
  );
};

export default SignInMessage;
