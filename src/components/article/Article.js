import styles from "./article.module.css";
import Header from "../../components/Header";

const Article = ({ children, title, element, icon }) => {
  return (
    <article className={styles.article}>
      <div className={styles.typoBorder}>
        {icon}
        <Header title={title} element={element} className={styles.header} />
        <p>{children}</p>
      </div>
    </article>
  );
};

export default Article;
