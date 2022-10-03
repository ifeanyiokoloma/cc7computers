import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const EmailUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7orkh0p",
        "template_z1pr6br",
        form.current,
        "user_hfljyPGydUMWkOPDRToM2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box component="form" ref={form} onSubmit={sendEmail}>
      <Stack spacing={2}>
        <Typography variant="h4">Email Us</Typography>
        <TextField
          required
          label="Name"
          variant="filled"
          type="text"
          name="user_name"
        />

        <TextField
          required
          label="Email"
          variant="filled"
          type="email"
          name="user_email"
        />

        <TextField
          multiline
          variant="filled"
          label="Message"
          rows={5}
          name="message"
          required
        />

        <Box>
          <Button variant="contained" type="submit">
            Send
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default EmailUs;
