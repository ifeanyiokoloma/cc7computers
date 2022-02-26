import { emailForm } from "../../data/form";
import Form from "./Form";

const EmailForm = ({ handleSubmit, handleChange, info, error }) => {
  return (
    <section>
      <Form
        formName="Enter Your Email"
        inputs={emailForm}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        submit="Submit Your Email"
        info={info}
        error={error}
      />
    </section>
  );
};

export default EmailForm;
