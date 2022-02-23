import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./emailUs.module.css";

const EmailUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7orkh0p",
        "template_z1pr6br",
        form.current,
        "user_hfljyPGydUMWkOPDRToM2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className={styles.container} ref={form} onSubmit={sendEmail}>
      <fieldset>
        <legend>Email Us</legend>

        <p>
          <label>Name:</label>
          <input type="text" name="user_name" />
        </p>
        <p>
          <label>Email:</label>
          <input type="email" name="user_email" />
        </p>
        <p className="d-flex flex-column">
          <label>Message:</label>
          <textarea name="message" />
        </p>

        <button type="submit">Send</button>
      </fieldset>
    </form>
  );
};

export default EmailUs;
