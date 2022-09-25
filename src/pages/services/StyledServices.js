import { Paper, styled } from "@mui/material";

export const StyledPaper = styled(Paper)(
  ({ theme }) => `
background-color: ${theme.palette.lighterBlue.main};
`
);
