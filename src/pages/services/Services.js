import Header from "../../components/Header";
import Hero from "../../components/hero/Hero";
import Skills from "../../components/skills/Skills";
import { services } from "../../data/articles/articles";
import styles from "./services.module.css";

const Services = () => {
  return (
    <>
      <Hero page="services" imgName="office" pageData={services} />
      <article className={styles.article}>
        <Header
          title="Computer Repairs and Software Installation and Maintenance"
          header="h2"
        />
        <p>
          Research has shown that 70% of system damage/malfunctions are as a
          result of non-professional handling of computers. Therefore, CC7
          upholds professionalism basically when it comes to Computer System
          Repair and Software Installation and Maintenance.
        </p>
      </article>
      <Skills />
    </>
  );
};

export default Services;
