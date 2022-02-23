import Payment from "../../components/payment/Payment";
import styles from "./product.module.css";

const Product = ({ product }) => {
  return (
    <div className={styles.container}>
      <h1>
        {product.brand} {product.model}
      </h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <img src={product.imgSrc} alt={`${product.brand} ${product.model}`} />
        </div>
        <div className={styles.descContainer}>
          <div className={styles.desc}>
            <h6>
              {product.brand} {product.model}
            </h6>
            {product.name && <p>{product.name}</p>}
            {product.processor && (
              <p>
                <span>Processor:</span> {product.processor}
              </p>
            )}
            {product.ram && product.ram && (
              <p>
                <span>ram:</span> {product.ram}
              </p>
            )}
            {product.storage && (
              <p>
                <span>storage:</span> {product.storage}
              </p>
            )}
            {product.graphics && (
              <p>
                <span>graphics</span>: {product.graphics}
              </p>
            )}
            {product.os && (
              <p>
                <span>operating system:</span> {product.os}
              </p>
            )}
            {product.type && (
              <p>
                <span>type:</span> {product.type}
              </p>
            )}
            <p className={styles.price}>
              &#8358;
              {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
            <div className={styles.btns}>
              <Payment productPrice={product.price} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
