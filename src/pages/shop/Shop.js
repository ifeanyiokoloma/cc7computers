import styles from "./shop.module.css";
import Computers from "../products/Computers";
import Accessories from "../products/Accessories";
import PropTypes from "prop-types";
import { Paper } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
// import HamburgerIcon from "../../components/HamburgerIcon";

const Shop = () => {
  return (
    <div className={styles.container}>
      <Paper elevation={2} className={styles.header}>
        <div className={styles.headerContent}>
          <h1>Shop</h1>
          <nav className={styles.nav}>
            <NavLink to="#computers">computers</NavLink>
            <NavLink to="#accessories">accessories</NavLink>
          </nav>
        </div>
      </Paper>
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
