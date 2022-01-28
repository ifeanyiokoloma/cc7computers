import React from "react";
import Slideshow from "../../components/slideshow/Slideshow";
import Hero from "../../components/hero/Hero";
import styles from "./home.module.css";
import Accessories from "../products/Accessories";
import { home } from "../../data/articles/articles";

const Home = () => {
  return (
    <main className={styles.container}>
      <Hero page="home" pageData={home} imgName="operator" />
      <Slideshow
        itemType="computer"
        dir="products"
        order="timestamp"
        limit={5}
        header="New Computers"
      />
      <Accessories limit={5} header="New Accessories" />
    </main>
  );
};

export default Home;
