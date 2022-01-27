import styles from "./products.module.css";
import { Link } from "react-router-dom";
import useAdvancedFetch from "../../hooks/useAdvancedFetch";
import { Skeleton } from "@mui/material";
import { motion } from "framer-motion";

const Accessories = ({ limit, header = "Accessories" }) => {
  const [accessories] = useAdvancedFetch(
    "products",
    "accessory",
    "timestamp",
    limit,
    []
  );
  return (
    <section className={styles.container}>
      <h3 style={{ textAlign: "center" }}>{header}</h3>
      <div className={styles.grid}>
        {accessories.length > 0 ? (
          accessories.map((accessory) => (
            <motion.div className="paper"
              whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
              whileTap={{ scale: 0.8, transition: { duration: 0.5 } }}
            >
              <Link
                key={accessory.id}
                className={styles.content}
                to={`/shop/${accessory.type}/${accessory.id}`}
              >
                <div className={styles.imgContainer}>
                  <img
                    className={styles.image}
                    src={accessory.imgSrc}
                    alt={accessory.brand}
                  />
                </div>
                <section className={styles.text}>
                  <h6 className="text-uppercase">
                    {accessory.brand} {accessory.model}
                  </h6>
                  <p>{accessory.name}</p>
                  <p className={styles.price}>
                    {" "}
                    &#8358;
                    {accessory.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                </section>
              </Link>
            </motion.div>
          ))
        ) : (
          <>
            <Skeleton sx={{ bgcolor: "black", height: "100%", margin: 0 }} />
            <Skeleton sx={{ bgcolor: "black", height: "100%" }} />
            <Skeleton sx={{ bgcolor: "black", height: "100%" }} />
            <Skeleton sx={{ bgcolor: "black", height: "100%" }} />
            <Skeleton sx={{ bgcolor: "black", height: "100%" }} />
          </>
        )}
      </div>
    </section>
  );
};

export default Accessories;
