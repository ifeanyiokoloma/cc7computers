import styles from "./employee.module.css";
import React from "react";

const Employee = ({ employee }) => {
  return (
    <section className={styles.container}>
      <h1>{employee.names}</h1>
      <div className={styles.grid}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={employee.imgSrc} alt={employee.names} />
        </div>
        <div className={styles.text}>
          <p>
            <b>Name: </b>
            <span>{employee.names}</span>
          </p>
          <p>
            <b>Job: </b>
            <span>{employee.job}</span>
          </p>
          <p>
            <b>Skills: </b>
            <span>{employee.skills}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Employee;
