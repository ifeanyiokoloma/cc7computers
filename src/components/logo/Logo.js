import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import cc7Logo from "../../data/images/cc7.jpg";
import styles from "./logo.module.css";

const Logo = ({width, className}) => {
  const LogoWidth = {
    width: width
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", delay: 0.5 }}
      style={LogoWidth}
      className={className}
    >
      <NavLink to="/">
        <img className={styles.img} src={cc7Logo} alt="cc7 logo" />
      </NavLink>
    </motion.div>
  );
};

export default Logo;
