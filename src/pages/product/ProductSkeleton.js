import React from "react";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { DescPaper, PhotoFrame, PriceTag, ProductTitle } from "./StyledProduct";

const ProductSkeleton = () => {
  return (
    <Grid container spacing={2}>
      <Grid item sm={12}>
        <ProductTitle
          sx={{ mt: "1rem" }}
          textAlign="center"
          component="h1"
          variant="h4"
        >
          <Skeleton />
        </ProductTitle>
      </Grid>
      <Grid sm={6} item>
        <PhotoFrame>
          <Skeleton
            variant="rectangular"
            sx={{ width: "100%", height: "100%" }}
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
            <Skeleton />
          </Typography>
          <List spacing={2}>
            <ListItem>
              <ListItemText secondary={<Skeleton />} primary={<Skeleton />} />
            </ListItem>
            <ListItem>
              <ListItemText secondary={<Skeleton />} primary={<Skeleton />} />
            </ListItem>
            <ListItem>
              <ListItemText secondary={<Skeleton />} primary={<Skeleton />} />
            </ListItem>

            <ListItem>
              <ListItemText secondary={<Skeleton />} primary={<Skeleton />} />
            </ListItem>

            <ListItem>
              <ListItemText secondary={<Skeleton />} primary={<Skeleton />} />
            </ListItem>
          </List>
          <PriceTag>{<Skeleton />}</PriceTag>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            spacing={2}
            mt={4}
          >
            <Button variant="contained" color="primary">
              Pay Now
            </Button>
            <Button variant="contained" color="secondary">
              Add to Cart
            </Button>
          </Stack>
        </DescPaper>
      </Grid>
    </Grid>
  );
};

export default ProductSkeleton;
