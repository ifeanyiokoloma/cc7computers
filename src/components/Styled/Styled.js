import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.palette.lighterBlue.main};
  `
);
