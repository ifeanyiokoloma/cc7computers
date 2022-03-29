import styles from "./skills.module.css";
import Header from "../../components/Header";
import Img from "react-cool-img";

const Skills = () => {
  return (
    <section className={styles.skills}>
      <Header
        title="Computer Trainning"
        element="h3"
        className={styles.header}
      />
      <p className="text-center">We offer these courses:</p>
      <section>
        <Header
          className={styles.header}
          title="Ic3 Digital Literacy"
          title2="Digital Literacy (Office Centric)"
          element="h4"
          element2="h6"
        />

        <Img
          className={styles.image}
          src="/images/skills/ic3.png"
          alt="ic3 logo"
        />
        <ul className={styles.list}>
          <li>Core Computer Basics</li>
          <li>Software Technologies</li>
          <li>Office Application Softwares</li>
          <li>Calculation Softwares and Living online</li>
        </ul>
      </section>

      <section>
        <Header
          className={styles.header}
          title="Comptia A+"
          title2="Computer Technician (Windows Centric)"
          element="h4"
          element2="h6"
        />
        <Img
          className={styles.image}
          src="/images/skills/a+.png"
          alt="comptia a+ logo"
        />
        <ul className={styles.list}>
          <li>Computer Peripherals</li>
          <li>Desktop Engineering</li>
          <li>Laptop Engineering</li>
          <li>Software Installation</li>
          <li>Software Upgrading</li>
          <li>Network Maintenance</li>
        </ul>
      </section>
      <section>
        <Header
          className={styles.header}
          title="Comptia N+"
          title2="Network Technician (Cisco Centric)"
          element="h4"
          element2="h6"
        />

        <Img
          className={styles.image}
          src="/images/skills/n+.png"
          alt="comptia n+ logo"
        />
        <ul className={styles.list}>
          <li>Introduction to Network, Networking, Routing and Switching</li>
          <li>Wireless/Wired Networking</li>
          <li>IP Addressing</li>
          <li>IP Subnetting</li>
          <li>Cyber Security and Authentication</li>
          <li>Networking Hardwares etc</li>
        </ul>
      </section>

      <section>
        <Header
          className={styles.header}
          title="Website Development"
          title2="Frontend Development"
          element="h4"
          element2="h6"
        />

        <Img
          className={styles.image}
          src="/images/skills/frontend.png"
          alt="comptia n+ logo"
        />
        <ul className={styles.list}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>React JS</li>
        </ul>
      </section>
    </section>
  );
};

export default Skills;
