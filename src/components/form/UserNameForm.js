import { userNameForm } from "../../data/form";
import Form from "./Form";

export const UserNameForm = ({ handleSubmit, handleChange, info, error }) => {
  return (
    <section>
      <Form
        formName="Enter Your Name"
        inputs={userNameForm}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        submit="Submit your name"
        info={info}
        error={error}
      />
    </section>
  );
};
