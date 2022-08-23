import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";

const ProductsSkeleton = () => {
  return Array.from([1, 2, 3, 4]).map((index) => (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Skeleton
            animation="wave"
            variant="rectangular"
            sx={{ height: 200 }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="b"
              textTransform="uppercase"
            >
              <Skeleton />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Skeleton />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  ));
};

export default ProductsSkeleton;
