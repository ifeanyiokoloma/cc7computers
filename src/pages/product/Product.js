import styles from "./product.module.css";

const Product = ({ product }) => {
  console.log(product);
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
            <div className={styles.btns}>
              <button className={styles.add2cart}>
                &#8358;
                {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
