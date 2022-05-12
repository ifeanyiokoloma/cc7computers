import Img from "react-cool-img";
import { Link } from "react-router-dom";
import AnimateComponents from "../AnimateComponents";
import ProductDesc from "../ProductDesc.js/ProductDesc";
import styles from "./card.module.css";
import React from "react";

const Card = ({ linkTo, productImage, productID, productPrice }) => {
  return (
    <AnimateComponents className={styles.card}>
      <Link className={styles.content} to={linkTo}>
        <div className={styles.imgContainer}>
          <Img
            style={{
              backgroundColor: "grey",
            }}
            className={styles.image}
            src={productImage}
            alt={productID}
          />
        </div>
        <ProductDesc title={productID} productPrice={productPrice} />
      </Link>
    </AnimateComponents>
  );
};

export default Card;
