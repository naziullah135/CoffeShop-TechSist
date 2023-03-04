import { Button, Grid, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const MenuCard = ({ card }) => {
  const { img, name, price, rating } = card;
  return (
    <Grid item md={3} sm={6} xs={6} sx={{ textAlign: "center" }}>
      <Paper sx={{backgroundColor:"#0E0E0E", padding: "50px",color:"white"}} elevation={2}>
        <img src={img} alt="" />
        <Typography variant="h4">{name}</Typography>
        <Typography sx={{color:" #A35715", padding:"10px 0 10px 0"}} variant="h6">{price}</Typography>
        <Rating name="read-only" value={rating} readOnly />
        <Box sx={{paddingTop:"10px"}}>
          <Button variant="outlined" color="inherit">
            Add to Cart
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default MenuCard;
