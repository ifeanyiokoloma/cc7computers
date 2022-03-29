import { motion } from "framer-motion";

const Button = ({
  children,
  className,
  btnColor,
  txtColor = "var(--imprint-color)",
  onClick,
  disabled,
}) => {
  const buttonStyle = {
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
    border: "none",
    textTransform: "uppercase",
    padding: ".5rem 1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: ".5rem",
    textShadow: ".7px .7px rgba(255,255,255,0.8)",
    fontWeight: "bolder",
    backgroundColor: btnColor,
    color: txtColor,
  };
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{
        scale: 0.9,
      }}
      style={buttonStyle}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default Button;
