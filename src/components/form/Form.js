import { useEffect, useRef } from "react";
import styles from "./form.module.css";

const Form = ({
  inputs,
  handleChange,
  handleSubmit,
  formName,
  submit,
  reset,
  error,
  dialog,
  loading,
}) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form
      styles={{ backgroundImage: `url("/images/loginbg.jpg")` }}
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>{formName}</legend>
        {inputs.map((input) => (
          <p key={input.id} className={styles.content}>
            <label className={styles.label}>Enter {input.placeholder}:</label>
            <input
              className={styles.input}
              ref={inputRef}
              id={input.name}
              name={input.name}
              placeholder={input.placeholder}
              type={input.type}
              onChange={handleChange}
            />
          </p>
        ))}
        {reset && (
          <div className="d-flex justify-content-center">
            <button className={styles.reset} type="reset">
              {reset}
            </button>
          </div>
        )}
        {dialog && <p className="text-primary">{dialog}</p>}
        {error && <p className="text-danger">{error}</p>}
      </fieldset>
      {submit && (
        <div className={styles.btnContainer}>
          <button className={styles.submit} type="submit">
            {loading ? "Loading..." : submit}
          </button>
        </div>
      )}

      <div id="recaptcha-container"></div>
    </form>
  );
};

export default Form;
