import styles from "./services.module.css";

const Services = () => {
  return (
    <main className={styles.main}>
      <h1>Our Services</h1>
      <section className={styles.section}>
        <div className={styles.imgContainer}>
          <picture>
            <source
              className={styles.img}
              media="(max-width: 500px)"
              srcSet="./writeDownMob.jpg"
            />
            <source
              className={styles.img}
              media="(max-width: 800px)"
              srcSet="./writeDownTab.jpg"
            />
            <source
              media="(max-width: 350px)"
              className={styles.img}
              srcSet="./writeDownSmall.jpg"
            />
            <source className={styles.img} srcSet="./writeDown.jpg" />
            <img className={styles.img} src="/writeDown.jpg" alt="" />
          </picture>
        </div>
        <div className={styles.articles}>
          <article className={styles.article}>
            <h2>Why Choose Us</h2>
            <p>
              Different local and online shops offer computer services. We don't
              just offer computer services, we offer them with a differences. We
              assembled a group of elite professonals who are experienced in
              computer operations and tasked with your satisfaction.
            </p>
          </article>
          <article className={styles.article}>
            <h2>Computer Repair and Software Installation and Maintenance</h2>
            <p>
              Research has shown that 70% of system damage/malfunctions are as a
              result of non-professional handling of computers. Therefore, CC7
              upholds professionalism basically when it comes to Computer System
              Repair and Software Installation and Maintenance.
            </p>
          </article>
          <article className={styles.article}>
            <h2>Computer Education</h2>
            <p>
              We also offer courses on Computer Engineering, Software
              Engineering and Website Development.
            </p>
            <p>
              On Website Development, we offer:
              <ul>
                <li>
                  <abbr title="HyperText Markup Language">HTML</abbr>
                </li>
                <li>
                  <abbr title="Cascading StyleSheet">CSS</abbr>
                </li>
                <li>JavaScript</li>
                <li>React JS</li>
              </ul>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Services;
