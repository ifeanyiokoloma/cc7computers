import { motion } from "framer-motion";
import styles from "./button.module.css";

const Button = ({
  children,
  btnColor,
  txtColor = "var(--imprint-color)",
  onClick,
  disabled,
  margin,
  type,
  position,
  width,
  overflow,
  height,
}) => {
  const buttonStyle = {
    backgroundColor: btnColor,
    color: txtColor,
    margin: margin,
    position: position,
    width: width,
    overflow: overflow,
    height: height,
  };
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{
        scale: 0.9,
      }}
      style={buttonStyle}
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </motion.button>
  );
};

export default Button;
