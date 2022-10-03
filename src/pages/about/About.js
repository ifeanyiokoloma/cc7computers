import Hero from "../../components/hero/Hero";
// import Employees from "./Employees";
import { about } from "../../data/articles/articles";
import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { StyledPaper } from "../../components/Styled/Styled";
import { Circle } from "@mui/icons-material";
import Team from "../../components/team/Team";

const About = () => {
  return (
    <>
      <Hero page="about" imgName="keyboard" pageData={about} />

      <Box my={5} component="main">
        <Container maxWidth="sm">
          <Stack spacing={5}>
            <StyledPaper sx={{ p: 5 }}>
              <List
                subheader={
                  <ListSubheader component="h2">Our Vision</ListSubheader>
                }
              >
                <ListItem>
                  <ListItemText>
                    To become the model for global computer systems support
                    service provision,
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    To ensure maximum productivity in the use of computer
                    system, leading to an enhanced perfomance of individuals and
                    organizations, as it relates to computing and business
                    needs.
                  </ListItemText>
                </ListItem>
              </List>
            </StyledPaper>

            <StyledPaper sx={{ p: 5 }}>
              <Box component="article">
                <Stack spacing={2}>
                  <Typography component="h2" variant="h5">
                    Our Mission
                  </Typography>
                  <Typography component="p">
                    Giving life and power to computing <br /> via heaven
                    computing <br />
                    (Gen 1:26, John 14:2)
                  </Typography>
                </Stack>
              </Box>
            </StyledPaper>

            <StyledPaper sx={{ p: 5 }}>
              <List
                subheader={
                  <ListSubheader component="h2">Our Values</ListSubheader>
                }
              >
                <ListItem>
                  <ListItemIcon>
                    <Circle />
                  </ListItemIcon>
                  <ListItemText>Wisdom</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Circle />
                  </ListItemIcon>
                  <ListItemText>Integrity</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Circle />
                  </ListItemIcon>
                  <ListItemText>Clarity</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Circle />
                  </ListItemIcon>
                  <ListItemText>Accountability</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Circle />
                  </ListItemIcon>
                  <ListItemText>Networking</ListItemText>
                </ListItem>
              </List>
            </StyledPaper>
          </Stack>
        </Container>
        <Box mt={6}>
          <Stack spacing={2} alignItems="center">
            <Typography component="h2" variant="h5">
              Our Team
            </Typography>
            <Team />
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default About;
