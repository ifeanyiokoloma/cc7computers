import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul>
          <h3>Shop</h3>
          <li>
            <Link to="/computers">Computers</Link>
          </li>
          <li>
            <a href="/accessories">Accessories</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
        </ul>
        <ul>
          <h3>Company</h3>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/employees">Meet Our Engineers</a>
          </li>
        </ul>
        <hr />
      </div>
      <small>Copyright © 2022</small>
    </footer>
  );
};

export default Footer;
