import { forwardRef } from "react";
import React from "react";
import { Slide } from "@mui/material";

export const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
