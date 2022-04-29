import styles from "./slideshow.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import useAdvancedFetch from "../../hooks/useAdvancedFetch";
import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../Header";
import Img from "react-cool-img";
import ProductDesc from "../ProductDesc.js/ProductDesc";
import { useInView } from "react-intersection-observer";

const Slideshow = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [computers] = useAdvancedFetch("products", "computer", 5, []);
  return (
    <section
      ref={ref}
      style={{ opacity: inView ? 1 : 0, transition: "1s ease-in-out" }}
      className={styles.container}
    >
      <Header
        element="h2"
        title="New Computers"
        textAlign="center"
        className={styles.header}
      />
      <section className={styles.slideContainer}>
        <Splide
          options={{
            mediaQuery: "max",
            rewind: true,
            autoplay: true,
            width: "100%",
            gap: "1rem",
            height: "85vh",
            pauseOnHover: true,
            speed: 1000,
            interval: 6000,
            keyboard: true,
            rewindSpeed: 2000,
            pagination: true,
            arrows: true,
            easing: "ease",
            type: "loop",
            padding: "auto",
          }}
        >
          {computers.length > 0 ? (
            computers.map((computer) => {
              const computerID = `${computer.brand} ${computer.model}`;
              return (
                <SplideSlide key={computer.id}>
                  <Link
                    style={{
                      display: "flex",
                      flexFlow: "column",
                      height: "100%",
                      cursor: "pointer",
                      position: "relative",
                    }}
                    to={`/${computer.type}/${computer.id}`}
                  >
                    <div className={styles.imageContainer}>
                      <Img
                        style={{
                          backgroundColor: "grey",
                        }}
                        className={styles.image}
                        src={computer.imgSrc}
                        alt={computerID}
                      />
                    </div>
                    <ProductDesc
                      className={styles.productDesc}
                      title={computerID}
                      productPrice={computer.price}
                    />
                  </Link>
                </SplideSlide>
              );
            })
          ) : (
            <SplideSlide>
              <Skeleton variant="rectangular" width="100%" height="100vh" />
            </SplideSlide>
          )}
        </Splide>
      </section>
    </section>
  );
};

export default Slideshow;
