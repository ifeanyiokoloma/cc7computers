import { styled } from "@mui/material";
import Img from "react-cool-img";

export const StyledBox = styled("section")`
  .skills {
    margin: 0 auto;
    max-width: 800px;
    color: white;
  }

  .skills section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "header header"
      "image list";
    place-items: stretch;
    border: 2px solid;
    border-radius: 10px;
    margin-bottom: 1rem;
    padding: 1rem;
    overflow-x: hidden;
    grid-gap: 2rem;
  }

  .header {
    grid-area: header;
    text-align: center;
    font-family: "Dosis", sans-serif;
  }
`;

export const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;
