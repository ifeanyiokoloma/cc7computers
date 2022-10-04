import { Paper, styled } from "@mui/material";
import { DescPaper } from "../../../pages/product/StyledProduct";

export const StyledPaper = styled(DescPaper)`
  width: 100%;
`;

export const StyledCard = styled(Paper)(
  ({ theme }) => `
  width: 100%;
  height: 30vh;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: gray;
  }
  & > div {
    height: 100%
  }
  // ${[theme.breakpoints.up("sm")]} {
  //   width: 50%;
  // }
`
);
