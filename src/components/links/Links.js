import React from "react";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { StyledList, StyledNavLink } from "../navbar/StyledNavbar";

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
    <StyledList className={className}>
      {links.map((link) => (
        <ListItem key={link.id} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText
              primary={
                <StyledNavLink
                  className={({ isActive }) => (isActive ? "active" : null)}
                  to={`/${link.name}`}
                >
                  {link.icon}
                  {link.name}
                </StyledNavLink>
              }
            />
          </ListItemButton>
        </ListItem>
      ))}
    </StyledList>
  );
};

export default Links;
