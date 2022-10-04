import React from "react";
import Price from "../../Price";
import { auth, db } from "../../../firebase/app";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { Button, Grid, ListItem, Stack, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import Img from "react-cool-img";
import { Box } from "@mui/system";
import { StyledCard } from "./StyledCart";

const SingleCartItem = ({ product }) => {
  const { enqueueSnackbar } = useSnackbar();
  async function removeProduct(productID) {
    const cartRef = doc(db, "customers", auth.currentUser.uid);
    updateDoc(cartRef, {
      cart: arrayRemove(productID),
    }).then(() => {
      enqueueSnackbar("Product has been removed from your cart", {
        variant: "success",
      });
    });
  }

  const { brand, model, imgSrc, price, id } = product;
  const name = `${brand} ${model}`;
  return (
    <ListItem sx={{ px: 0 }}>
      <StyledCard>
        <Grid container>
          <Grid item xs={6}>
            <Img src={imgSrc} alt={`${name} image`} />
          </Grid>
          <Grid item xs={6} p={2}>
            <Stack height="100%" spacing={1} justifyContent="center">
              <Box>
                <Typography
                  textTransform="uppercase"
                  variant="h6"
                  color="GrayText"
                >
                  {brand}
                </Typography>
                <Typography
                  textTransform="uppercase"
                  variant="subtitle2"
                  color="GrayText"
                  sx={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  {model}
                </Typography>
              </Box>
              <Typography
                textTransform="uppercase"
                color="primary"
                variant="subtitle1"
                mt={3}
              >
                <Price amount={price} />
              </Typography>
              <Box>
                <Button
                  onClick={() => removeProduct(id)}
                  variant="contained"
                  color="secondary"
                >
                  Remove
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </StyledCard>
    </ListItem>
  );
};

export default SingleCartItem;
