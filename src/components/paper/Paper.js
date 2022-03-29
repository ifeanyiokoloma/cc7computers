import styles from "./paper.module.css";

const Paper = ({ children }) => {
  return <section className={styles.paper}>{children}</section>;
};

export default Paper;
