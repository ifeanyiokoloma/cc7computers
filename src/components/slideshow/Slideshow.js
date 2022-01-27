import styles from "./slideshow.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import useAdvancedFetch from "../../hooks/useAdvancedFetch";
import { Paper, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";

const Slideshow = ({ itemType, dir, order, limit, header }) => {
  const [items] = useAdvancedFetch(dir, itemType, order, limit, []);
  return (
    <section className={styles.container}>
      <h3 style={{ textAlign: "center" }}>{header}</h3>
      {items.length > 0 ? (
        <div className={styles.center}>
          <Splide
            options={{
              mediaQuery: "max",
              breakpoints: {
                500: {
                  height: "100%",
                },
              },
              rewind: true,
              autoplay: true,
              width: "100%",
              gap: "1rem",
              height: "80vh",
              pauseOnHover: true,
              speed: 2000,
              interval: 6000,
              keyboard: true,
              type: "slide",
              rewindSpeed: 2000,
              pagination: true,
              arrows: true,
              easing: "ease",
            }}
            hasSliderWrapper
          >
            {items.map((item) => (
              <SplideSlide key={item.id}>
                  <Link
                    style={{
                      display: "flex",
                      flexFlow: "column",
                      height: "100%",
                      cursor: "pointer",
                    }}
                    className="paper"
                    to={`/shop/${item.type}/${item.id}`}
                  >
                    <div className={styles.imageContainer}>
                      <img className={styles.image} src={item.imgSrc} alt="" />
                    </div>
                    <section
                      style={{ borderRadius: 0 }}
                      className={styles.text}
                    >
                      {item.brand && item.brand && (
                        <h6 className="text-uppercase">
                          {item.brand} {item.model}
                        </h6>
                      )}
                      {item.name && <p>{item.name}</p>}
                      {item.price && (
                        <p className={styles.price}>
                          &#8358;
                          {item.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </p>
                      )}
                      {item.names && <h5>{item.names}</h5>}
                      {item.job && (
                        <p>
                          <span className={styles.prop}>Job Title: </span>
                          {item.job}
                        </p>
                      )}
                      {item.skills && (
                        <p>
                          <span className={styles.prop}>Skills: </span>
                          {item.skills}
                        </p>
                      )}
                    </section>
                  </Link>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      ) : (
        <Skeleton
          sx={{ bgcolor: "black" }}
          variant="rectangular"
          width="100%"
          height="80vh"
        />
      )}
    </section>
  );
};

export default Slideshow;
