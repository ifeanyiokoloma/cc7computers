import cc7Logo from "../../data/images/cc7.jpg";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import useAuth from "../../hooks/useAuth";
import LoginBtn from "../login/LoginBtn";

const Footer = () => {
  const [isSignedIn, user] = useAuth()
  return (
    <footer className={styles.footer}>
      {isSignedIn ? <div className="mb-3"><p>Signed as {user.displayName}</p><LoginBtn className="d-inline" /></div>: <Link to="/login">Login</Link>}
      <div className={styles.container}>
        <div  className={styles.logoContainer}>
          <Link to="/"><img className={styles.logo} src={cc7Logo} alt="CC7 Computers Logo" /></Link>
          <strong>Giving life<br />and power<br />to computing...</strong>
        </div>

        <ul>
          <h3>Business</h3>
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
            <a href="/employees">Meet Our Team</a>
          </li>
        </ul>
      </div>
      <hr />
      <div className={styles.copyright}>
        <p>
          <small>Copyright © 2022 <strong>CC7 Computers</strong></small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
