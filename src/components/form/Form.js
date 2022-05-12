import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import styles from "./form.module.css";
import React from "react";

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
  button,
  buttonFunc,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <AnimatePresence>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
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
          {button && (
            <Button
              variant="outline-primary"
              type="button"
              onClick={buttonFunc}
            >
              {button}
            </Button>
          )}
        </fieldset>
        {submit && (
          <div className={styles.btnContainer}>
            <button
              disabled={loading ? true : false}
              id="submit"
              className={styles.submit}
              type="submit"
            >
              {loading ? "Loading..." : submit}
            </button>
          </div>
        )}
      </motion.form>
    </AnimatePresence>
  );
};

export default Form;
