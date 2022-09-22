import React from "react";
import Price from "../../Price";
import { auth, db } from "../../../firebase/app";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { Card } from "react-bootstrap";
import {
  Button,
  CardContent,
  CardMedia,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";

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
    <ListItem>
      <Card>
        <Stack direction="row">
          <CardMedia
            component="img"
            src={imgSrc}
            alt={`${name} image`}
            sx={{ width: 150, height: 150 }}
          />
          <CardContent>
            <Typography textTransform="uppercase" variant="h6" color="GrayText">
              {brand}
            </Typography>
            <Typography
              textTransform="uppercase"
              variant="subtitle2"
              color="GrayText"
            >
              {model}
            </Typography>
            <Typography
              textTransform="uppercase"
              color="primary"
              variant="subtitle1"
              mt={3}
            >
              <Price amount={price} />
            </Typography>
            <Button
              onClick={() => removeProduct(id)}
              variant="contained"
              color="secondary"
            >
              Remove
            </Button>
          </CardContent>
        </Stack>
      </Card>
    </ListItem>
  );
};

export default SingleCartItem;
