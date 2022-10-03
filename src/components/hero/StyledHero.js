import { Button, Container, Stack, styled } from "@mui/material";

export const StyledHero = styled("header")(
  ({ theme }) => `
    height: calc(100vh - 120px);
    position: relative;

  .img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
);

export const StyledStack = styled(Stack)`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const StyledContainer = styled(Container)`
  text-align: center;
`;

export const StyledLink = styled(Button)(({ theme }) => `color: white; `);
