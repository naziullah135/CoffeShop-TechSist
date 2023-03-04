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
            <Box>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                {" "}
                Coffee Shop
              </Typography>
              <Typography variant="body1">
                Our Coffees are carefully selected for quality, flavor and
                social impact.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                {" "}
                Coffee Machine
              </Typography>
              <Typography variant="body1">
                Our Coffees are carefully selected for quality, flavor and
                social impact.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                {" "}
                High Quality
              </Typography>
              <Typography variant="body1">
                Our Coffees are carefully selected for quality, flavor and
                social impact.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <img src={feature} alt="" />
          </Grid>
          <Grid item md={3}>
            <Box>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                {" "}
                The Perfect Cup
              </Typography>
              <Typography variant="body1">
                Our Coffees are carefully selected for quality, flavor and
                social impact.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                {" "}
                Barista Coffee
              </Typography>
              <Typography variant="body1">
                Our Coffees are carefully selected for quality, flavor and
                social impact.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
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
