import { motion } from "framer-motion";
import Card from "../card/Card";

const SingleProduct = ({ product }) => {
  const productLink = `/${product.type}/${product.id}`;
  const productID = `${product.brand} ${product.model}`;
  return (
    <motion.section
      key={product.id}
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
