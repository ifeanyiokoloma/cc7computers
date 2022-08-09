import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link to="/">CC7 Computers</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
