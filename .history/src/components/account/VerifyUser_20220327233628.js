import {
  RecaptchaVerifier,
  sendEmailVerification,
  signInWithPhoneNumber,
  updateEmail,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/app";
import { useContext, useState } from "react";
import { emailForm, nameForm, sendCode, verify } from "../../data/form";
import Form from "../form/Form";
import { ModalContext } from "../context/contexts";
import Header from "../Header";
import { Modal } from "react-bootstrap";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/app";

const VerifyUser = () => {
  // Declared Variables starts here
  const { showVerifyUser, handleCloseVerifyUser } = useContext(ModalContext);
  const [phoneNumber, setPhoneNumber] = useState("+234");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [code, setCode] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isVerify, setIsVerify] = useState(false);
  const [isUpdateEmail, setIsUpdateEmail] = useState(false);
  const [isUpdateName, setIsUpdateName] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState(
    "You will receive an SMS message for verification"
  );
  const [error, setError] = useState("");

  // Declared variables ends here

  // Utility Functions
  // Reset
  function resetMsg() {
    setError("");
    setInfo("");
  }

  auth.languageCode = "en";
  function generateRecaptcha() {
    return (window.recaptchaVerifier = new RecaptchaVerifier(
      "submit",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    ));
  }

  // Request for OTP
  const requestOTP = (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 11) {
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
          resetMsg();
          setIsVerify(true);

          setInfo("Type the verification code you received by SMS");
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          // Error; SMS not sent
          setIsLoading(false);
          setError(`SMS not sent, ${error.code}, try again`);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
          // reset the reCAPTCHA so the user can try again
        });
    } else {
      return setError("This might not be be a valid phone number");
    }
  };

  function verifyCode(e) {
    e.preventDefault();
    setIsLoading(true);
    const confirmationResult = window.confirmationResult;
    if (code.length === 6) {
      confirmationResult
        .confirm(code)
        .then((result) => {
          // User signed in successfully.
          const shoppingCart = [];
          const userIdRef = doc(db, "users", result.user.uid);
          const userIdSnapshot = getDoc(userIdRef);
          if (!userIdSnapshot.exists()) {
            setDoc(userIdRef, shoppingCart)
              .then(() => console.log("cart created"))
              .catch((err) => console.log(err));
          }
          setIsLoading(false);
          if (!result.user.email) {
            setIsVerify(false);
            resetMsg();
            setInfo(
              "Email Verification Link will be sent to the Email provided, Please verify"
            );
            setIsUpdateEmail(true);
            resetMsg();
          } else if (!result.user.displayName) {
            setIsVerify(false);
            resetMsg();
            setInfo(
              "Email Verification Link will be sent to the Email provided, Please verify"
            );
            setIsUpdateName(true);
          } else {
            handleCloseVerifyUser(false);
          }
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          setError(`User couldn't sign in (bad verification code?)`);
          setIsLoading(false);
          // window.location.reload();
        });
    } else {
      setIsLoading(false);
      return setError("This might not be be a valid code");
    }
  }

  function handleEmailSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    updateEmail(auth.currentUser, email)
      .then(() => {
        // Email updated!
        sendEmailVerification(auth.currentUser).then(() => {
          setInfo("Email submitted and Email verification sent.");
          setTimeout(() => {
            if (!auth.currentUser.displayName) {
              setIsLoading(false);
              setIsUpdateEmail(false);
              resetMsg();
              setIsUpdateName(true);
            }
          }, 3000);
        });
      })
      .catch((error) => {
        // An error occurred
        setError(error.code);
      });
  }

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    updateProfile(auth.currentUser, {
      displayName: `${firstName} ${lastName}`,
    })
      .then(() => {
        // Profile updated!
        setInfo("Name updated!");
        setTimeout(() => {
          setIsLoading(false);
          handleCloseVerifyUser(false);
        }, 3000);
      })
      .catch((error) => {
        // An error occurred
        setError(error.code);
      });
  };

  const collectData = (e) => {
    const input = e.target;
    switch (input.name) {
      case "firstName":
        const firstNameValue = input.value;
        setFirstName((newName) => {
          return (newName = firstNameValue);
        });
        break;
      case "lastName":
        const lastNameValue = input.value;
        setLastName((newName) => {
          return (newName = lastNameValue);
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
    <Modal
      scrollable={true}
      centered
      show={showVerifyUser}
      onHide={() => handleCloseVerifyUser()}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <Header header="h1" title="Login" />
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
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
            formName="Verification Code"
            info={info}
            error={error}
            loading={isLoading}
          />
        )}

        {isUpdateEmail && (
          <Form
            inputs={emailForm}
            handleChange={collectData}
            handleSubmit={handleEmailSubmit}
            submit="Submit Email"
            info={info}
            error={error}
            formName="Enter Your Email"
            loading={isLoading}
          />
        )}

        {isUpdateName && (
          <Form
            inputs={nameForm}
            handleChange={collectData}
            handleSubmit={handleNameSubmit}
            submit="Submit Name"
            info={info}
            error={error}
            formName="Enter Your Name"
            loading={isLoading}
          />
        )}
      </Modal.Body>
    </Modal>
  );
};

export default VerifyUser;
