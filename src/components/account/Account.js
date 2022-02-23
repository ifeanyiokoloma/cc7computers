import { sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/app";
import useAuth from "../../hooks/useAuth";
import LogOutBtn from "../login/LogOutBtn";
import styles from "./account.module.css";
import Header from "../Header";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";

const Account = () => {
  const { user } = useAuth();
  const [dialog, setDialog] = useState("");

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
      setDialog("Email verification sent!");
    });
  };
  return (
    <section className={styles.container}>
      <Header
        title="Account Page"
        title2={`Welcome, ${user.displayName}`}
        header="h1"
        header2="h2"
        className="my-5"
      />
      <div className={styles.content}>
        <p>
          <b>Your Name: </b>
          <em>{user.displayName}</em>
        </p>
        <p>
          <b>Your Email:</b> <em>{user.email}</em>{" "}
          {user.emailVerified ? (
            <b className="text-success d-inline-flex align-items-center">
              Verified <GiCheckMark />
            </b>
          ) : (
            <motion.button
              onClick={verifyEmail}
              animate={{ scale: 1.2 }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="ms-3 btn btn-danger"
            >
              Not Verified
            </motion.button>
          )}
        </p>
        <p className="info">{dialog}</p>
        <div className="mt-5">
          <LogOutBtn />
        </div>
      </div>
    </section>
  );
};

export default Account;
