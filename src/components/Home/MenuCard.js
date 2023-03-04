import { Button, Grid, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const MenuCard = ({ card }) => {
  const { img, name, price, rating } = card;
  return (
    <Grid item md={3} sm={6} xs={6} sx={{ textAlign: "center" }}>
      <Paper elevation={2}>
        <img src={img} alt="" />
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{price}</Typography>
        <Rating name="read-only" value={rating} readOnly />
        <Box>
          <Button variant="outlined" color="inherit">
            Add to Cart
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default MenuCard;
