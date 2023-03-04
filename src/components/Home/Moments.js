import { Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import img1 from "../../assets/images/moments/moments1.png";
import img2 from "../../assets/images/moments/moments2.png";
import img3 from "../../assets/images/moments/moments3.png";
import img4 from "../../assets/images/moments/moments4.png";
import img5 from "../../assets/images/moments/moments5.png";
import img6 from "../../assets/images/moments/moments6.png";
import img7 from "../../assets/images/moments/moments7.png";
import img8 from "../../assets/images/moments/moments8.png";

const Moments = () => {
    return (
        <Box component={"section"} mt={11}>
            <Container>
                <Grid container spacing={2} sx={{ "& img": { maxWidth: "100%" } }}>
                    <Grid item md={4}><img src={img1} alt="" /></Grid>
                    <Grid item md={4}><img src={img2} alt="" /></Grid>
                    <Grid item md={4}><img src={img3} alt="" /></Grid>       
                    <Grid item md={8}><img src={img4} alt="" /></Grid>
                    <Grid item md={4}><img src={img5} alt="" /></Grid>
                    <Grid item md={4}><img src={img6} alt="" /></Grid>
                    <Grid item md={4}><img src={img7} alt="" /></Grid>
                    <Grid item md={4}><img src={img8} alt="" /></Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Moments;