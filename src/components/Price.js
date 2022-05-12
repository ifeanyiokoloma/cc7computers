import React from "react";

const Price = ({ amount, size, weight, txtColor, align }) => {
  const stylePrice = {
    fontSize: size,
    fontWeight: weight,
    color: txtColor,
    textAlign: align,
  };
  return (
    <span style={stylePrice}>
      &#8358;{amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </span>
  );
};

export default Price;
