import React from "react";
import styles from "./navbar.module.css";
import { BsCart3, BsSearch } from "react-icons/bs";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Search from "../search/Search";
import cc7Logo from "../../data/images/cc7.jpg";
import { links } from "../../data/data";
import { AnimatePresence, motion } from "framer-motion";
import SearchResult from "../search/SearchResult";
import useFetchLive from "../../hooks/useFetchLive";

const Navbar = ({ isSearch, setIsSearch }) => {
  const [mobileNav, setMobileNav] = useState(false);

  const activateSearch = (e) => {
    setIsSearch((search) => (search = true));
  };

  const toggleHamburger = () => {
    return setMobileNav(!mobileNav);
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
        setDialogue((newDialogue) => (newDialogue = noSearch));
      } else if (
        product.brand.toLowerCase().includes(typed.toLowerCase()) ||
        product.model.toLowerCase().includes(typed.toLowerCase()) ||
        product.type.toLowerCase().includes(typed.toLowerCase()) ||
        product.name.toLowerCase().includes(typed.toLowerCase())
      ) {
        return product;
      } else {
        setDialogue(
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
      <div className="nav-row">
        <AnimatePresence exitBeforeEnter>
          {!isSearch && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.5 }}
              // style={{ display: isSearch && "none" }}
              className={styles.logoContainer}
            >
              <NavLink to="/">
                <span>
                  <img className={styles.logo} src={cc7Logo} alt="cc7 logo" />
                </span>
              </NavLink>
            </motion.div>
          )}
          {!isSearch && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.5 }}
              // style={{ display: isSearch && "none" }}
              className="menu"
            >
              <div
                className={styles.searchIcon}
                onClick={() => activateSearch()}
              >
                <BsSearch />
              </div>
              <div className="hamburger-menu" onClick={toggleHamburger}>
                <div
                  style={{
                    transform: mobileNav
                      ? "rotate(-45deg) translate(-9px, 6px)"
                      : "unset",
                  }}
                  className="bar1"
                ></div>
                <div
                  style={{ opacity: mobileNav ? 0 : "unset" }}
                  className="bar2"
                ></div>
                <div
                  style={{
                    transform: mobileNav
                      ? "rotate(45deg) translate(-8px, -8px)"
                      : "unset",
                  }}
                  className="bar3"
                ></div>
              </div>
            </motion.div>
          )}
          {!isSearch && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.5 }}
              className="nav-list"
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
              <li
                className={styles.searchIcon}
                onClick={() => activateSearch()}
              >
                <BsSearch />
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
            className="mobile-nav"
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
