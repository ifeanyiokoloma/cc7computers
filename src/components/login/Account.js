import React from "react";
import useAuth from "../../hooks/useAuth";
import LogOutBtn from "./LogOutBtn";

const Account = () => {
  const { user } = useAuth();
  return (
    <section className="d-flex justify-content-center flex-column align-items-center">
      <h1>My Account</h1>
      <p>{user.displayName}</p>
      <LogOutBtn />
    </section>
  );
};

export default Account;
