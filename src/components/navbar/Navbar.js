import { useContext } from "react";
import { mainLinks } from "../../data/links";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import Logo from "../logo/Logo";
import Links from "../links/Links";
import AccountIcon from "../account/AccountIcon";
import { ModalContext, ShoppingCartContext } from "../context/contexts";
import React from "react";
import { Badge, IconButton, Toolbar } from "@mui/material";
import { StyledBox, StyledIconButton, StyledNavbar } from "./StyledNavbar";
import { LocalMall, Search } from "@mui/icons-material";
import { Container } from "@mui/system";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { openSearch, closeSidebar } = useContext(ModalContext);
  const { openCart, userCartLength, browserCartLength } = useContext(
    ShoppingCartContext
  );

  const { signIn } = useAuth();

  return (
    <StyledNavbar position="sticky" color="transparent">
      <Container>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <HamburgerIcon bgColor={"black"} className="mobile" />

          <IconButton>
            <Logo width={40} />
          </IconButton>

          <Links className="desktop-flex" links={mainLinks} />

          <StyledIconButton
            size="large"
            onClick={() => {
              closeSidebar();
              openSearch();
            }}
            aria-label="search"
            className="desktop-flex"
          >
            <Search />
          </StyledIconButton>

          <StyledBox>
            <StyledIconButton
              size="large"
              onClick={() => {
                closeSidebar();
                openCart();
              }}
              aria-label="shopping cart"
              className="desktop-flex"
            >
              <Badge
                badgeContent={signIn ? userCartLength : browserCartLength}
                color="primary"
              >
                <LocalMall />
              </Badge>
            </StyledIconButton>

            <AccountIcon />
          </StyledBox>
        </Toolbar>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
