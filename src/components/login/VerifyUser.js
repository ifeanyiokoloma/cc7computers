import {
  RecaptchaVerifier,
  sendEmailVerification,
  signInWithPhoneNumber,
  updateEmail,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/app";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sendCode, verify } from "../../data/form";
import Form from "../form/Form";
import EmailForm from "../form/EmailForm";
import { UserNameForm } from "../form/UserNameForm";

const VerifyUser = () => {
  // Declared Variables starts here
  const [phoneNumber, setPhoneNumber] = useState("+234");
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isVerify, setIsVerify] = useState(false);
  const [isUpdateEmail, setIsUpdateEmail] = useState(false);
  const [isUpdateName, setIsUpdateName] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState(
    "You will receive an SMS message for verification"
  );
  const [error, setError] = useState("");

  // React-router Variables
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Declared variables ends here

  // Utility Functions
  // Reset
  function resetMsg() {
    setError("");
    setInfo("");
  }

  // Request for OTP
  const requestOTP = (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 11) {
      resetMsg();

      setIsLoading(true);

      generateRecaptcha();

      const appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message,
          setInfo("SMS sent, type the code sent to your phone");

          // then sign the user in with confirmationResult.confirm(code).

          setIsLoading(false);
          setIsLogin(false);
          setIsVerify(true);

          setInfo("Type the verification code you received by SMS");
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          // Error; SMS not sent
          setIsLoading(false);
          setError(`SMS not sent, ${error.message}, try again`);

          // reset the reCAPTCHA so the user can try again
          const grecaptcha = window.recaptchaVerifier;

          grecaptcha.render().then((widgetId) => {
            grecaptcha.reset(widgetId);
          });
        });
    } else {
      return setError("This might not be be a valid phone number");
    }
  };

  const generateRecaptcha = () => {
    auth.languageCode = "en";
    window.recaptchaVerifier = new RecaptchaVerifier(
      "submit",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };

  function verifyCode(e) {
    e.preventDefault();
    const confirmationResult = window.confirmationResult;
    if (code.length === 6) {
      confirmationResult
        .confirm(code)
        .then((result) => {
          // User signed in successfully.
          if (result.user.email === null) {
            setIsVerify(false);
            resetMsg();
            setIsUpdateEmail(true);
          } else if (result.user.displayName === null) {
            setIsVerify(false);
            resetMsg();
            setIsUpdateName(true);
          } else {
            navigate(from, { replace: true });
          }
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          setError(
            `User couldn't sign in (bad verification code?) ${error.message}`
          );
        });
    } else {
      return setError("This might not be be a valid code");
    }
  }

  const handleEmail = (e) => {
    e.preventDefault();
    resetMsg();
    updateEmail(auth.currentUser, email)
      .then(() => {
        // Email updated!
        setInfo("Email updated!");
        if (!auth.currentUser.displayName === "" && !auth.currentUser) {
          navigate(from, { replace: true });
        } else {
          sendEmailVerification(auth.currentUser).then(() => {
            setTimeout(() => {
              setInfo("Email verification sent!");
            }, 5000);
          });
          setIsUpdateEmail(false);
          setIsUpdateName(true);
        }
      })
      .catch((error) => {
        // An error occurred
        setError(error.message);
        // ...
      });
  };

  const handleUserName = (e) => {
    e.preventDefault();
    resetMsg();
    updateProfile(auth.currentUser, {
      displayName: `${firstName} ${lastName}`,
    })
      .then(() => {
        // Profile updated!
        setInfo("Name updated!");
        setInfo("");
        setError("");
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
        const fnameValue = input.value;
        setFirstName((newName) => {
          return (newName = fnameValue);
        });
        break;
      case "lastName":
        const lnameValue = input.value;
        setLastName((newName) => {
          return (newName = lnameValue);
        });
        break;
      case "email":
        const emailValue = input.value;
        setEmail((newEmail) => {
          return (newEmail = emailValue);
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
          info={info}
          error={error}
          loading={isLoading}
        />
      )}

      {isVerify && (
        <Form
          inputs={verify}
          handleChange={collectData}
          handleSubmit={verifyCode}
          submit="Verify Code"
          formName="Enter Verification Code Sent To Your Phone Number"
          info={info}
          error={error}
        />
      )}

      {isUpdateEmail && (
        <EmailForm
          handleSubmit={handleEmail}
          handleChange={collectData}
          info={info}
          error={error}
        />
      )}
      {isUpdateName && (
        <UserNameForm
          handleSubmit={handleUserName}
          handleChange={collectData}
          info={info}
          error={error}
        />
      )}
    </>
  );
};

export default VerifyUser;
