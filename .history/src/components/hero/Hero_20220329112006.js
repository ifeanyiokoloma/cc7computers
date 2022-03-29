import { Link } from "react-router-dom";
import styles from "./hero.module.css";
import { useInView } from "react-intersection-observer";
import Header from "../Header";

const Hero = ({ page, imgName, pageData, btn }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section
      ref={ref}
      style={{ opacity: inView ? 1 : 0, transition: "1s ease-in-out" }}
      className={styles.container}
    >
      <picture>
        <source
          className={styles.img}
          media="(max-width: 320px)"
          srcSet={`./images/heroes/${page}/${imgName}320.jpg`}
        />
        <source
          className={styles.img}
          media="(max-width: 375px)"
          srcSet={`./images/heroes/${page}/${imgName}375.jpg`}
        />
        <source
          className={styles.img}
          media="(max-width: 425px)"
          srcSet={`./images/heroes/${page}/${imgName}425.jpg`}
        />
        <source
          className={styles.img}
          media="(max-width: 768px)"
          srcSet={`./images/heroes/${page}/${imgName}768.jpg`}
        />
        <source
          className={styles.img}
          media="(max-width: 1024px)"
          srcSet={`./images/heroes/${page}/${imgName}1024.jpg`}
        />
        <source
          className={styles.img}
          media="(max-width: 1440px)"
          srcSet={`./images/heroes/${page}/${imgName}1440.jpg`}
        />
        <source
          className={styles.img}
          media="(max-width: 2560px)"
          srcSet={`./images/heroes/${page}/${imgName}2560.jpg`}
        />
        <img
          className={styles.img}
          srcSet={`./images/heroes/${page}/${imgName}2560.jpg`}
          alt="Computer Operator"
        />
      </picture>
      <div className={styles.content}>
        <article className={styles.article}>
          <Header element="h1" title={pageData.heading} />
          <p className="lead">{pageData.paragraph}</p>
        </article>
        <div className={styles.buttons}>
          {pageData.btns &&
            pageData.btns.map((btn) => (
              <Link className="myBtn" key={btn.key} to={btn.link}>
                {btn.item}
              </Link>
            ))}
          {btn && btn}
        </div>
      </div>
    </section>
  );
};

export default Hero;
