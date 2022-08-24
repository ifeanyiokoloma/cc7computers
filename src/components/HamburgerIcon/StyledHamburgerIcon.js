import { styled } from "@mui/material";
import { Box } from "@mui/system";

export const StyledHamburger = styled(Box)`
  cursor: "pointer";
`;

export const StyledBox1 = styled(Box)(
  ({ theme }) => `
    background-color: ${({ bgcolor }) => bgcolor || theme.palette.primary.main};
    width: 35px;
    height: 5px;
    margin: 6px 0;
    transition: 0.4s;
  `
);
export const StyledBox2 = styled(Box)(
  ({ theme }) => `
    backgroundColor: ${({ bgcolor }) => bgcolor || theme.palette.primary.main};
    width: 35px;
    height: 5px;
    margin: 6px 0;
    transition: 0.4s;
  `
);

export const StyledBox3 = styled(Box)(
  ({ theme }) => `
    backgroundColor: ${({ bgcolor }) => bgcolor || theme.palette.primary.main},
    width: 35px;
    height: 5px;
    margin: 6px 0;
    transition: 0.4s;
  `
);
