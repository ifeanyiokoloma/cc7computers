import React from "react";
import styles from "./navbar.module.css";
import { FiPhoneCall } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { useRef, useEffect, useState } from "react";

const Navbar = () => {
  const signUpRef = useRef(null);
  let [scrollNumber, setScrollNumber] = useState(0);

  useEffect(() => {
    (() => {
      const element = signUpRef.current;
      element.scrollLeft = 1;
      element.scrollLeft = 0;
    })();
  }, []);

  const handleScroll = e => {
    // Variables and constants
    //let scrollRightID, delayScroll;
    const element = e.target;
    const scrollMax = element.scrollLeftMax || 124;
    // Variables and constants

    // console.log();
    // Functions
    const scrollRight = () => {
      setScrollNumber(() => {
        if (scrollNumber < scrollMax) {
          scrollNumber++;
        } else if (scrollNumber === scrollMax) {
          // delayScroll =
          setTimeout(() => {
            setScrollNumber(() => {
              scrollNumber = 0;
            });
          }, 500);
        }
      });
    };
    // Functions

    switch (scrollNumber) {
      case 0:
        // scrollRightID =
        setInterval(() => {
          scrollRight();
          element.scroll(scrollNumber, 0);
        }, 100);
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.extraNav}>
          <ul className={styles.register}>
            <li className={styles.signIn}>sign in</li>
            <li
              onScroll={(e) => {
                handleScroll(e);
              }}
              ref={signUpRef}
              className={styles.signUp}
            >
              become our customer now
            </li>
          </ul>

          <div className={styles.tel}>
            <span>
              <FiPhoneCall />
            </span>
            <a
              className={styles.telNumber}
              title="Click to call us"
              href="tel:+2349057609004"
            >
              +234-905-760-9004
            </a>
          </div>
        </div>

        <div className={styles.mainNav}>
          <div className={styles.logoContainer}>
          <span className={styles.logo}>
            <span className={styles.cc7}>CC7</span>
            <br />
            <span className={styles.computers}>Computers</span>
          </span>
          </div>

            <ul className={styles.nav}>
              <li>home</li>
              <li>contact</li>
              <li>about</li>
              <li>blogs</li>
            </ul>

          <span className={styles.shoppingCart}>
            <BsCart3 />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
