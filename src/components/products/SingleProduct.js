import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Price from "../Price";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const productLink = `/${product.type}/${product.id}`;
  const productID = `${product.brand} ${product.model}`;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={product.id}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Link to={productLink}>
            <CardMedia
              component="img"
              height="200"
              image={product.imgSrc}
              alt={productID}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="b"
                textTransform="uppercase"
              >
                {productID}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Price amount={product.price} />
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default SingleProduct;
