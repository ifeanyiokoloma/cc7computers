import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/app";

const useAdvancedFetch = (dir, productType, amount, initialValue) => {
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    let unSubcribe, q;

    if (amount && productType) {
      q = query(
        collection(db, dir),
        where("type", "==", productType),
        orderBy("timestamp", "desc"),
        limit(amount)
      );
    } else if (productType && !amount) {
      q = query(
        collection(db, dir),
        where("type", "==", productType),
        orderBy("timestamp", "desc")
      );
    } else if (amount && !productType) {
      q = query(
        collection(db, dir),
        orderBy("timestamp", "desc"),
        limit(amount)
      );
    } else {
      q = query(collection(db, dir), orderBy("timestamp", "desc"));
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
    // eslint-disable-next-line
  }, []);

  return [data];
};

export default useAdvancedFetch;
