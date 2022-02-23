import Hero from "../../components/hero/Hero";
import styles from "./about.module.css";
import Employees from "./Employees";
import { about } from "../../data/articles/articles";

const About = () => {
  return (
    <>
      <Hero page="about" imgName="keyboard" pageData={about} />
      <section className={styles.container}>
        <article className={styles.vision}>
          <header>
            <h2>Our Vision</h2>
          </header>
          <p>
            To become the model for global computer systems, support service
            provision, to ensure maximum productivity in the use of computer
            system, leading to an enhanced perfomance of individuals and
            organizations, as it relates to computing and business needs
          </p>
        </article>

        <article className={styles.mission}>
          <header>
            <h2>Our Mission</h2>
          </header>
          <p>
            Giving life and power to computing via heaven computing (Gen 1:26,
            John 14:2)
          </p>
        </article>
        <section className={styles.values}>
          <header>
            <h2>Our Values</h2>
          </header>
          <ul>
            <li>Wisdom</li>
            <li>Integrity</li>
            <li>Clarity</li>
            <li>Accountability</li>
            <li>Networking</li>
          </ul>
        </section>
      </section>
      <Employees />
    </>
  );
};

export default About;
