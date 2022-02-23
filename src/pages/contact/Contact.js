import Hero from "../../components/hero/Hero";
import { contact } from "../../data/articles/articles";
import styles from "./contact.module.css";
import Feedback from "../../components/feedback/Feedback";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <Hero page="contact" imgName="contact" pageData={contact} />
      <section className={styles.container}>
        <address className="paper">
          <header>
            <FiPhoneCall size="2rem" style={{ marginBottom: "1rem" }} />
            <h4>Call Us</h4>
            <p>Pick up the phone and speak to one of our representative.</p>
          </header>
          <a href="tel:+2347037680735">+2347037680735</a>
          <a href="tel:+2347036389506">+2347036389506</a>
        </address>
        <section className="paper">
          <Feedback />
        </section>
      </section>
    </>
  );
};

export default Contact;
