import React from "react";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import { StyledBox, StyledImg } from "./StyledSkills";
import { skills } from "../../data/skills";
import { Circle } from "@mui/icons-material";
import { StyledPaper } from "../../pages/services/StyledServices";

const Skills = () => {
  return (
    <StyledBox>
      <Container maxWidth="md">
        <Stack spacing={2}>
          <Box p={2}>
            <Typography variant="h5" component="h2">
              Computer Trainning
            </Typography>
            <Typography component="p">
              <b>We offer these courses:</b>
            </Typography>
          </Box>

          {skills.map((skill) => (
            <Stack spacing={2}>
              <StyledPaper p={2}>
                <Grid container spacing={2} p={2}>
                  <Grid item xs={12} sm={6}>
                    <StyledImg src={skill.img} alt="" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <List
                      dense
                      subheader={
                        <>
                          <ListSubheader>{skill.title}</ListSubheader>
                        </>
                      }
                    >
                      {skill.list.map((item) => (
                        <ListItem>
                          <ListItemIcon>
                            <Circle fontSize="small" />
                          </ListItemIcon>
                          <ListItemText>{item}</ListItemText>
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>
              </StyledPaper>
            </Stack>
          ))}
        </Stack>
      </Container>
    </StyledBox>
  );
};

export default Skills;
