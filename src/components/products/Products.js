import React from "react";
import PropTypes from "prop-types";
import useAdvancedFetch from "../../hooks/useAdvancedFetch";
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
import SingleProduct from "./SingleProduct";
import ProductsSkeleton from "./ProductsSkeleton";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";

const Products = ({
  productName,
  productType,
  extent,
  link,
  linkName,
  key,
}) => {
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();
  const [gridState, setGridState] = useState("");
  const [lastNext, setLastNext] = useState(false);
  const [lastPrev, setLastPrev] = useState(false);
  const [products, setData] = useState([]);

  const [overAllProducts] = useAdvancedFetch(
    "products",
    productType,
    "timestamp",
    "asc",
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
          orderBy("timestamp"),
          limit(extent),
          startAfter(next)
        );
        break;
      case "prev":
        q = query(
          collection(db, "products"),
          where("type", "==", productType),
          orderBy("timestamp"),
          limit(extent),
          endBefore(prev)
        );
        break;

      default:
        q = query(
          collection(db, "products"),
          where("type", "==", productType),
          orderBy("timestamp"),
          limit(extent)
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
    <Container maxWidth="lg">
      <Box component="section" py={2}>
        <Typography component="h1" variant="h4" textTransform="uppercase">
          {productName}
        </Typography>
        <Grid container spacing={2} py={2}>
          {products.length > 0 ? (
            products.map((product) => <SingleProduct product={product} />)
          ) : (
            <ProductsSkeleton />
          )}
          {link && (
            <Grid item xs sm md lg xl>
              <Card>
                <CardActionArea>
                  <Link to={link}>
                    <CardContent
                      sx={{
                        height: 290,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h6" component="p">
                        See More {linkName}
                      </Typography>
                      <AiOutlinePlus />
                    </CardContent>
                  </Link>
                </CardActionArea>
              </Card>
            </Grid>
          )}
        </Grid>
        {!link && (
          <Stack justifyContent="center" direction="row" spacing={2}>
            <Button
              disabled={lastPrev && true}
              variant="contained"
              onClick={handlePrevGrid}
              startIcon={<ArrowBackIos />}
            >
              Prev
            </Button>

            <Button
              disabled={lastNext ? true : null}
              variant="contained"
              onClick={handleNextGrid}
              endIcon={<ArrowForwardIos />}
            >
              Next
            </Button>
          </Stack>
        )}
      </Box>
    </Container>
  );
};

Products.propTypes = {
  products: PropTypes.string,
  productType: PropTypes.string,
  order: PropTypes.string,
  extent: PropTypes.number,
  productName: PropTypes.string,
  link: PropTypes.string,
  linkName: PropTypes.string,
};

Products.defaultProps = {
  dir: "products",
  products: "computers",
  productType: "computer",
  extent: 8,
  productName: "computers",
};

export default Products;
