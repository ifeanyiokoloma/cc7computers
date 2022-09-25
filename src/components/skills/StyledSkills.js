import { styled } from "@mui/material";
import Img from "react-cool-img";

export const StyledBox = styled("section")(
  ({ theme }) => `
// background-color: ${theme.palette.lighterBlue.main}
`
);

export const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;
