import { sendEmailVerification } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/app";
import useAuth from "../../hooks/useAuth";
import LogOutBtn from "../../components/account/LogOutBtn";
import styles from "./account.module.css";
import Header from "../../components/Header";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import { Button } from "react-bootstrap";
import { ModalContext } from "../../components/context/contexts";

const Account = () => {
  const { user } = useAuth();
  const [dialog, setDialog] = useState("");
  const [verified, setVerified] = useState(user.emailVerified);
  const { handleShowEmailForm, handleShowNameForm } = useContext(ModalContext);

  function verifyEmail() {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
      setDialog("Email verification sent!");
    });
  }

  useEffect(() => {
    setVerified(user.emailVerified);
  }, [user.emailVerified]);

  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = match[1] ? "+1 " : "";
      return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
    }
    return null;
  }

  console.log(user.phoneNumber);

  return (
    <section className="centered">
      <Header
        title="Account Page"
        title2={`Welcome, ${user.displayName ? user.displayName : "Customer"}!`}
        header="h1"
        header2="h2"
        className="my-5"
      />
      <div className={styles.content}>
        <div className={styles.phoneNumber}>
          <b>Your PhoneNumber</b>
          <em>{formatPhoneNumber(user.phoneNumber)}</em>
        </div>

        <div className={styles.name}>
          <b>Your Name: </b>
          <em>
            {user.displayName ? user.displayName : "Please set your name"}
          </em>
          <Button onClick={handleShowNameForm}>
            {user.displayName ? "Change Your Name" : "Set Your Name"}
          </Button>
        </div>
        <div className={styles.email}>
          <b>Your Email:</b> <em>{user.email}</em>{" "}
          {verified ? (
            <b className="text-success d-inline-flex align-items-center">
              Verified <GiCheckMark />
            </b>
          ) : (
            <motion.button
              onClick={verifyEmail}
              animate={{ scale: 1.2 }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="btn btn-danger"
            >
              Not Verified
            </motion.button>
          )}
          <Button onClick={handleShowEmailForm}>Change Your Email</Button>
        </div>

        <div className="info">{dialog}</div>
        <div className={styles.logOutBtn}>
          <LogOutBtn />
        </div>
      </div>
    </section>
  );
};

export default Account;
