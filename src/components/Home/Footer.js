import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import logo from "../../assets/icons/Logo.png";

const Footer = () => {
  return (
    <Box component={"section"} mt={11} sx={{ borderTop: "1px solid grey" }}>
      <Container>
        <Grid container mt={8}>
          <Grid item md={8} display={"flex"}>
            <Box padding={"20px"}>
              <img src={logo} alt="" />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              Freshly welcomes all its customers to come and create special
              memories. Our vision is to make our customers experience our
              quality brew and create special memories.
            </Box>
          </Grid>
        </Grid>
        <Grid container>
            <Grid item md={4}>
                <Box><img src="" alt="" /></Box>
                <Box>+1234567890
                </Box>
            </Grid>
            <Grid item md={4}>
                <Box><img src="" alt="" /></Box>
                <Box>Bashundhara R/A, Dhaka
                </Box>
            </Grid>
            <Grid item md={4} justifyContent={"end"}>
                <Box><img src="" alt="" /></Box>
                <Box>freshlycafe@support.com
                </Box>
            </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
