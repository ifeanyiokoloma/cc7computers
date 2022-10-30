import React from "react";
import { doc, setDoc } from "firebase/firestore";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { accessory, computer } from "../../../data/data";
import { db } from "../../../firebase/app";
import { PhotoCamera } from "@mui/icons-material";

const UploadProducts = () => {
  const [product, setProduct] = useState("");

  // Store specification data
  const uploadProductData = async (e) => {
    e.preventDefault();
    const formValue = e.currentTarget;
    const data = new FormData(formValue);

    const brand = data.get("brand");
    const model = data.get("model");
    const name = data.get("name");
    const price = data.get("price");
    const processor = data.get("processor");
    const ram = data.get("ram");
    const storage = data.get("storage");
    const graphics = data.get("graphics");
    const os = data.get("os");
    const quantity = data.get("quantity");
    const image = data.get("image");
    const id = `${brand}-${model}`.toLowerCase();

    if (product === "computer") {
      const computerData = {
        brand,
        model,
        name,
        price,
        processor,
        ram,
        storage,
        graphics,
        os,
        quantity,
        product,
        id,
        sold: 0,
        timestamp: Date.now(),
      };

      const productRef = doc(db, "products", id);
      setDoc(productRef, computerData);
    }

    if (product === "accessory") {
      const accessoryData = {
        name,
        brand,
        model,
        quantity,
        price,
        product,
        id,
        sold: 0,
        timestamp: Date.now(),
      };

      const productRef = doc(db, "products", id);
      await setDoc(productRef, accessoryData);
    }
  };

  const handleChange = (event) => {
    const productValue = event.target.value;
    setProduct(productValue);
  };

  return (
    <Container maxWidth="sm">
      <Box onSubmit={uploadProductData} component="form">
        <Stack spacing={2}>
          <FormControl variant="filled" fullWidth>
            <InputLabel>Select the product to upload</InputLabel>
            <Select value={product} onChange={handleChange}>
              <MenuItem value="computer">Computer</MenuItem>
              <MenuItem value="accessory">Accessory</MenuItem>
            </Select>
          </FormControl>

          {product === "computer" && (
            <Grid container spacing={2}>
              {computer.map((prop) => (
                <Grid key={prop.id} item xs={12} sm={4}>
                  <TextField
                    required
                    label={prop.name}
                    type={prop.type}
                    id={prop.name}
                    name={prop.name}
                  />
                </Grid>
              ))}
              <Grid item xs={12}>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <input name="image" hidden accept="image/*" type="file" />
                  <PhotoCamera />
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained">
                  Upload Product Data
                </Button>
              </Grid>
            </Grid>
          )}

          {product === "accessory" && (
            <Grid container spacing={2}>
              {accessory.map((prop) => (
                <Grid key={prop.id} item xs={12} sm={4}>
                  <TextField
                    required
                    label={prop.name}
                    type={prop.type}
                    id={prop.name}
                    name={prop.name}
                  />
                </Grid>
              ))}
              <Grid item xs={12}>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <input name="image" hidden accept="image/*" type="file" />
                  <PhotoCamera />
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained">
                  Upload Product Data
                </Button>
              </Grid>
            </Grid>
          )}
        </Stack>
      </Box>
    </Container>
  );
};

export default UploadProducts;
