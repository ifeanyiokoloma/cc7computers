import React from "react";
import Slideshow from "../../components/slideshow/Slideshow";
import Hero from "../../components/hero/Hero";
import Accessories from "../products/Accessories";
import { home } from "../../data/articles/articles";
import Computers from "../products/Computers";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <Stack spacing={8}>
      <Hero page="home" pageData={home} imgName="operator" />
      <Slideshow />
      <Accessories
        header="Accessories"
        link="accessories"
        linkName="Accessories"
        extent={3}
      />
      <Computers
        header="Computers"
        link="computers"
        linkName="Computers"
        extent={3}
      />
    </Stack>
  );
};

export default Home;
