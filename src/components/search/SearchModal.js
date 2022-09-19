import { ModalContext } from "../context/contexts";
import { useContext, useState } from "react";
import useFetchLive from "../../hooks/useFetchLive";
import SearchResult from "./searchResult/SearchResult";
import React from "react";
import { AppBar, Dialog, IconButton, TextField, Toolbar } from "@mui/material";
import { Transition } from "../Functions/Functions";
import { Close, Search } from "@mui/icons-material";

const SearchModal = () => {
  let filtered;
  const [filteredProducts, setFilteredProducts] = useState([]);
  const noSearch = "search for product's name, brand, model or type";
  const [dialogue, setDialogue] = useState(noSearch);
  const { closeSearch, search } = useContext(ModalContext);
  const [products] = useFetchLive("products", []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleTyped = (e) => {
    const typed = e.target.value;
    filtered = products.filter((product) => {
      if (typed === "") {
        return setDialogue(noSearch);
      }

      if (
        product.brand.toLowerCase().includes(typed.toLowerCase()) ||
        product.model.toLowerCase().includes(typed.toLowerCase()) ||
        product.type.toLowerCase().includes(typed.toLowerCase()) ||
        product.name.toLowerCase().includes(typed.toLowerCase())
      ) {
        return product;
      }

      return setDialogue(
        (newDialogue) =>
          (newDialogue = "no product's name, brand, model or type found")
      );
    });

    return setFilteredProducts(filtered);
  };

  return (
    <Dialog
      fullScreen
      open={search}
      onClose={closeSearch}
      TransitionComponent={Transition}
      components="form"
      onSubmit={handleSubmit}
    >
      <AppBar position="static" color="transparent">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton edge="start" color="primary" aria-label="search">
            <Search fontSize="large" />
          </IconButton>
          <TextField
            fullWidth
            label="Search"
            onChange={(e) => handleTyped(e)}
            name="search"
            id="search"
            type="search"
            autoFocus={true}
            autoComplete="off"
            variant="filled"
          />
          <IconButton
            edge="end"
            color="primary"
            onClick={closeSearch}
            aria-label="close"
          >
            <Close fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SearchResult
        filteredProducts={filteredProducts}
        closeSearch={closeSearch}
        dialogue={dialogue}
      />
    </Dialog>
  );
};

export default SearchModal;
