import React from "react";
import Products from "../../components/products/Products";

const Computers = ({ link, linkName, extent }) => {
  return (
    <Products
      productName="Computers"
      link={link}
      linkName={linkName}
      extent={extent}
    />
  );
};

export default Computers;
