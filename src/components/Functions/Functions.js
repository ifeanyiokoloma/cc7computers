import { forwardRef } from "react";
import React from "react";
import { Slide } from "@mui/material";

export const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Filter = (products, id) =>
  products.filter((product) => product.id === id);

export const sum = (items) => {
  const acc = items.reduce((acc, item) => {
    acc += Number(item.price);
    return acc;
  }, 0);
  return acc;
};

// export const sum = (items) => {
//   const acc = 0;
//     acc += Number(item.price);
//     return acc;
//   }, 0);
//   return acc;
// };
