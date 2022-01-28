import { Link } from "react-router-dom";
import styles from "./hero.module.css";

const Hero = ({ page, imgName, pageData }) => {
  return (
    <section className={styles.container}>
      <picture>
        <source
          className={styles.img}
          media="(max-width: 320px)"
          srcset={`./images/heroes/${page}/${imgName}320.jpg`}
        />
        <source
          className={styles.img}
          media="(max-width: 375px)"
          srcset={`./images/heroes/${page}/${imgName}375.jpg`}
        />
        <source
          className={styles.img}
          media="(max-width: 425px)"
          srcset={`./images/heroes/${page}/${imgName}425.jpg`}
        />
        <source
          className={styles.img}
          media="(max-width: 768px)"
          srcset={`./images/heroes/${page}/${imgName}768.jpg`}
        />
        <source
          className={styles.img}
          media="(max-width: 1024px)"
          srcset={`./images/heroes/${page}/${imgName}1024.jpg`}
        />
        <source
          className={styles.img}
          media="(max-width: 1440px)"
          srcset={`./images/heroes/${page}/${imgName}1440.jpg`}
        />
        <source
          className={styles.img}
          media="(max-width: 2560px)"
          srcset={`./images/heroes/${page}/${imgName}2560.jpg`}
        />
        <img
          className={styles.img}
          srcset={`./images/heroes/${page}/${imgName}2560.jpg`}
          alt="Computer Operator"
        />
      </picture>
      <div className={styles.content}>
        <article className={styles.article}>
          <h1>{pageData.heading}</h1>
          <p>{pageData.paragraph}</p>
        </article>
        {pageData.btns &&
          pageData.btns.map((btn) => (
            <div className={styles.buttons}>
              <button className={styles.shop}>
                <Link to={btn}>{btn}</Link>
              </button>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Hero;
