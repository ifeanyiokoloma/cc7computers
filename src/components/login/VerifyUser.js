import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase/app";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendCode, verify } from "../../data/form";
import Form from "../form/Form";
// import styles from "./login.module.css";

const VerifyUser = () => {
  // const location = useLocation();
  const [phoneNumber, setPhoneNumber] = useState("+234");
  const [code, setCode] = useState("");
  const [isVerify, setIsVerify] = useState(false);
  // const [dialog, setDialog] = useState("");
  const navigate = useNavigate();

  const collectPhoneNumber = (e) => {
    const phoneNumberValue = e.target.value;
    setPhoneNumber((newNumber) => {
      return (newNumber = phoneNumberValue);
    });
  };

  const generateRecaptcha = () => {
    auth.languageCode = "en";
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // onSignInSubmit();
            console.log(response);
          },
        },
        auth
      );
    } catch (error) {
      console.log(error);
    }
  };

  const requestOTP = (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 12) {
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;

      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          console.log("SMS sent, type the code sent to your phone as message");
          setIsVerify(true);
          window.confirmationResult = confirmationResult;
          // ...
        })
        .catch((error) => {
          // Error; SMS not sent
          appVerifier.reset(window.recaptchaWidgetId);
          console.log(error);
        });
    }
  };

  const verifyOTP = (e) => {
    const OTPValue = e.target.value;
    setCode((newCode) => {
      return (newCode = OTPValue);
    });
  };

  if (code.length === 6) {
    const confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user);
        console.log(user.displayName);
        if (user.displayName) {
          navigate("/");
        } else {
          navigate("/update-user", { replace: true });
        }
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        console.log("User couldn't sign in (bad verification code?)");
        // ...
      });
  }

  return (
    <>
      {!isVerify ? (
        <Form
          inputs={sendCode}
          handleChange={collectPhoneNumber}
          handleSubmit={requestOTP}
          formName="Verify Phone Number"
          submit="Verify Your Phone Number"
        />
      ) : (
        <Form
          inputs={verify}
          handleChange={verifyOTP}
          formName="Enter Verification Code Sent To Your Phone Number"
        />
      )}
    </>
  );
};

export default VerifyUser;
