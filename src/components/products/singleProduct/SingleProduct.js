import { motion } from "framer-motion";
import Card from "../../card/Card";
import styles from "./singleProduct.module.css";
import React from "react";

const SingleProduct = ({ product, key }) => {
  const productLink = `/${product.type}/${product.id}`;
  const productID = `${product.brand} ${product.model}`;
  return (
    <motion.section
      key={key}
      whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
      whileTap={{ scale: 0.8, transition: { duration: 0.5 } }}
      className={styles.card}
    >
      <Card
        linkTo={productLink}
        productImage={product.imgSrc}
        productPrice={product.price}
        productID={productID}
      />
    </motion.section>
  );
};

export default SingleProduct;
