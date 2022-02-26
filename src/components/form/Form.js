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
  info,
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
              required={input.required}
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
        {info && <p className="text-primary">{info}</p>}
        {error && <p className="text-danger">{error}</p>}
      </fieldset>
      {submit && (
        <div className={styles.btnContainer}>
          <button id="submit" className={styles.submit} type="submit">
            {loading ? "Loading..." : submit}
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;
