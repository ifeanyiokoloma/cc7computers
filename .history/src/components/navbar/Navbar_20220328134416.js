import styles from "./navbar.module.css";
import { BsSearch } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";
import { useContext, useState } from "react";
import { mainLinks } from "../../data/links";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import Logo from "../logo/Logo";
import Links from "../links/Links";
import AccountIcon from "../account/AccountIcon";
import { ModalContext, ShoppingCartContext } from "../context/contexts";

const Navbar = ({ isSearch, setIsSearch }) => {
  const [mobileNav, setMobileNav] = useState(false);

  const { handleShowSearch } = useContext(ModalContext);
  const { handleShowCart } = useContext(ShoppingCartContext);

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
              size="1.5rem"
              style={{ cursor: "pointer" }}
              onClick={() => handleShowSearch()}
              className={styles.desktopSearch}
            />
            <div className={styles.account}>
              <AiFillShopping
                onClick={handleShowCart}
                fontSize="2rem"
                cursor="pointer"
              />
              <AccountIcon />
            </div>
          </>
        )}
      </div>

      {mobileNav && (
        <Links
          extraItem={
            <BsSearch
              onClick={() => handleShowSearch()}
              size="1rem"
              style={{ cursor: "pointer" }}
            />
          }
          links={mainLinks}
          className={styles.mobileNav}
        />
      )}
    </nav>
  );
};

export default Navbar;
