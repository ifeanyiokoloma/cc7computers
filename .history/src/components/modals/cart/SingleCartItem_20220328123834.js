import Img from "react-cool-img";
import Paper from "../../Paper";
import PhotoFrame from "../../PhotoFrame";
import Price from "../../Price";
import styles from "./cart.module.css";

const SingleCartItem = ({ product }) => {
  const { brand, model, imgSrc, price } = product;
  const name = `${brand} ${model}`;
  return (
    <Paper className={styles.singleProduct}>
      <div className={styles.productBox}>
        <div className={styles.imageBox}>
          <Img src={imgSrc} alt={name} />
        </div>
        <div className={styles.name}>
          <h6>{brand}</h6>
          <p>{model}</p>
        </div>
      </div>

      <Price
        amount={price}
        size="2rem"
        weight="lighter"
        txtColor="var(--red-color)"
      />
    </Paper>
  );
};

export default SingleCartItem;
