import { Box, Stack, styled } from "@mui/material";
import Img from "react-cool-img";

export const StyledImg = styled(Img)`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  background-color: grey;
`;

export const StyledStack = styled(Stack)`
  position: absolute;
  top: 80%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  width: 100%;
  height: 100%;
`;

export const StyledBox = styled(Box)`
  position: relative;
  height: 100%;
`;
