import React from "react";
import {
  StyledContainer,
  StyledHero,
  StyledLink,
  StyledStack,
} from "./StyledHero";
import { Box, Stack, Typography } from "@mui/material";
import Img from "react-cool-img";

const Hero = ({ page, imgName, pageData, btn }) => {
  return (
    <StyledHero>
      <picture>
        <source
          className="img"
          media="(max-width: 320px)"
          srcSet={`./images/heroes/${page}/${imgName}320.jpg`}
        />
        <source
          className="img"
          media="(max-width: 375px)"
          srcSet={`./images/heroes/${page}/${imgName}375.jpg`}
        />
        <source
          className="img"
          media="(max-width: 425px)"
          srcSet={`./images/heroes/${page}/${imgName}425.jpg`}
        />
        <source
          className="img"
          media="(max-width: 768px)"
          srcSet={`./images/heroes/${page}/${imgName}768.jpg`}
        />
        <source
          className="img"
          media="(max-width: 1024px)"
          srcSet={`./images/heroes/${page}/${imgName}1024.jpg`}
        />
        <source
          className="img"
          media="(max-width: 1440px)"
          srcSet={`./images/heroes/${page}/${imgName}1440.jpg`}
        />
        <source
          className="img"
          media="(max-width: 2560px)"
          srcSet={`./images/heroes/${page}/${imgName}2560.jpg`}
        />
        <Img
          className="img"
          srcSet={`./images/heroes/${page}/${imgName}2560.jpg`}
          alt="Computer Operator"
        />
      </picture>

      <StyledStack alignItems="center" justifyContent="center" spacing={2}>
        <Box>
          <StyledContainer maxWidth="sm">
            <Typography variant="h4" color="whitesmoke" component="h1">
              {pageData.heading}
            </Typography>
            <Typography
              variant="subtitle1"
              color="lighterBlue.main"
              component="p"
            >
              {pageData.paragraph}
            </Typography>
          </StyledContainer>
        </Box>
        <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
          {pageData.btns &&
            pageData.btns.map((btn, index) => (
              <StyledLink
                color={index === 0 ? "primary" : "secondary"}
                variant="contained"
                size="large"
                key={btn.key}
                to={btn.link}
              >
                {btn.item}
              </StyledLink>
            ))}
          {btn && btn}
        </Stack>
      </StyledStack>
    </StyledHero>
  );
};

export default Hero;
