import Hero from "../../components/hero/Hero";
import Skills from "../../components/skills/Skills";
import TypoBG from "../../components/TypoBG";
import { services } from "../../data/articles/articles";
import styles from "./services.module.css";
import { RiComputerLine } from "react-icons/ri";
import Article from "../../components/article/Article";

const Services = () => {
  return (
    <>
      <Hero page="services" imgName="office" pageData={services} />
      <TypoBG>
        <Article
          title="Computer General Services"
          element="h2"
          icon={<RiComputerLine className={styles.typoIcon} />}
        >
          Research has shown that 70% of system damage/malfunctions are as a
          result of non-professional handling of computers. Therefore,{" "}
          <em>CC7</em> upholds professionalism basically when it comes to
          Computer System Repair and Software Installation and Maintenance.
        </Article>
        <Skills />
      </TypoBG>
    </>
  );
};

export default Services;
