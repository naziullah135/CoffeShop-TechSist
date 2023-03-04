import { Button, Grid, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ProductCard = ({card}) => {
    const {name,price,img,ratings}= card;
    return (
        <Grid item md={4} sm={6} xs={6} sx={{ textAlign: "center" }}>
        <Paper sx={{backgroundColor:"#0E0E0E",color:"white",padding: "50px"}} elevation={2}>
          <img src={img} alt="" />
          <Typography variant="h6">{name}</Typography>
          <Typography sx={{color:" #A35715", padding:"10px 0 10px 0"}} variant="h6">{price}</Typography>
          <Rating sx={{border:"1px solid #A35715"}} name="read-only" value={ratings} readOnly />
          <Box sx={{paddingTop:"10px"}}>
            <Button variant="outlined" color="inherit">
              Add to Cart
            </Button>
          </Box>
        </Paper>
      </Grid>
    );
};

export default ProductCard;