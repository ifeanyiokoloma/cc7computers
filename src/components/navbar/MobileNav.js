import {
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
import { ModalContext, ShoppingCartContext } from "../context/contexts";
import { StyledDrawer, StyledLink } from "./StyledNavbar";

const MobileNav = ({ sidebar, setSidebar }) => {
  const { openSearch } = useContext(ModalContext);
  const { openCart } = useContext(ShoppingCartContext);

  const closeSidebar = () => {
    setSidebar(false);
  };
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
        <ListItemButton onClick={openCart}>
          <ListItemIcon>
            <AiFillShopping fontSize="1rem" cursor="pointer" />
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
