import { Box, Paper, styled } from "@mui/material";

export const StyledBox = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.palette.lighterBlue.main};
  `
);

export const StyledPaper = styled(Paper)(
  ({ theme }) => `
background-color: ${theme.palette.lighterBlue.main};
`
);
