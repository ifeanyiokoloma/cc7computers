import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/FirebaseApp";

const useFetchLive = (dir, initialValue) => {
  const [data, setData] = useState(initialValue);

  let unSubcribe;

  useEffect(() => {
    const q = query(collection(db, dir));
    unSubcribe = onSnapshot(q, (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => {
        return { ...doc.data() };
      });
      setData((item) => (item = [...newData]));
    });
    return () => {
      unSubcribe()
    }
    
  }, []);

  return [data];
};

export default useFetchLive;