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
      <Typography variant="h4" sx={{ fontFamily:"raleway", textAlign: "center",marginBottom:'48px'}}>
        Providing Unique Coffee Experiences
      </Typography>
      <Box>
        <Grid container>
          <Grid item md={3} sx={{paddingRight:"30px"}}>
            <Box sx={{textAlign: "right"}}>
              <Typography variant="h5" sx={{fontFamily:"raleway",fontSize:"30px"}}>
                {" "}
                Coffee Shop
              </Typography>
              <Typography  sx={{padding:"15px 15px 0 0"}} variant="body1">
                Our Coffees are carefully selected for quality, flavor and
                social impact.
              </Typography>
            </Box>
            <Box mt={10} sx={{textAlign: "right"}}>
              <Typography variant="h5" sx={{fontFamily:"raleway",fontSize:"30px"}}>
                {" "}
                Coffee Machine
              </Typography>
              <Typography  sx={{padding:"15px 15px 0 0"}}variant="body1">
                Our Coffees are carefully selected for quality, flavor and
                social impact.
              </Typography>
            </Box>
            <Box mt={10} sx={{textAlign: "right"}}>
              <Typography variant="h5" sx={{fontFamily:"raleway",fontSize:"30px"}}>
                {" "}
                High Quality
              </Typography>
              <Typography  sx={{padding:"15px 15px 0 0"}} variant="body1">
                Our Coffees are carefully selected for quality, flavor and
                social impact.
              </Typography>
            </Box>
          </Grid>
          <Grid sx={{padding:"0px 30px 0px 30px"}} item md={6}>
            <img src={feature} alt="" />
          </Grid>
          <Grid item md={3} sx={{paddingLeft:"30px"}}>
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="h5" sx={{fontFamily:"raleway",fontSize:"30px"}}>
                {" "}
                The Perfect Cup
              </Typography>
              <Typography  sx={{padding:"15px 15px 0 0"}} variant="body1">
                Our Coffees are carefully selected for quality, flavor and
                social impact.
              </Typography>
            </Box>
            <Box mt={10} sx={{ textAlign: "left" }}>
              <Typography variant="h5" sx={{fontFamily:"raleway",fontSize:"30px"}}>
                {" "}
                Barista Coffee
              </Typography>
              <Typography sx={{padding:"15px 15px 0 0"}} variant="body1">
                Our Coffees are carefully selected for quality, flavor and
                social impact.
              </Typography>
            </Box>
            <Box mt={10} sx={{ textAlign: "left" }}>
              <Typography variant="h5" sx={{fontFamily:"raleway",fontSize:"30px"}}>
                {" "}
                Supreme Beans
              </Typography>
              <Typography  sx={{padding:"15px 15px 0 0"}} variant="body1">
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
