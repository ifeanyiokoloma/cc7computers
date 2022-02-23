import { userNameForm } from "../data/form";
import Form from "./form/Form";

export const UserNameForm = ({ handleSubmit, handleChange, dialog, error }) => {
  return (
    <section>
      <Form
        formName="Enter Your Name"
        inputs={userNameForm}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        submit="Submit your name"
        dialog={dialog}
        error={error}
      />
    </section>
  );
};
