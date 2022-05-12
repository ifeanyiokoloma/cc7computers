import Hero from "../../components/hero/Hero";
import styles from "./about.module.css";
// import Employees from "./Employees";
import { about } from "../../data/articles/articles";
import TypoBG from "../../components/TypoBG";
import Article from "../../components/article/Article";
import { IoTelescopeOutline } from "react-icons/io5";
import { MdDirectionsCar } from "react-icons/md";
import React from "react";

const About = () => {
  return (
    <>
      <Hero page="about" imgName="keyboard" pageData={about} />
      <TypoBG>
        <section className={styles.container}>
          <Article
            title="Our Vision"
            element="h2"
            icon={<IoTelescopeOutline className={styles.icon} />}
            textClass={styles.header}
          >
            <ul className={styles.visionList}>
              <li>
                To become the model for global computer systems support service
                provision,
              </li>
              <li>
                To ensure maximum productivity in the use of computer system,
                leading to an enhanced perfomance of individuals and
                organizations, as it relates to computing and business needs.
              </li>
            </ul>
            <br />
          </Article>

          <Article
            element="h2"
            title="Our Mission"
            icon={<MdDirectionsCar className={styles.icon} />}
            textClass={styles.header}
          >
            <p className={styles.mission}>
              Giving life and power to computing <br /> via heaven computing{" "}
              <br />
              (Gen 1:26, John 14:2)
            </p>
          </Article>

          <Article element="h2" title="Our Values" textClass={styles.header}>
            <ul>
              <li>Wisdom</li>
              <li>Integrity</li>
              <li>Clarity</li>
              <li>Accountability</li>
              <li>Networking</li>
            </ul>
          </Article>
        </section>
      </TypoBG>
      {/* <Employees /> */}
    </>
  );
};

export default About;
