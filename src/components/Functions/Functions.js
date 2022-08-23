import { forwardRef } from "react";
import React from "react";
import { Slide } from "@mui/material";

export const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Filter = (products, id) =>
  products.filter((product) => product.id === id);
