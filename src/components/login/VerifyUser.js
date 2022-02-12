import { RecaptchaVerifier, signInWithPhoneNumber, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/app";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sendCode, userName, verify,  } from "../../data/form";
import Form from "../form/Form";
// import styles from "./login.module.css";

const VerifyUser = () => {
  const [phoneNumber, setPhoneNumber] = useState("+234");
  const [code, setCode] = useState("");
  const [isVerify, setIsVerify] = useState(false);
  const [isUpdateUser, setIsUpdateUser] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [dialog, setDialog] = useState("");
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

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
    if (phoneNumber.length >= 11) {
      setIsLoading(true);
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;

      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          setIsLoading(false);
          setIsLogin(false)
          setDialog("SMS sent, type the code sent to your phone");
          setIsVerify(true);
          window.confirmationResult = confirmationResult;
          // ...
        })
        .catch((error) => {
          // Error; SMS not sent
          setIsLoading(false);
          appVerifier.reset(window.recaptchaWidgetId);
          setError(error.message);
        });
    } else {
      return setError("This might not be be a valid phone number");
    }
  };

  if (code.length === 6) {
    const confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        // console.log(user);
        // console.log(user.displayName);
        if (user.displayName) {
          navigate(from, { replace: true });
        } else {
          setIsVerify(false)
          setIsUpdateUser(true);
        }
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        console.log("User couldn't sign in (bad verification code?)");
        // ...
      });
  }

  const setUserName = (e) => {
    e.preventDefault();
    updateProfile(auth.currentUser, {
      displayName: `${firstName} ${lastName}`,
    })
      .then(() => {
        // Profile updated!
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // An error occurred
        setError(error.message);
        // ...
      });
  };

  const collectData = (e) => {
    const input = e.target;
    switch (input.name) {
      case "firstName":
        const firstName = input.value;
      setFirstName((newName) => {
        return (newName = firstName);
      });
        break;
      case "lastName":
        const lastName = input.value;
        setLastName((newName) => {
          return (newName = lastName);
        });
        break;
      case "otp":
        const OTPValue = input.value;
      setCode((newCode) => {
        return (newCode = OTPValue);
      });
        break;
      case "phoneNumber":
        const phoneNumberValue = e.target.value;
        const phoneNumberTrimmed = phoneNumberValue.trim();
        setPhoneNumber((newNumber) => {
          if (
            phoneNumberTrimmed.startsWith(0) &&
            phoneNumberTrimmed.length > 10
          ) {
            const slicedNumber = phoneNumberTrimmed.slice(1, 11);
            const completeNumber = `+234${slicedNumber}`;
            return (newNumber = completeNumber);
          } else if (
            phoneNumberTrimmed.startsWith("+2340") &&
            phoneNumberTrimmed.length > 14
          ) {
            const completeNumber = phoneNumberTrimmed.replace("0", "");
            return (newNumber = completeNumber);
          } else {
            return (newNumber = phoneNumberTrimmed);
          }
        });
        break;
      
      default:
        break;
    }
  };

  return (
    <>
      {isLogin && (
        <Form
          inputs={sendCode}
          handleChange={collectData}
          handleSubmit={requestOTP}
          formName="Login With Your Phone Number"
          submit="Verify Your Phone Number"
          dialog={dialog}
          error={error}
          loading={isLoading}
        />
      )}

      {isVerify && (
        <Form
          inputs={verify}
          handleChange={collectData}
          formName="Enter Verification Code Sent To Your Phone Number"
          dialog={dialog}
          error={error}
        />
      )}

      {isUpdateUser && (
        <Form
          inputs={userName}
          formName="Update Your Data"
          handleChange={collectData}
          handleSubmit={setUserName}
          submit="Submit Your Name"
          error={error}
        />
      )}
    </>
  );
};

export default VerifyUser;
