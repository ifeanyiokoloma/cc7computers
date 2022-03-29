import Img from "react-cool-img";
import styles from "./cart.module.css";

const SingleCartItem = ({ product }) => {
  const { brand, model, imgSrc, price } = product;
  const name = `${brand} ${model}`;
  return (
    <section className={styles.singleProduct}>
      <div>
        <Img src={imgSrc} alt={name} />
      </div>
      <h6>{name}</h6>
      <p>{price}</p>
    </section>
  );
};

export default SingleCartItem;
