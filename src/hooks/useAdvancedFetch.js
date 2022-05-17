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

const useAdvancedFetch = (
  dir,
  productType,
  order,
  from,
  amount,
  initialValue
) => {
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    let unSubcribe, q;

    if (productType && order && from && amount) {
      q = query(
        collection(db, dir),
        where("type", "==", productType),
        orderBy(order, from),
        limit(amount)
      );
    }
    if (!productType && !order && !from && !amount) {
      q = query(collection(db, dir));
    }
    if (!productType) {
      q = query(collection(db, dir), orderBy(order, from), limit(amount));
    }
    if (!from) {
      q = query(
        collection(db, dir),
        where("type", "==", productType),
        orderBy(order),
        limit(amount)
      );
    }
    if (!amount && !from) {
      q = query(
        collection(db, dir),
        where("type", "==", productType),
        orderBy(order)
      );
    }
    if (!amount) {
      q = query(
        collection(db, dir),
        where("type", "==", productType),
        orderBy(order, from)
      );
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
