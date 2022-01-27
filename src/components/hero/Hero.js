import React from "react";
import { Link } from "react-router-dom";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <picture>
        <source
          className={styles.img}
          media="(max-width: 500px)"
          srcset="./BGimages/computer-operator-mobile.jpg"
        />
        <source
          className={styles.img}
          media="(max-width: 800px)"
          srcset="./BGimages/computer-operator-tablet.jpg"
        />
        <source
          className={styles.img}
          media="(max-width: 1024px)"
          srcset="./BGimages/computer-operator-laptop.jpg"
        />
        <source
          className={styles.img}
          srcset="./BGimages/computer-operator-landscape.jpg"
        />
        <img
          className={styles.img}
          src="./BGimages/computer-operator-landscape.jpg"
          alt="Computer Operator"
        />
      </picture>
      <div className={styles.content}>
        <article className={styles.text}>
          <h1>Your Computer Support Center</h1>
          <p>
            CC7 Computers offers everything computer related: computer sales,
            repair, maintenance, training and website creation and development.
          </p>
          <div className={styles.buttons}>
            <button className={styles.shop}><Link to="/shop">shop</Link></button>
            <button className={styles.contact}><Link to="/contact">contact us</Link></button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
