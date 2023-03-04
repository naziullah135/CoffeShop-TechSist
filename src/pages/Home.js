import { Box } from "@mui/material";
import React from "react";
import Cover from "../components/Home/Cover";
import Feature from "../components/Home/Feature";
import Memories from "../components/Home/Memories";
import Menu from "../components/Home/Menu";
import Navbar from "../components/Home/Navbar";

const Home = () => {
  return (
    <Box bgcolor={"black"} color={"white"}>
      <Navbar />
      <Cover />
      <Feature />
      <Memories />
      <Menu />
    </Box>
  );
};

export default Home;
