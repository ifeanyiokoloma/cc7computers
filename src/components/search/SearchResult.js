import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./search.module.css";

const SearchResult = ({ filteredProducts, closeSearch, dialogue }) => {
  return (
    <div
    className={styles.searchResult}
    >
        <ul className={styles.resultContainer}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              return (
                <AnimatePresence key={product.id}>
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", when: "beforeChildren" }}
                    onClick={() => {
                      closeSearch();
                    }}
                  >
                    <Link to={`/${product.type}/${product.id}`}>
                      <div
                        key={`${product.id}`}
                        className={styles.imgContainer}
                      >
                        <img
                          src={product.imgSrc}
                          alt={`${product.brand} ${product.model}`}
                        />
                      </div>
                      <div className={styles.textContainer}>
                        <div className={styles.textContent}>
                          <h6 className="text-uppercase">
                            {product.brand} {product.model}
                          </h6>
                          {product.name && (
                            <p className="text-capitalize">{product.name}</p>
                          )}
                          {product.processor && (
                            <p>Processor: {product.processor}</p>
                          )}
                          {product.storage && <p>Storage: {product.storage}</p>}
                          {product.ram && <p>RAM: {product.ram}</p>}
                          {product.os && <p>OS: {product.os}</p>}
                          {product.type && <p>Type: {product.type}</p>}
                          {product.price && (
                            <p className={styles.price}>
                              &#8358;
                              {product.price
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  </motion.li>
                </AnimatePresence>
              );
            })
          ) : (
            <p className={styles.dialogue}>{dialogue}</p>
          )}
        </ul>
          </div>
  );
};

export default SearchResult;
