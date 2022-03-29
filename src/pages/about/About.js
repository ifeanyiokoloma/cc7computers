import Hero from "../../components/hero/Hero";
import styles from "./about.module.css";
// import Employees from "./Employees";
import { about } from "../../data/articles/articles";
import TypoBG from "../../components/TypoBG";
import Header from "../../components/Header";
import Article from "../../components/article/Article";
import { IoTelescopeOutline } from "react-icons/io5";
import { MdDirectionsCar } from "react-icons/md";

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
          >
            To become the model for global computer systems, support service
            provision, to ensure maximum productivity in the use of computer
            system, leading to an enhanced perfomance of individuals and
            organizations, as it relates to computing and business needs.
          </Article>

          <Article
            element="h2"
            title="Our Mission"
            icon={<MdDirectionsCar className={styles.icon} />}
          >
            Giving life and power to computing via heaven computing (Gen 1:26,
            John 14:2)
          </Article>

          <section className={styles.values}>
            <Header title="Our Values" element="h2" className={styles.header} />
            <ul>
              <li>Wisdom</li>
              <li>Integrity</li>
              <li>Clarity</li>
              <li>Accountability</li>
              <li>Networking</li>
            </ul>
          </section>
        </section>
      </TypoBG>
      {/* <Employees /> */}
    </>
  );
};

export default About;
