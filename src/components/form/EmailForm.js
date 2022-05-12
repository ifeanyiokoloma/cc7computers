import { sendEmailVerification, updateEmail } from "firebase/auth";
import React, { useContext, useState } from "react";
import { emailForm } from "../../data/form";
import { auth } from "../../firebase/app";
import { ModalContext } from "../context/contexts";
import Form from "./Form";

const EmailForm = () => {
  const [info, setInfo] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const { handleCloseEmailForm } = useContext(ModalContext);

  function handleSubmit(e) {
    e.preventDefault();
    updateEmail(auth.currentUser, email)
      .then(() => {
        // Email updated!
        sendEmailVerification(auth.currentUser).then(() => {
          setInfo(
            "Email updated and Email verification sent. Please check your inbox and verify as soon as possible"
          ).then(() => {
            setTimeout(() => {
              handleCloseEmailForm();
            }, 3000);
          });
        });
      })
      .catch((error) => {
        // An error occurred
        setError(error.code);
      });
  }

  function handleChange(e) {
    const input = e.target;
    const emailValue = input.value;
    setEmail((newEmail) => {
      return (newEmail = emailValue);
    });
  }

  return (
    <Form
      formName="Enter Your Email"
      inputs={emailForm}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      submit="Set Your Email"
      info={info}
      error={error}
    />
  );
};

export default EmailForm;
