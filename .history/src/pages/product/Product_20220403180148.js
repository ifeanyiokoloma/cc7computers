// import { localStorage } from "es-storage";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import useFetchLive from "../../hooks/useFetchLive";
import styles from "./product.module.css";
import Button from "../../components/button/Button";
import Paper from "../../components/paper/Paper";
import PhotoFrame from "../../components/PhotoFrame";
import Img from "react-cool-img";
import {
  ModalContext,
  ShoppingCartContext,
} from "../../components/context/contexts";
import { useContext } from "react";
import AnimateComponents from "../../components/AnimateComponents";
import Skeleton from "@mui/material/Skeleton";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/app";

const Product = () => {
  // const [isAddedToCart, setIsAddedToCart] = useState(
  //   localStorage.get("isAddedToCart") || false
  // );

  const [products] = useFetchLive("products", []);
  const { productID } = useParams();
  const { handleShowCart } = useContext(ShoppingCartContext);
  const { handleShowInfo } = useContext(ModalContext);

  const filteredProduct = products.filter(
    (product) => product.id === productID
  );

  const addToCart = () => {
    const addToUserCart = async (item, itemID) => {
      const userIdRef = doc(db, auth.currentUser.uid, itemID);
      await setDoc(userIdRef, item)
        .then(() => handleShowInfo())
        .catch((err) => console.log(err.code));
    };
    filteredProduct.map((product) => {
      return addToUserCart(product, product.id);
    });
    // setIsAddedToCart(true);
    // localStorage.setObject("cart", cart);
    // localStorage.set("isAddedToCart", true);
  };

  const handlePayNow = () => {
    addToCart();
    handleShowCart();
  };

  const handleAddToCart = () => {
    addToCart();
  };

  return (
    <AnimateComponents>
      <section className={styles.container}>
        {filteredProduct.length > 0 ? (
          filteredProduct.map((product) => {
            const productTitle = `${product && product.brand} ${product.model}`;
            return (
              <>
                <Header
                  element="h1"
                  title={productTitle}
                  className={styles.header}
                  key={product.id}
                />
                <div className={styles.content}>
                  <PhotoFrame className={styles.imageFrame}>
                    <Img
                      src={product.imgSrc}
                      alt={`${product.brand} ${product.model}`}
                    />
                  </PhotoFrame>
                  <div>
                    <Paper className={styles.descContainer}>
                      <Header
                        element="h4"
                        title="Product Description"
                        className={styles.descHeader}
                      />
                      <div className={styles.desc}>
                        {product.processor && (
                          <p>
                            <span>Processor:</span> {product.processor}
                          </p>
                        )}
                        {product.ram && product.ram && (
                          <p>
                            <span>RAM:</span> {product.ram}
                          </p>
                        )}
                        {product.storage && (
                          <p>
                            <span>storage:</span> {product.storage}
                          </p>
                        )}
                        {product.graphics && (
                          <p>
                            <span>graphics</span>: {product.graphics}
                          </p>
                        )}
                        {product.os && (
                          <p>
                            <span>operating system:</span> {product.os}
                          </p>
                        )}
                      </div>
                      <div className={styles.priceTag}>
                        &#8358;
                        {product.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </div>
                    </Paper>
                    <div className={styles.btns}>
                      <Button
                        btnColor="var(--pri-color)"
                        onClick={handlePayNow}
                      >
                        Pay Now
                      </Button>
                      <Button
                        btnColor={"var(--green-white)"}
                        onClick={handleAddToCart}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Skeleton
                variant="text"
                animation="wave"
                width="40%"
                height={44.83}
              />
            </div>

            <div className={styles.content}>
              <PhotoFrame>
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  className={styles.imageFrame}
                  width={464}
                  height="80vh"
                />
              </PhotoFrame>
              <div>
                <Paper className={styles.descContainer}>
                  <Skeleton
                    variant="text"
                    animation="wave"
                    className={styles.header}
                    width="100%"
                    height={28.16}
                  />

                  <div className={styles.desc}>
                    <p>
                      <Skeleton
                        variant="text"
                        animation="wave"
                        width="100%"
                        height={22}
                      />
                    </p>

                    <p>
                      <Skeleton
                        variant="text"
                        animation="wave"
                        width="100%"
                        height={22}
                      />
                    </p>
                    <p>
                      <Skeleton
                        variant="text"
                        animation="wave"
                        width="100%"
                        height={22}
                      />
                    </p>
                    <p>
                      <Skeleton
                        variant="text"
                        animation="wave"
                        width="100%"
                        height={22}
                      />
                    </p>
                    <p>
                      <Skeleton
                        variant="text"
                        animation="wave"
                        width="100%"
                        height={22}
                      />
                    </p>
                  </div>
                  <div className={styles.priceTag}>
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width={100}
                      height={33}
                    />
                  </div>
                </Paper>
                <div className={styles.btns}>
                  <Skeleton
                    variant="text"
                    animation="wave"
                    width={137.95}
                    height={40}
                  />
                  <Skeleton
                    variant="text"
                    animation="wave"
                    width={137.95}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </AnimateComponents>
  );
};

export default Product;
