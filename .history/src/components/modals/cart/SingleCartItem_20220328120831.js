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
      <div className={styles.imageBox}>
        <PhotoFrame>
          <Img src={imgSrc} alt={name} />
        </PhotoFrame>
      </div>
      <h6 className={styles.name}>{name}</h6>
      <Price amount={price} size="3rem" />
    </Paper>
  );
};

export default SingleCartItem;
