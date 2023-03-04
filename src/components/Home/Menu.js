import { Grid, Typography, Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import menus from "../../data/menu.data";
import MenuCard from "./MenuCard";

const Menu = () => {
  return (
    <Box component={"section"} mt={11}>
      <Container>
        <Box sx={{textAlign:'center',marginBottom: "48px"}}>
          <Typography variant="h4">
            To Discover More Look Into Our Coffee Menu
          </Typography>
          <Button variant="outlined" color="secondary">
            See All
          </Button>
        </Box>
        <Grid container spacing={2}>
          {menus.map((card) => (
            <MenuCard card={card} key={card.id} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Menu;
