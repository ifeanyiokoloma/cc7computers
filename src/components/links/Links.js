import { AnimatePresence, motion } from "framer-motion";
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
        <li className={styles.link} key={link.id}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : null)}
            to={`/${link.name}`}
          >
            {link.name}
          </NavLink>
          {link.child && (
            <AnimatePresence key="link">
              <motion.ul
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.child}
              >
                {link.child.map((childLink) => (
                  <li key={childLink.id}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? styles.active : null
                      }
                      to={`/${childLink.name}`}
                    >
                      {childLink.name}
                    </NavLink>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          )}
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
