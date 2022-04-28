import React from "react";

const ProductsSkeleton = () => {
  return Array.from([1, 2, 3, 4, 5, 6]).map((index) => (
    <motion.section
      whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
      whileTap={{ scale: 0.8, transition: { duration: 0.5 } }}
      className={styles.card}
      key={index}
    >
      <div className={styles.content}>
        <Skeleton animation="wave" variant="rectangular" sx={{ height: 400 }} />
        <section className={styles.text}>
          <h1>
            <Skeleton sx={{ width: "30%" }} animation="wave" variant="text" />
          </h1>
          <p className={styles.price}>
            <Skeleton sx={{ width: "20%" }} animation="wave" variant="text" />
          </p>
        </section>
      </div>
    </motion.section>
  ));
};

export default ProductsSkeleton;
