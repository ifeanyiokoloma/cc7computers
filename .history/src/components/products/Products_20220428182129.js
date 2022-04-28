import styles from "./products.module.css";
import PropTypes from "prop-types";
import useAdvancedFetch from "../../hooks/useAdvancedFetch";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import {
  collection,
  endBefore,
  limit,
  onSnapshot,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/app";
import AnimateComponents from "../AnimateComponents";
import Button from "../button/Button";
import SingleProduct from "./singleProduct/SingleProduct";
import ProductsSkeleton from "../skeletons/productSkeleton/ProductsSkeleton";
const Products = ({ productName, productType, order, extent }) => {
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();
  const [gridState, setGridState] = useState("");
  const [lastNext, setLastNext] = useState(false);
  const [lastPrev, setLastPrev] = useState(false);
  const [products, setData] = useState([]);

  const [overAllProducts] = useAdvancedFetch(
    "products",
    productType,
    order,
    extent,
    []
  );

  useEffect(() => {
    let unSubcribe, q;

    switch (gridState) {
      case "next":
        q = query(
          collection(db, "products"),
          where("type", "==", productType),
          orderBy("timestamp", "desc"),
          limit(extent),
          startAfter(next)
        );
        break;
      case "prev":
        q = query(
          collection(db, "products"),
          where("type", "==", productType),
          orderBy("timestamp", "desc"),
          limit(extent),
          endBefore(prev)
        );
        break;

      default:
        q = query(
          collection(db, "products"),
          where("type", "==", productType),
          orderBy("timestamp", "desc"),
          limit(6)
        );
        break;
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
  }, [gridState]);

  const handleNextGrid = () => {
    const lastOverAllProduct = overAllProducts[overAllProducts.length - 1];
    const lastProduct = products[products.length - 1];

    console.log("overall:", lastOverAllProduct.timestamp);
    console.log("one:", lastProduct.timestamp);
    if (lastProduct.timestamp !== lastOverAllProduct.timestamp) {
      setLastPrev(false);
      setGridState("next");
      setNext(lastProduct.timestamp);
    }
    if (lastProduct.timestamp === lastOverAllProduct.timestamp) {
      setLastNext(true);
    } else {
      setLastNext(false);
    }
  };

  function handlePrevGrid() {
    const firstOverAllProduct = overAllProducts[0];
    const firstProduct = products[0];

    console.log("overall:", firstOverAllProduct.timestamp);
    console.log("one:", firstProduct.timestamp);
    if (firstProduct.timestamp !== firstOverAllProduct.timestamp) {
      setLastNext(false);
      setGridState("prev");
      setPrev(products[0].timestamp);
    }
    if (firstProduct.timestamp === firstOverAllProduct.timestamp) {
      setLastPrev(true);
    } else {
      setLastPrev(false);
    }
  }

  return (
    <AnimateComponents>
      <section className={styles.container}>
        <Header element="h2" title={productName} className={styles.header} />

        <div className={styles.grid}>
          {products.length > 0 ? (
            products.map((product) => <SingleProduct product={product} />)
          ) : (
            <ProductsSkeleton />
          )}
        </div>
        <div className={styles.btns}>
          <Button
            disabled={lastPrev && true}
            btnColor="var(--pri-color)"
            onClick={handlePrevGrid}
          >
            Prev
          </Button>

          <Button
            disabled={lastNext ? true : null}
            btnColor="var(--pri-color)"
            onClick={handleNextGrid}
          >
            Next
          </Button>
        </div>
      </section>
    </AnimateComponents>
  );
};

Products.propTypes = {
  // dir: PropTypes.string,
  products: PropTypes.string,
  productType: PropTypes.string,
  order: PropTypes.string,
  extent: PropTypes.number,
  productName: PropTypes.string,
};

Products.defaultProps = {
  dir: "products",
  products: "computers",
  productType: "computer",
  extent: 6,
  productName: "computers",
};

export default Products;
