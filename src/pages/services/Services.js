import Hero from "../../components/hero/Hero";
import Skills from "../../components/skills/Skills";
import { services } from "../../data/articles/articles";
import React from "react";
import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { StyledPaper } from "../../components/Styled/Styled";

const Services = () => {
  return (
    <>
      <Hero page="services" imgName="office" pageData={services} />
      <Container maxWidth="sm">
        <Stack
          sx={{ minHeight: "100vmin" }}
          justifyContent="center"
          alignItems="center"
        >
          <StyledPaper sx={{ p: 4, my: 4 }}>
            <Stack
              direction="column"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h5">Computer General Services</Typography>
              <Typography>
                Research has shown that 70% of system damage/malfunctions are as
                a result of non-professional handling of computers.
              </Typography>
              <Typography>
                Therefore, CC7 upholds professionalism basically when it comes
                to Computer System Repair and Software Installation and
                Maintenance.
              </Typography>
            </Stack>
          </StyledPaper>
        </Stack>
      </Container>
      <Skills />
    </>
  );
};

export default Services;
