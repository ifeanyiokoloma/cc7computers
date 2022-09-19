import { LocalMall } from "@mui/icons-material";
import {
  Badge,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useContext } from "react";
import { AiFillShopping } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { mainLinks } from "../../data/links";
import useAuth from "../../hooks/useAuth";
import { ModalContext, ShoppingCartContext } from "../context/contexts";
import { StyledDrawer, StyledLink } from "./StyledNavbar";

const MobileNav = () => {
  const { openSearch, sidebar, closeSidebar } = useContext(ModalContext);
  const { openCart, userCartLength, browserCartLength } = useContext(
    ShoppingCartContext
  );

  const { signIn } = useAuth();

  return (
    <StyledDrawer
      anchor="right"
      open={sidebar}
      onClose={closeSidebar}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <List component="nav" aria-label="main nav">
        {mainLinks.map((link) => (
          <ListItemButton key={link.id}>
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText
              sx={{ textTransform: "capitalize" }}
              primary={
                <StyledLink style={{ fontWeight: "bold" }} to={link.link}>
                  {link.name}
                </StyledLink>
              }
            />
          </ListItemButton>
        ))}
        <Divider />
        <ListItemButton
          onClick={() => {
            openCart();
            closeSidebar();
          }}
        >
          <ListItemIcon>
            <Badge
              badgeContent={signIn ? userCartLength : browserCartLength}
              color="primary"
            >
              <LocalMall />
            </Badge>
            {/* <AiFillShopping fontSize="1rem" cursor="pointer" /> */}
          </ListItemIcon>
          <ListItemText
            sx={{ textTransform: "capitalize" }}
            primary={<span style={{ fontWeight: "bold" }}>Shopping Cart</span>}
          />
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            closeSidebar();
            openSearch();
          }}
        >
          <ListItemIcon>
            <BsSearch size="1rem" style={{ cursor: "pointer" }} />
          </ListItemIcon>
          <ListItemText
            sx={{ textTransform: "capitalize" }}
            primary={<span style={{ fontWeight: "bold" }}>Search</span>}
          />
        </ListItemButton>
      </List>
    </StyledDrawer>
  );
};

export default MobileNav;
