import { Box } from "@mui/material";
import React from "react";
import Cover from "../components/Home/Cover";
import Feature from "../components/Home/Feature";
import Footer from "../components/Home/Footer";
import HealthTips from "../components/Home/HealthTips";
import Memories from "../components/Home/Memories";
import Menu from "../components/Home/Menu";
import Moments from "../components/Home/Moments";
import Navbar from "../components/Home/Navbar";
import Product from "../components/Home/Product";
import '@fontsource/public-sans';

const Home = () => {
  return (
    <Box bgcolor={"black"} color={"white"} sx={{fontFamily:'Quesha'}}>
      <Navbar />
      <Cover />
      <Feature />
      <Memories />
      <Menu />
      <Product  />
      <HealthTips />
      <Moments />
      <Footer />
    </Box>
  );
};

export default Home;
