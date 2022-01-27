import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/FirebaseApp";

const useFetchOnce = (path, []) => {
  const [data, setData] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(async () => {
    const snapshot = await getDocs(collection(db, path));
    if (snapshot.empty) {
      return setIsEmpty(true)
    }
    const newData = snapshot.docs.map((doc) => {
      return { ...doc.data() };
    });
    setData((item) => {
      return (item = [...newData]);
    });
  }, []);

  return [data, isEmpty];
};

export default useFetchOnce;
