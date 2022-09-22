import cc7Logo from "../../data/images/cc7.jpg";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LoginBtn from "../account/LoginBtn";
import React from "react";
import { StyledImg } from "./StyledFooter";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Stack,
  Container,
  ListSubheader,
} from "@mui/material";
import { business, company } from "../../data/links";

const Footer = () => {
  const { signIn, user } = useAuth();
  return (
    <Box component="footer" py={2}>
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Box>
            {signIn && user.displayName && (
              <Typography component="p">
                Logged in as {user.displayName}
              </Typography>
            )}
            <LoginBtn />
          </Box>

          <Stack spacing={2} direction={{ sm: "row" }}>
            <Stack spacing={2}>
              <Link to="/">
                <StyledImg src={cc7Logo} alt="CC7 Computers Logo" />
              </Link>
              <Typography component="p">
                Giving life
                <br />
                and power
                <br />
                to computing...
              </Typography>
            </Stack>

            <Box component="nav">
              <List dense subheader={<ListSubheader>Business</ListSubheader>}>
                {business.map((link) => (
                  <ListItem>
                    <ListItemText>
                      <Link to={link.link}>{link.name}</Link>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box component="nav">
              <List dense subheader={<ListSubheader>Company</ListSubheader>}>
                {company.map((link) => (
                  <ListItem>
                    <ListItemText>
                      <Link to={link.link}>{link.name}</Link>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Stack>
          <hr />

          <Typography component="small">
            Copyright © 2022 <b>CC7 Computers</b>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
