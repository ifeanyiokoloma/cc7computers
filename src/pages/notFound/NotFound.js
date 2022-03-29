import React from "react";
import { Link } from "react-router-dom";
import styles from "./notFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404 Page not found</h1>
      <p>you went to a wrong page</p>
      <div className={styles.btns}>
        <Link to="/" className="btn btn-primary">
          Come Home
        </Link>
        <Link to="/shop" className="btn btn-outline">
          Get What You Want
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
