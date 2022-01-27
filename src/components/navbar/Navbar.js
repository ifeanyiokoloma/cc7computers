import React from "react";
import styles from "./navbar.module.css";
import { BsCart3, BsSearch } from "react-icons/bs";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Search from "../search/Search";
import { links } from "../../data/data";
import { AnimatePresence, motion } from "framer-motion";
import SearchResult from "../search/SearchResult";
import useFetchLive from "../../hooks/useFetchLive";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import Logo from "../logo/Logo";

const Navbar = ({ isSearch, setIsSearch }) => {
  const [mobileNav, setMobileNav] = useState(false);

  const activateSearch = (e) => {
    setIsSearch((search) => (search = true));
  };

  // Search Functionalities
  const [products] = useFetchLive("products", []);
  const [filteredProducts, setFilteredProducts] = useState([]);

  let filtered;
  const noSearch = "search for product's name, brand, model or type";
  const [dialogue, setDialogue] = useState(noSearch);

  const handleTyped = (e) => {
    const typed = e.target.value;
    filtered = products.filter((product) => {
      if (typed === "") {
        return setDialogue((newDialogue) => (newDialogue = noSearch));
      } else if (
        product.brand.toLowerCase().includes(typed.toLowerCase()) ||
        product.model.toLowerCase().includes(typed.toLowerCase()) ||
        product.type.toLowerCase().includes(typed.toLowerCase()) ||
        product.name.toLowerCase().includes(typed.toLowerCase())
      ) {
        return product;
      } else {
        return setDialogue(
          (newDialogue) =>
            (newDialogue = "no product's name, brand, model or type found")
        );
      }
    });
    setFilteredProducts(
      (newFilteredProducts) => (newFilteredProducts = filtered)
    );
  };

  const closeSearch = () => {
    setIsSearch(false);
  };

  // Search Functionalities

  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <AnimatePresence exitBeforeEnter>
          {!isSearch && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.5 }}
              className={styles.logoContainer}
            >
              <Logo />
            </motion.div>
          )}
          {!isSearch && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.5 }}
              className={styles.menu}
            >
              <BsSearch
                onClick={() => activateSearch()}
                size="1.7rem"
                style={{ cursor: "pointer" }}
              />
              <HamburgerIcon
                setMenu={setMobileNav}
                isMenu={mobileNav}
                bgColor={"black"}
              />
            </motion.div>
          )}
          {!isSearch && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.5 }}
              className={styles.navList}
            >
              {links.map((link) => (
                <>
                  <li key={link.id}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? styles.active : null
                      }
                      to={`/${link.name}`}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                </>
              ))}
              <li>
                <BsSearch
                  size="1.7rem"
                  style={{ cursor: "pointer" }}
                  onClick={() => activateSearch()}
                />
              </li>
              <li className={styles.shoppingCart}>
                <BsCart3 />
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
        <Search
          setIsSearch={setIsSearch}
          isSearch={isSearch}
          handleTyped={handleTyped}
          closeSearch={closeSearch}
        />
      </div>
      <AnimatePresence exitBeforeEnter>
        {!isSearch && mobileNav && (
          <motion.ul
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              when: "beforeChildren",
              delay: 0.5,
            }}
            exit={{ opacity: 0 }}
            className={styles.mobileNav}
          >
            {links.map((link) => (
              <>
                <li key={link.id}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? styles.active : null
                    }
                    to={`/${link.name}`}
                  >
                    {link.name}
                  </NavLink>
                </li>
              </>
            ))}
          </motion.ul>
        )}
        {isSearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              delay: 0.5,
              when: "beforeChildren",
            }}
          >
            <SearchResult
              filteredProducts={filteredProducts}
              closeSearch={closeSearch}
              dialogue={dialogue}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
