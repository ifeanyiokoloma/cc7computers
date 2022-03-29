import styles from "./shop.module.css";
import Computers from "../products/Computers";
import Accessories from "../products/Accessories";
import PropTypes from "prop-types";

const Shop = () => {
  return (
    <div className={styles.container}>
      <div id="#computers">
        <Computers />
      </div>
      <div id="#accessories">
        <Accessories />
      </div>
    </div>
  );
};

Shop.propTypes = {
  computers: PropTypes.array,
};

export default Shop;
