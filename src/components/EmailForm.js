import { emailForm } from "../data/form";
import Form from "./form/Form";

const EmailForm = ({ handleSubmit, handleChange, dialog, error }) => {
  return (
    <section>
      <Form
        formName="Enter Your Email"
        inputs={emailForm}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        submit="Submit Your Email"
        dialog={dialog}
        error={error}
      />
    </section>
  );
};

export default EmailForm;
