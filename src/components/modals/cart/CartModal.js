import { useContext } from "react";
import { ModalContext, ShoppingCartContext } from "../../context/contexts";
import SingleCartItem from "./SingleCartItem";
import { AiFillShopping } from "react-icons/ai";
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
  Container,
} from "@mui/material";
import { Filter, sum, Transition } from "../../Functions/Functions";
import { Close } from "@mui/icons-material";
import { StyledNavbar } from "../../navbar/StyledNavbar";
import useFetchLive from "../../../hooks/useFetchLive";
import { v4 as uuidv4 } from "uuid";
import { usePaystackPayment } from "react-paystack";
import { StyledPaper } from "./StyledCart";
import { PaystackIcon } from "./PaystackIcon";
import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../../../firebase/app";
import { useSnackbar } from "notistack";

const CartModal = () => {
  const { signIn, user, loading } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

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
    // eslint-disable-next-line
    currentCart.map((id) => {
      const productRef = doc(db, "products", id);
      updateDoc(productRef, {
        sold: increment(1),
        quantity: increment(-1),
        buyer: user.uid,
        reference,
      }).then(() => {
        enqueueSnackbar("Payment Successful", { variant: "success" });
      });
    });
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    enqueueSnackbar(
      "Other methods of payment will be implemented soon, bear with us",
      { variant: "info" }
    );
  };

  return (
    <Dialog
      fullScreen
      open={cart}
      onClose={closeCart}
      TransitionComponent={Transition}
      components="section"
    >
      <StyledNavbar position="static">
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
        <Box sx={{ height: "100%", mt: "1rem" }}>
          {loading ? (
            <Typography variant="h1">Loading</Typography>
          ) : (
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <StyledPaper>
                  <Grid container rowSpacing={2} columnSpacing={5}>
                    <Grid item xs={12} sm={6}>
                      <Typography>Payable Amount</Typography>
                      <Typography variant="h3">
                        <Price amount={total || 0} />
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography>Pay With...</Typography>
                      <Box>
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
                        >
                          <PaystackIcon
                            sx={{
                              fontSize: "4rem",
                              height: ".6em",
                              width: "1.2em",
                            }}
                          />
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </StyledPaper>
              </Grid>
              <Grid xs={12} item>
                <List>
                  <Grid container spacing={{ xs: 2, sm: 4 }}>
                    {currentCart.length > 0 ? (
                      currentCart.map((productID) =>
                        Filter(products, productID).map((product) => (
                          <Grid item xs={12} sm={6}>
                            <SingleCartItem
                              key={product.id}
                              product={product}
                            />
                          </Grid>
                        ))
                      )
                    ) : (
                      <h2>Your Cart is Empty</h2>
                    )}
                  </Grid>
                </List>
              </Grid>
            </Grid>
          )}
        </Box>
      </Container>
    </Dialog>
  );
};

export default CartModal;
