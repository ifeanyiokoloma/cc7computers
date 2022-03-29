import Img from "react-cool-img";
import Price from "../../Price";
import styles from "./cart.module.css";

const SingleCartItem = ({ product }) => {
  const { brand, model, imgSrc, price } = product;
  const name = `${brand} ${model}`;
  return (
    <section className={styles.singleProduct}>
      <div className={styles.imageBox}>
        <Img src={imgSrc} alt={name} />
      </div>
      <h6>{name}</h6>
      <Price amount={price} />
    </section>
  );
};

export default SingleCartItem;
