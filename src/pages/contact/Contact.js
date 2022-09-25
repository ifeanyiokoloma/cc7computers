import React from "react";
import Hero from "../../components/hero/Hero";
import { contact } from "../../data/articles/articles";
import styles from "./contact.module.css";
import Feedback from "../../components/feedback/Feedback";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const Contact = () => {
  return (
    <>
      <Hero page="contact" imgName="contact" pageData={contact} />
      <section className={styles.container}>
        <address className="align-item-center">
          <section>
            <div className="d-flex">
              <FiPhoneCall
                className="me-4"
                size="2rem"
                style={{ marginBottom: "1rem" }}
              />
              <h4>Call Us On:</h4>
            </div>
            <a className="text-white ms-5" href="tel:+2347037680735">
              +2347037680735
            </a>
            <a className="text-white ms-5" href="tel:+2347036389506">
              +2347036389506
            </a>
          </section>

          <section>
            <div className="d-flex">
              <HiOutlineOfficeBuilding
                className="me-4"
                size="2rem"
                style={{ marginBottom: "1rem" }}
              />
              <h4>Locate Us At:</h4>
            </div>

            <p>
              Our Head Office: 142 Zik's Avenue, First Floor, Opposite Market 3,
              Eke Awka, Awka, Anambra State
            </p>
          </section>
          <Feedback />
        </address>
      </section>
    </>
  );
};

export default Contact;
