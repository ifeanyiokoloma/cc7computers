import useLocalStorage from "use-local-storage";
import { useParams } from "react-router-dom";
import useFetchLive from "../../hooks/useFetchLive";
import Img from "react-cool-img";
import { ShoppingCartContext } from "../../components/context/contexts";
import React, { useContext } from "react";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { auth, db } from "../../firebase/app";
import useAuth from "../../hooks/useAuth";
import { Filter } from "../../components/Functions/Functions";
import { Container } from "@mui/system";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { DescPaper, PhotoFrame, PriceTag, ProductTitle } from "./StyledProduct";
import Price from "../../components/Price";
import { useSnackbar } from "notistack";
import ProductSkeleton from "./ProductSkeleton";
import { StyledBox } from "../../components/Styled/Styled";

const Product = () => {
  const [browserCart, setBrowserCart] = useLocalStorage("cart", []);
  const { signIn } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const [products] = useFetchLive("products", []);
  const { productID } = useParams();
  const { openCart } = useContext(ShoppingCartContext);

  const addToCart = () => {
    if (signIn) {
      const cartRef = doc(db, "customers", auth.currentUser.uid);
      updateDoc(cartRef, {
        cart: arrayUnion(productID),
      })
        .then(() =>
          enqueueSnackbar("Product has been added to your cart", {
            variant: "success",
          })
        )
        .catch((err) => console.log(err.code));
    } else {
      if (browserCart.includes(productID)) {
        return null;
      }
      setBrowserCart([...browserCart, productID]);
    }
  };

  const payNow = () => {
    addToCart();
    openCart();
  };

  const handleAddToCart = () => {
    addToCart();
  };

  return (
    <StyledBox pb={2}>
      <Container>
        {products.length > 0 ? (
          Filter(products, productID).map((product) => {
            const productTitle = `${product && product.brand} ${product.model}`;
            return (
              <Grid container spacing={2} key={product.id}>
                <Grid item sm={12}>
                  <ProductTitle
                    sx={{ mt: "1rem" }}
                    textAlign="center"
                    component="h1"
                    variant="h4"
                  >
                    {productTitle}
                  </ProductTitle>
                </Grid>
                <Grid sm={6} item>
                  <PhotoFrame>
                    <Img
                      src={product.imgSrc}
                      alt={`${product.brand} ${product.model}`}
                    />
                  </PhotoFrame>
                </Grid>
                <Grid sm={6} item>
                  <DescPaper>
                    <Typography
                      color="GrayText"
                      textAlign="center"
                      component="h2"
                      variant="h6"
                    >
                      Product Description
                    </Typography>
                    <List spacing={2}>
                      {product.processor && (
                        <ListItem>
                          <ListItemText
                            secondary="Processor"
                            primary={product.processor}
                          />
                        </ListItem>
                      )}
                      {product.ram && product.ram && (
                        <ListItem>
                          <ListItemText secondary="RAM" primary={product.ram} />
                        </ListItem>
                      )}
                      {product.storage && (
                        <ListItem>
                          <ListItemText
                            secondary="Storage"
                            primary={product.storage}
                          />
                        </ListItem>
                      )}
                      {product.graphics && (
                        <ListItem>
                          <ListItemText
                            secondary="Graphics"
                            primary={product.graphics}
                          />
                        </ListItem>
                      )}
                      {product.os && (
                        <ListItem>
                          <ListItemText
                            secondary="Operating System"
                            primary={product.os}
                          />
                        </ListItem>
                      )}
                    </List>
                    <PriceTag>
                      <Price amount={product.price} />
                    </PriceTag>
                    <Stack
                      direction="row"
                      justifyContent="space-evenly"
                      spacing={2}
                      mt={4}
                    >
                      <Button
                        onClick={payNow}
                        variant="contained"
                        color="primary"
                      >
                        Pay Now
                      </Button>
                      <Button
                        onClick={handleAddToCart}
                        variant="contained"
                        color="secondary"
                      >
                        Add to Cart
                      </Button>
                    </Stack>
                  </DescPaper>
                </Grid>
              </Grid>
            );
          })
        ) : (
          <ProductSkeleton />
        )}
      </Container>
    </StyledBox>
  );
};

export default Product;
