import { Box, Paper, styled, Typography } from "@mui/material";

export const ProductContainer = styled(Box)(
  ({ theme }) => `
  background-color: ${theme.palette.lighterBlue.main};
`
);

export const ProductTitle = styled(Typography)`
  text-shadow: 0.7px 0.7px rgba(255, 255, 255, 0.8);
  color: rgba(10, 10, 27, 0.616);
  font-weight: bolder;
`;

export const PriceTag = styled(Typography)(
  ({ theme }) => `
  color: rgb(70, 69, 69);
  transform: rotate(5deg);
  background-color: ${theme.palette.yellow.main};
  text-align: center;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bolder;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin-top: 1rem;
`
);

export const PhotoFrame = styled("figure")`
  border-width: 1rem 1rem 2rem;
  border-style: solid;
  border-color: white;
  height: 70vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const DescPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.lighterGreen.main,
  padding: "1rem",
  [theme.breakpoints.up("sm")]: {
    padding: "0.5in",
  },
}));
