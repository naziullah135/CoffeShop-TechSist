import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import feature from "../../assets/images/feature.png";

const Feature = () => {
  return (
    <Container >
      <Box mt={11}>
      <Typography variant="h4" sx={{ textAlign: "center",marginBottom:'48px'}}>
        Providing Unique Coffee Experiences
      </Typography>
      <Box>
        <Grid container>
          <Grid item md={3}>
            <Box sx={{textAlign: "right"}}>
              <Typography variant="h5" sx={{fontFamily:"raleway",fontSize:"30px"}}>
                {" "}
                Coffee Shop
              </Typography>
              <Typography variant="body1" sx={{fontFamily:"raleway",fontSize:"16px"}}>
                Our Coffees are carefully selected for quality, flavor and
                social impact.
              </Typography>
            </Box>
            <Box mt={5} sx={{textAlign: "right"}}>
              <Typography variant="h5" >
                {" "}
                Coffee Machine
              </Typography>
              <Typography variant="body1">
                Our Coffees are carefully selected for quality, flavor and
                social impact.
              </Typography>
            </Box>
            <Box mt={5} sx={{textAlign: "right"}}>
              <Typography variant="h5">
                {" "}
                High Quality
              </Typography>
              <Typography variant="body1">
                Our Coffees are carefully selected for quality, flavor and
                social impact.
              </Typography>
            </Box>
          </Grid>
          <Grid sx={{padding:"0px 30px 0px 30px"}} item md={6}>
            <img src={feature} alt="" />
          </Grid>
          <Grid item md={3}>
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="h5" >
                {" "}
                The Perfect Cup
              </Typography>
              <Typography variant="body1">
                Our Coffees are carefully selected for quality, flavor and
                social impact.
              </Typography>
            </Box>
            <Box mt={5} sx={{ textAlign: "left" }}>
              <Typography variant="h5" >
                {" "}
                Barista Coffee
              </Typography>
              <Typography variant="body1">
                Our Coffees are carefully selected for quality, flavor and
                social impact.
              </Typography>
            </Box>
            <Box mt={5} sx={{ textAlign: "left" }}>
              <Typography variant="h5">
                {" "}
                Supreme Beans
              </Typography>
              <Typography variant="body1">
                Our Coffees are carefully selected for quality, flavor and
                social impact.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      </Box>
    </Container>
  );
};

export default Feature;
