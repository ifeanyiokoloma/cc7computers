import styles from "./products.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useAdvancedFetch from "../../hooks/useAdvancedFetch";
import { motion } from "framer-motion";

const Computers = ({ limit, header = "Computers" }) => {
  const [computers] = useAdvancedFetch(
    "products",
    "computer",
    "timestamp",
    limit,
    []
  );

  return (
    <section className={styles.container}>
      <h3 style={{ textAlign: "center" }}>{header}</h3>
      <div className={styles.grid}>
        {computers.length === 0 ? (
          <p>We have no computers yet</p>
        ) : (
          computers.map((computer) => (
            <motion.div
              whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
              whileTap={{ scale: 0.8, transition: { duration: 0.5 } }}
              className="paper"
            >
              <Link
                key={computer.id}
                className={styles.content}
                to={`/shop/${computer.id}`}
              >
                <div className={styles.imgContainer}>
                  <img
                    className={styles.image}
                    src={computer.imgSrc}
                    alt={computer.brand}
                  />
                </div>
                <section className={styles.text}>
                  <h6 className="text-uppercase">
                    {computer.brand} {computer.model}
                  </h6>
                  <p>{computer.name}</p>
                  <p>{computer.processor}</p>
                  <p>{computer.ram}</p>
                  <p>{computer.storage}</p>
                  <p>{computer.os}</p>
                  <p>{computer.type}</p>
                  <p className={styles.price}>
                    {" "}
                    &#8358;
                    {computer.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                </section>
              </Link>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
};

Computers.propTypes = {
  computers: PropTypes.array,
};

export default Computers;
