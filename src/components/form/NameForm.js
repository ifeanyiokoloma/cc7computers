import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { nameForm } from "../../data/form";
import { auth } from "../../firebase/app";
import Form from "./Form";
import React from "react";

export const NameForm = () => {
  const [info, setInfo] = useState("");
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(auth.currentUser, {
      displayName: `${firstName} ${lastName}`,
    })
      .then(() => {
        // Profile updated!
        setInfo("Name updated!");
      })
      .catch((error) => {
        // An error occurred
        setError(error.code);
      });
  };

  function handleChange(e) {
    e.preventDefault();
    const input = e.target;
    if (input.name === "firstName") {
      const firstNameValue = input.value;
      setFirstName((newName) => {
        return (newName = firstNameValue);
      });
    }

    if (input.name === "lastName") {
      const lastNameValue = input.value;
      setLastName((newName) => {
        return (newName = lastNameValue);
      });
    }
  }

  return (
    <section>
      <Form
        formName="Enter Your Name"
        inputs={nameForm}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        submit="Submit your name"
        info={info}
        error={error}
      />
    </section>
  );
};
