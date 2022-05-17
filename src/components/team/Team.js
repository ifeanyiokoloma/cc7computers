import React, { useState, useEffect } from "react";
import { Splide } from "@splidejs/react-splide";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase/app";
import styles from "./team.module.css";
import "@splidejs/splide/dist/css/splide.min.css";
import Person from "./person/Person";

const Team = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    let unSubcribe, q;
    q = query(collection(db, "employees"), orderBy("rank"));

    unSubcribe = onSnapshot(q, (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => {
        return { ...doc.data() };
      });
      setTeam((item) => (item = [...newData]));
    });
    return () => {
      unSubcribe();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Splide
      className={styles.imageBox}
      options={{ autoplay: true, speed: 1000, interval: 6000, rewind: true, type: "loop", keyboard: true, easing: "ease"}}
    >
      {team.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </Splide>
  );
};

export default Team;
