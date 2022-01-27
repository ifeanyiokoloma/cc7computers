import { NavLink } from "react-router-dom";
import cc7Logo from "../../data/images/cc7.jpg";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.container}>
      <NavLink to="/">
        <img className={styles.img} src={cc7Logo} alt="cc7 logo" />
      </NavLink>
    </div>
  );
};

export default Logo;
