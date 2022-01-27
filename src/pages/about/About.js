import styles from "./about.module.css";
import Employees from "./Employees";

const About = () => {
  return (
    <>
      <section className={styles.container}>
        <article className="paper">
          <header>
            <h1>About</h1>
          </header>
          <p>
            CC7 Computers offers everything computer related: computer sales,
            repair, maintenance, training and website creation and development.
          </p>
          <p>
            CC7 Computers was founded by an experienced CompTIA professional who
            has a mandate in computer repairs/maintenance and powered by a team
            of fellow repairs/maintenance and fellow professonals.
          </p>
        </article>
        <article className="paper">
          <header>
            <h2>Our Vision</h2>
          </header>
          <p>
            To become the model for global computer systems, support service
            provision, to measure maximum productivity in the use of computer
            system, leading to an enhanced perfomance of individuals and
            organizations, as it relates to computing and business needs
          </p>
        </article>
        <article className="paper">
          <header>
            <h2>Our Mission</h2>
          </header>
          <p>
            Giving life and power to computing via heaven computing (Gen 1:26,
            John 14:2)
          </p>
        </article>
        <article className="paper">
          <header>
            <h2>Values</h2>
          </header>
          <p>
            Wisdom, Intergrity, Clarity, Accountability and Networking. (WICAN)
          </p>
        </article>
      </section>
      <Employees />
    </>
  );
};

export default About;
