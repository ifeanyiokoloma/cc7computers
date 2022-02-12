import React from "react";
import useAuth from "../../hooks/useAuth";
import LogOutBtn from "../login/LogOutBtn";
import styles from "./account.module.css"


const Account = () => {
  const { user } = useAuth();
  return (
    <section className="d-flex justify-content-center flex-column align-items-center">
      <h1>My Account</h1>
      <img className={styles.dp} src="./images/dp/dp.jpg" alt="profile" />
      <p>{user.displayName}</p>
      <LogOutBtn />
    </section>
  );
};

export default Account;
