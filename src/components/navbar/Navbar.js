import styles from "./navbar.module.css";
import { BsCart3, BsSearch } from "react-icons/bs";
import { useState } from "react";
import Search from "../search/Search";
import { mainLinks } from "../../data/links";
import { AnimatePresence, motion } from "framer-motion";
import SearchResult from "../search/SearchResult";
import useFetchLive from "../../hooks/useFetchLive";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import Logo from "../logo/Logo";
import Links from "../links/Links";
import AccountIcon from "../login/AccountIcon";

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
        {!isSearch && (
          <>
            <HamburgerIcon
              setMenu={setMobileNav}
              isMenu={mobileNav}
              bgColor={"black"}
              className={styles.hamburgerIcon}
            />

            <Logo width={40} className={styles.logo} />

            <Links className={styles.navList} links={mainLinks} />

            <BsSearch
              size="1.7rem"
              style={{ cursor: "pointer" }}
              onClick={() => activateSearch()}
              className={styles.desktopSearch}
            />
            <div className={styles.account}>
              <BsCart3 fontSize="2rem" cursor="pointer" />
              <AccountIcon />
            </div>
          </>
        )}

        <Search
          setIsSearch={setIsSearch}
          isSearch={isSearch}
          handleTyped={handleTyped}
          closeSearch={closeSearch}
        />
      </div>

      {!isSearch && mobileNav && (
        <Links
          extraItem={
            <BsSearch
              onClick={() => activateSearch()}
              size="1rem"
              style={{ cursor: "pointer" }}
            />
          }
          links={mainLinks}
          className={styles.mobileNav}
        />
      )}

      <AnimatePresence exitBeforeEnter>
        {isSearch && (
          <motion.div
            key="searchResult"
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
