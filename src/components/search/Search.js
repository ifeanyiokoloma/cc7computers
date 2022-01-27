import styles from "./search.module.css";
import { BsSearch } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Search = ({ isSearch, handleTyped, closeSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <AnimatePresence>
      {isSearch && (
        <motion.form
            className={styles.form}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", delay: 0.5 }}
            onSubmit={handleSubmit}
        >
            <span className={styles.searchIcon}>
              <BsSearch />
            </span>

            <input
              onChange={(e) => handleTyped(e)}
              name="search"
              id="search"
              type="search"
              placeholder="Search"
              autoFocus={true}
              autoComplete="off"
            />

            <span className={styles.closeIcon} onClick={closeSearch}>
              <GrClose />
            </span>
          </motion.form>
      )}
    </AnimatePresence>
  );
};

export default Search;
