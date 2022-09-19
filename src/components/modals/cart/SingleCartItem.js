import React from "react";
import Price from "../../Price";
import { auth, db } from "../../../firebase/app";
import { deleteDoc, doc } from "firebase/firestore";
import { Card } from "react-bootstrap";
import {
  CardContent,
  CardMedia,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";

const SingleCartItem = ({ product }) => {
  async function handleDeleteProduct(id) {
    const productRef = doc(db, auth.currentUser.uid, id);
    await deleteDoc(productRef);
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
          </CardContent>
        </Stack>
      </Card>
    </ListItem>
    // <section className={styles.singleProduct}>
    //   <div className={styles.productBox}>
    //     <div className={styles.imageBox}>
    //       <Img src={imgSrc} alt={name} />
    //     </div>
    //     <div className={styles.name}>
    //       <h6>{brand}</h6>
    //       <p className={styles.model}>{model}</p>
    //     </div>
    //   </div>

    //   {/* <Price amount={price} /> */}
    //   <AiOutlineClose
    //     className={styles.close}
    //     // color="var(--red-color)"
    //     title="Delete Product"
    //     onClick={() => handleDeleteProduct(id)}
    //   />
    // </section>
  );
};

export default SingleCartItem;
