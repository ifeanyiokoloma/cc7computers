import styles from "./paper.module.css";
import React from "react";

const Paper = ({ children }) => {
  return <section className={styles.paper}>{children}</section>;
};

export default Paper;
