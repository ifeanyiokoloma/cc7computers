import { AppBar, Box, Drawer, IconButton, List, styled } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

export const StyledNavbar = styled(AppBar)`
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  .desktop-flex {
    display: none;
  }

  @media (min-width: 900px) {
    .mobile {
      display: none;
    }

    .desktop-flex {
      display: flex;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: black;
`;

export const StyledList = styled(List)`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const StyledNavLink = styled(NavLink)(
  ({ theme }) => `
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-weight: bold;
  text-transform: capitalize;
  text-decoration: none;
  color: rgb(85, 84, 84);
  .active {
  border-bottom: 2px solid ${theme.palette.primary.main};
  color: ${theme.palette.primary.main};
  transition: 0.2s;
  }
`
);

export const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 2rem;
  }
`;

export const StyledIconButton = styled(IconButton)(
  ({ theme }) => `
  &:hover {
    color: ${theme.palette.primary.main};
  }
`
);

export const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
`;
