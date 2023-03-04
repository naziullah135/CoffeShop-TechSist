import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import productData from '../../data/product.data';
import ProductCard from './ProductCard';

const Product = () => {
    return (
        <Box component={"section"} mt={11}>
            <Container>
            <Box sx={{display:'flex',marginBottom: "48px"}}>
<Box>
<Typography variant="h4">
            To Discover More Look Into Our Coffee Menu
          </Typography>
</Box>
         <Box  sx={{alignItems:"end"}}>
         <Button variant="outlined" color="secondary">
            See All
          </Button>
         </Box>
        </Box>
            <Grid container spacing={2}>
                {
                    productData.map((card)=> <ProductCard card={card} key={card.id} />)
                }
            </Grid>
            </Container>
        </Box>
    );
};

export default Product;