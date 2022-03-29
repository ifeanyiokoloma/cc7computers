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
      <div className="d-flex">
        <div className={styles.imageBox}>
          <PhotoFrame>
            <Img src={imgSrc} alt={name} />
          </PhotoFrame>
        </div>
        <div>
          <h6 className={styles.name}>{brand}</h6>
          <p className={styles.name}>{model}</p>
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
