import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styles from "./links.module.css";

const Links = ({
  links,
  extraItem,
  extraItem2,
  extraItem3,
  extraItem4,
  extraItem5,
  className,
}) => {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", delay: 0.5 }}
      className={className}
    >
      {links.map((link) => (
        <li key={link.id}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : null)}
            to={`/${link.name}`}
          >
            {link.name}
          </NavLink>
        </li>
      ))}
      {extraItem && <br />}
      {extraItem && <li>{extraItem}</li>}
      {extraItem2 && <li>{extraItem2}</li>}
      {extraItem3 && <li>{extraItem3}</li>}
      {extraItem4 && <li>{extraItem4}</li>}
      {extraItem5 && <li>{extraItem5}</li>}
    </motion.ul>
  );
};

export default Links;
