import Hero from "../../components/hero/Hero";
import Skills from "../../components/skills/Skills";
import { services } from "../../data/articles/articles";
import React from "react";
import {
  Card,
  CardContent,
  Stack,
  Typography,

} from "@mui/material";
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
              <Typography variant="h4" gutterBottom>
                Our Services
              </Typography>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Computer Repair
                  </Typography>
                  <Typography
                    
                    color="textSecondary"
                    gutterBottom
                  >
                    Is your computer running slow or experiencing technical
                    issues? Our team of skilled technicians can diagnose and fix
                    a wide range of problems, from hardware malfunctions to
                    software bugs.
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Software Installation
                  </Typography>
                  <Typography
                    
                    color="textSecondary"
                    gutterBottom
                  >
                    Need help installing a new program or operating system on
                    your computer? We can handle all of your software
                    installation needs, ensuring that everything is set up
                    properly and running smoothly.
                  </Typography>
                </CardContent>
              </Card>
              <Card >
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Website Design and Development Training
                  </Typography>
                  <Typography
                  
                    color="textSecondary"
                    gutterBottom
                  >
                    Looking to build your own website or improve your existing
                    one? We offer training on website design and development,
                    covering everything from HTML and CSS to content management
                    systems like WordPress.
                  </Typography>
                </CardContent>
              </Card>
              <Card >
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Computer Training
                  </Typography>
                  <Typography
                    
                    color="textSecondary"
                    gutterBottom
                  >
                    Are you new to computers or just looking to improve your
                    skills? We offer a variety of computer training courses,
                    including introductions to popular programs like Microsoft
                    Office and Adobe Creative Suite.
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </StyledPaper>
        </Stack>
      </Container>
      <Skills />
    </>
  );
};

export default Services;
