import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import useAdvancedFetch from "../../hooks/useAdvancedFetch";
import { Box, Container, Skeleton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import Price from "../Price";
import { StyledBox, StyledImg, StyledStack } from "./StyledSlide";

const Slideshow = () => {
  const [computers] = useAdvancedFetch(
    "products",
    "",
    "timestamp",
    "desc",
    6,
    []
  );
  return (
    <Box component="section">
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2">
          New Arrivals
        </Typography>
        <Splide
          options={{
            mediaQuery: "min",
            rewind: true,
            autoplay: true,
            width: "100%",
            gap: "1rem",
            height: "70vh",
            pauseOnHover: true,
            speed: 1000,
            interval: 6000,
            keyboard: true,
            rewindSpeed: 2000,
            pagination: true,
            arrows: true,
            easing: "ease",
            type: "loop",
            padding: "auto",
            perPage: 1,
            breakpoints: {
              600: {
                perPage: 2,
              },
            },
          }}
        >
          {computers.length > 0 ? (
            computers.map((computer) => {
              const computerLink = `/${computer.type}/${computer.id}`;
              const computerID = `${computer.brand} ${computer.model}`;
              return (
                <SplideSlide key={computer.id}>
                  <Link to={computerLink}>
                    <Stack>
                      <StyledBox component="figure">
                        <StyledImg src={computer.imgSrc} alt={computerID} />
                      </StyledBox>
                      <StyledStack p={2}>
                        <Typography
                          variant="h6"
                          component="b"
                          textTransform="uppercase"
                        >
                          {computerID}
                        </Typography>
                        <Typography variant="body2">
                          <Price amount={computer.price} />
                        </Typography>
                      </StyledStack>
                    </Stack>
                  </Link>
                </SplideSlide>
              );
            })
          ) : (
            <SplideSlide>
              <Skeleton variant="rectangular" width="100%" height="100vh" />
            </SplideSlide>
          )}
        </Splide>
      </Container>
    </Box>
  );
};

export default Slideshow;
