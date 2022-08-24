import { useContext, useState } from "react";
import { mainLinks } from "../../data/links";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import Logo from "../logo/Logo";
import Links from "../links/Links";
import AccountIcon from "../account/AccountIcon";
import { ModalContext, ShoppingCartContext } from "../context/contexts";
import React from "react";
import { Toolbar } from "@mui/material";
import MobileNav from "./MobileNav";
import { StyledBox, StyledIconButton, StyledNavbar } from "./StyledNavbar";
import { LocalMall, Search } from "@mui/icons-material";

const Navbar = ({ isSearch }) => {
  const [mobileNav, setMobileNav] = useState(false);
  const { openSearch } = useContext(ModalContext);
  const { openCart } = useContext(ShoppingCartContext);

  return (
    <>
      {!isSearch && (
        <StyledNavbar position="sticky" color="transparent">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <HamburgerIcon
              setMenu={setMobileNav}
              isMenu={mobileNav}
              bgColor={"black"}
              className="mobile"
            />

            <Logo width={40} />

            <Links className="desktop-flex" links={mainLinks} />

            <StyledIconButton
              size="large"
              onClick={openSearch}
              aria-label="search"
              className="desktop-flex"
            >
              <Search />
            </StyledIconButton>

            <StyledBox>
              <StyledIconButton
                size="large"
                onClick={openCart}
                aria-label="shopping cart"
                className="desktop-flex"
              >
                <LocalMall />
              </StyledIconButton>

              <StyledIconButton size="large">
                <AccountIcon />
              </StyledIconButton>
            </StyledBox>
          </Toolbar>
        </StyledNavbar>
      )}
      <MobileNav sidebar={mobileNav} setSidebar={setMobileNav} />
    </>
  );
};

export default Navbar;
