import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/FirebaseApp";

const useAdvancedFetch = (dir, productType, order, reach, initialValue) => {
  const [data, setData] = useState(initialValue);

  let unSubcribe;

  useEffect(() => {
    let q;
    if (reach && productType) {
      console.info("rc && pt");
      q = query(
        collection(db, dir),
        where("type", "==", productType),
        orderBy(order),
        limit(reach)
      );
    } else if (productType && !reach) {
      console.info("pt");
      q = query(
        collection(db, dir),
        where("type", "==", productType),
        orderBy(order)
      );
    } else if (reach && !productType) {
      console.info("rc");
      q = query(collection(db, dir), orderBy(order), limit(reach));
    } else {
      console.info("none");
      q = query(collection(db, dir), orderBy(order));
    }
    unSubcribe = onSnapshot(q, (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => {
        return { ...doc.data() };
      });
      setData((item) => (item = [...newData]));
    });
    return () => {
      unSubcribe();
    };
  }, []);

  return [data];
};

export default useAdvancedFetch;
