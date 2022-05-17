import React from "react";
import styles from "./article.module.css";
import Header from "../../components/Header";
import PropTypes from "prop-types";

const Article = ({
  children,
  title,
  element,
  textColor,
  paraAlign,
  boxClass,
  textClass,
}) => {
  const article = {
    color: textColor,
    body: {
      textAlign: paraAlign,
    },
  };

  return (
    <article style={article} className={styles.article}>
      {/* {icon} */}
      <Header
        title={title}
        element={element}
        // boxClass={boxClass}
        // textClass={textClass}
        txtSize="2rem"
      />
      <div style={article.body} className={styles.body}>
        {children}
      </div>
    </article>
  );
};

Article.propTypes = {
  textColor: PropTypes.string,
};

Article.defaultProps = {
  textColor: "white",
};

export default Article;
