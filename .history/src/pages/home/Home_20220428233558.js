import React from "react";
import Slideshow from "../../components/slideshow/Slideshow";
import Hero from "../../components/hero/Hero";
import styles from "./home.module.css";
import Accessories from "../products/Accessories";
import { home } from "../../data/articles/articles";
import Computers from "../products/Computers";

const Home = () => {
  return (
    <main className={styles.container}>
      <Hero page="home" pageData={home} imgName="operator" />
      <Slideshow />
      <Accessories
        limit={5}
        header="Accessories"
        link="accessories"
        linkName="Accessories"
        extent={5}
      />
      <Computers
        limit={5}
        header="Computers"
        link="computers"
        linkName="Computers"
        extent={5}
      />
    </main>
  );
};

export default Home;
