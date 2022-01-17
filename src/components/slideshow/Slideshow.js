import styles from "./slideshow.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import useAdvancedFetch from "../../hooks/useAdvancedFetch";
import { Paper, Skeleton } from "@mui/material";

const Slideshow = () => {
  const [computers] = useAdvancedFetch("products", "computer", "timestamp", 5, []);
  return (
    <div className={styles.container}>
      <Paper sx={{ padding: "1rem", bgcolor: "#2e2fe3", color: "white", borderRadius: 0 }} elevation={2}>
        <h3>Just Arrived: Computers</h3>
      </Paper>
      {computers.length > 0 ? (
        <Splide
          options={{
            rewind: true,
            autoplay: true,
            width: "100%",
            gap: "1rem",
            height: "50vh",
            pauseOnHover: true,
            speed: 2000,
            interval: 4000,
            keyboard: true,
            type: "slide",
            rewindSpeed: 2000,
            pagination: true,
            arrows: true,
            easing: "ease",
          }}
          hasSliderWrapper
        >
          {computers.map((computer) => (
            <SplideSlide className={styles.imageContainer} key={computer.id}>
              <img
                className={styles.image}
                src={computer.imgSrc}
                alt={computer.brand}
              />
              <div
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = 1;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = 0;
                }}
                className={styles.text}
              >
                <h3>{computer.brand}</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div className={styles.btns}>
                  <button className={styles.wishlist}>wishlist</button>
                  <button className={styles.add2cart}>
                    &#8358;{computer.price}
                  </button>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <Skeleton
          sx={{ bgcolor: "black", borderRadius: "5px" }}
          variant="rectangular"
          width="100%"
          height="80vh"
        />
      )}
    </div>
  );
};

export default Slideshow;
