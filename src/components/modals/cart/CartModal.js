import { useContext, useState } from "react";
import { ModalContext, ShoppingCartContext } from "../../context/contexts";
import SingleCartItem from "./SingleCartItem";
import styles from "./cart.module.css";
import { AiFillShopping } from "react-icons/ai";
import PaystackBtn from "../../payment/PaystackBtn";
import Price from "../../Price";
import useAuth from "../../../hooks/useAuth";
import React from "react";
import {
  Dialog,
  IconButton,
  Box,
  Toolbar,
  Typography,
  List,
  Grid,
  Button,
  Stack,
  Paper,
  Container,
  SvgIcon,
} from "@mui/material";
import { Filter, sum, Transition } from "../../Functions/Functions";
import { Close, Palette } from "@mui/icons-material";
import { StyledNavbar } from "../../navbar/StyledNavbar";
import useFetchLive from "../../../hooks/useFetchLive";
import useLocalStorage from "use-local-storage";
import { v4 as uuidv4 } from "uuid";
import { usePaystackPayment } from "react-paystack";
import { useEffect } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../../firebase/app";
import { DescPaper } from "../../../pages/product/StyledProduct";
import { StyledPaper } from "./StyledCart";
import { PaystackIcon } from "./PaystackIcon";

const CartModal = () => {
  const [CartProducts, setCartProducts] = useState([]);
  const { signIn, user, loading } = useAuth();

  const [products] = useFetchLive("products", []);

  const { cart, closeCart, userCart, browserCart } = useContext(
    ShoppingCartContext
  );
  const { openSignUp } = useContext(ModalContext);

  let currentCart = signIn ? userCart : browserCart;

  const cartProducts = products.filter((p) => currentCart.includes(p.id));

  const total = sum(cartProducts);

  const config = {
    reference: uuidv4(),
    email: user.email,
    amount: `${total}00`,
    publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
  };

  const initializePayment = usePaystackPayment(config);

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  return (
    <Dialog
      fullScreen
      open={cart}
      onClose={closeCart}
      TransitionComponent={Transition}
      components="section"
    >
      <StyledNavbar>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            edge="start"
            color="primary"
            aria-label="shopping cart icon"
          >
            <AiFillShopping size="2rem" />
          </IconButton>
          <Typography color="primary" variant="h6" component="h2">
            Shopping Cart
          </Typography>
          <IconButton
            edge="end"
            color="primary"
            onClick={closeCart}
            aria-label="close"
          >
            <Close fontSize="large" />
          </IconButton>
        </Toolbar>
      </StyledNavbar>
      <Container maxWidth="md">
        <Box sx={{ height: "100%", mt: "4rem" }}>
          {loading ? (
            <Typography variant="h1">Loading</Typography>
          ) : (
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <StyledPaper>
                  <Grid container>
                    <Grid item rowSpacing={2} column={2} xs={12} md={6}>
                      <Typography variant="subtitle1">
                        Payable Amount
                      </Typography>
                      <Typography variant="h4">
                        <Price amount={total || 0} />
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle1">Pay With...</Typography>
                      <Button
                        onClick={() => {
                          if (!signIn) {
                            openSignUp();
                          } else {
                            initializePayment(onSuccess, onClose);
                          }
                        }}
                        variant="contained"
                        color="inherit"
                        size="large"
                      >
                        <PaystackIcon
                          sx={{
                            fontSize: "5rem",
                            height: ".6em",
                            width: "1.2em",
                          }}
                        />
                      </Button>
                    </Grid>
                  </Grid>
                </StyledPaper>
              </Grid>
              <Grid xs={12} item>
                <List>
                  {currentCart.length > 0 ? (
                    currentCart.map((productID) =>
                      Filter(products, productID).map((product) => (
                        <SingleCartItem key={product.id} product={product} />
                      ))
                    )
                  ) : (
                    <h2>Your Cart is Empty</h2>
                  )}
                </List>
              </Grid>

              {/* <Grid item>
              <Button
                onClick={() => {
                  initializePayment(onSuccess, onClose);
                }}
                variant="contained"
              >
                <Typography variant="h6" textTransform="uppercase">
                  Pay <Price amount={total || 0} />
                </Typography>
              </Button>
            </Grid> */}
            </Grid>
          )}
        </Box>
      </Container>
    </Dialog>
  );
};

export default CartModal;
