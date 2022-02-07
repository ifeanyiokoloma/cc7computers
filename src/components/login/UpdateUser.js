import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userName } from "../../data/form";
import { auth } from "../../firebase/app";
import Form from "../form/Form";

const UpdateUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate

  const collectUserName = (e) => {
    const input = e.target;
    if (input.name === "firstName") {
      const firstName = input.value;
      setFirstName((newName) => {
        return (newName = firstName);
      });
    }
    if (input.name === "lastName") {
      const lastName = input.value;
      setLastName((newName) => {
        return (newName = lastName);
      });
    }
  };

  const setUserName = (e) => {
      e.preventDefault()
    updateProfile(auth.currentUser, {
      displayName: `${firstName} ${lastName}`,
    })
      .then(() => {
        // Profile updated!
        console.log("successfully recorded name");
        navigate("/")
      })
      .catch((error) => {
        // An error occurred
        console.log(error);
        // ...
      });
  };

  return (
    <>
      <Form
        inputs={userName}
        formName="Update Your Data"
        handleChange={collectUserName}
        handleSubmit={setUserName}
        submit="Submit Your Name"
      />
    </>
  );
};

export default UpdateUser;
