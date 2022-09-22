// eslint-disable-next-line
import React from "react";

const Price = ({ amount }) => {
  return <>&#8358;{amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</>;
};

export default Price;
