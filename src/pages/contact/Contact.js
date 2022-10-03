import React from "react";
import Hero from "../../components/hero/Hero";
import { contact } from "../../data/articles/articles";
import Feedback from "../../components/feedback/Feedback";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { StyledStack } from "./StyledContact";
import { StyledPaper } from "../../components/Styled/Styled";

const Contact = () => {
  return (
    <>
      <Hero page="contact" imgName="contact" pageData={contact} />
      <Box component="main" mb={5}>
        <Container maxWidth="sm">
          <Box component="address" my={5}>
            <StyledPaper>
              <StyledStack
                py={8}
                spacing={1}
                justifyContent="center"
                alignItems="center"
              >
                <Typography component="h2">Call Us:</Typography>

                <Button variant="text">
                  <Typography variant="h5">
                    <a href="tel:+2347037680735">+234 703 768 0735</a>
                  </Typography>
                </Button>

                <Button variant="text">
                  <Typography variant="h5">
                    <a href="tel:+2347036389506">+234 905 760 9004</a>
                  </Typography>
                </Button>
              </StyledStack>
            </StyledPaper>
          </Box>

          <Stack
            justifyContent="center"
            sx={{ height: "100vh", width: "100%" }}
          >
            <Paper>
              <Box component="figure">
                <Typography
                  p="2"
                  textAlign="center"
                  variant="h5"
                  component="figcaption"
                >
                  Locate Us
                </Typography>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15865.532473043975!2d7.068951365401418!3d6.213098359803954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x104383df55007497%3A0x8ca2d0c424e039b8!2sFirst%20Floor%2C%20CC7%20Computers%2C%20Eke%2C%20Opposite%20Market%2C%20142%2C%203%20Zik&#39;s%20Avenue%2C%20420108%2C%20Awka!3m2!1d6.2071932!2d7.0684995!5e0!3m2!1sen!2sng!4v1664783543425!5m2!1sen!2sng"
                  width="600"
                  height="450"
                  style={{ border: 0, width: "100%" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="CC7 Computers Location"
                ></iframe>
              </Box>
            </Paper>
          </Stack>
          <Feedback />
        </Container>
      </Box>
    </>
  );
};

export default Contact;
