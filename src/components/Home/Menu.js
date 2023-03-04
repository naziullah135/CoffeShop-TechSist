import { Grid, Typography, Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import menus from "../../data/menu.data";
import MenuCard from "./MenuCard";
import '@fontsource/public-sans';

const Menu = () => {
  return (
    <Box component={"section"} mt={11}>
      <Container>
        <Box sx={{textAlign:'center', marginBottom: "48px"}}>
          <Typography variant="h4" sx={{fontFamily:"quesha"}}>
            To Discover More Look Into Our Coffee Menu
          </Typography>
          <Button variant="outlined" sx={{marginTop:"15px",color:"white", border:" 1px solid white !important"}}>
            See All
          </Button>
        </Box>
        <Grid container spacing={3}>
          {menus.map((card) => (
            <MenuCard card={card} key={card.id} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Menu;
