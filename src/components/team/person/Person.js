import React from 'react'
import { SplideSlide } from "@splidejs/react-splide";
import Img from "react-cool-img";
import styles from "./person.module.css";

const Person = ({person}) => {
  return (
    <SplideSlide className={styles.imageFrame}>
      <Img className={styles.image} src={person.imgSrc} alt={person.names} />
      <section className={styles.desc}>
      <h3 >{person.names}</h3>
      <p>{person.job}</p>
      </section>
    </SplideSlide>
  );
}

export default Person