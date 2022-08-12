import { Alert, AlertTitle, Dialog, IconButton } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useContext } from "react";
import { ModalContext } from "../context/contexts";
import { Close } from "@mui/icons-material";
import { Transition } from "../Functions/Functions";

const Response = () => {
  const { message, closeResponse, response } = useContext(ModalContext);
  return (
    <Dialog
      fullScreen
      open={response}
      onClose={closeResponse}
      TransitionComponent={Transition}
    >
      <IconButton
        sx={{ position: "absolute", top: 10, right: 10 }}
        aria-label="close"
        color="error"
        size="large"
        onClick={closeResponse}
      >
        <Close fontSize="inherit" />
      </IconButton>
      <Container maxWidth="xs">
        <Box
          component="div"
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Alert severity="success" variant="filled" color="success">
            <AlertTitle>Success</AlertTitle>
            {message}
          </Alert>
        </Box>
      </Container>
    </Dialog>
  );
};

export default Response;
