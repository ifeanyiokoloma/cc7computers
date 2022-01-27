import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section className={styles.container}>
        <header className="paper">
          <h1>Contact</h1>
        </header>

      <address className={styles.address}>
          <section className="paper">
            <header><h5>Telephone</h5></header>
              <a href="tel:+2349057609004">+234 905 760 9004</a>
              <a href="tel:+2348109039265">+234 810 903 9265</a>
          </section>
          <section className="paper">
            <header><h5>Head Office</h5></header>
            <p>
              142 Zik's Avenue,
              <br />
              Opposite Market 3,
              <br />
              Eke Awka,
              <br />
              Awka, Anambra State
            </p>
          </section>
      </address>
    </section>
  );
};

export default Contact;
