import Img from "react-cool-img";
import Price from "../../Price";
import styles from "./cart.module.css";
import { AiOutlineClose } from "react-icons/ai";

const SingleCartItem = ({ product }) => {
  const { brand, model, imgSrc, price } = product;
  const name = `${brand} ${model}`;
  return (
    <section className={styles.singleProduct}>
      <div className={styles.productBox}>
        <div className={styles.imageBox}>
          <Img src={imgSrc} alt={name} />
        </div>
        <div className={styles.name}>
          <h6>{brand}</h6>
          <p className={styles.model}>{model}</p>
        </div>
      </div>

      <Price
        amount={price}
        size="1.5rem"
        weight="bold"
        txtColor="var(--red-color)"
      />
      <AiOutlineClose className={styles.close} color="var(--red-color)" />
    </section>
  );
};

export default SingleCartItem;