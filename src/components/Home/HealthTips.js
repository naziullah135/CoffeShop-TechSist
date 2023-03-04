import { Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import healthTips from "../../assets/images/healthTips.png";
import cup from "../../assets/images/cup.png";

const HealthTips = () => {
  return (
    <Box component={"section"} mt={7}>
      <Grid container>
        <Grid item md={4}>
          <img style={{ width: "100%" }} src={healthTips} alt="" />
        </Grid>
        <Grid item md={8}>
          <Box sx={{ margin: "10px 30px 40px 25px" }}>
            <Typography mb={3} variant="h4">
              Coffee Fit For Everyone
            </Typography>
            <Typography variant="body1">
              Our journey was inspired from the growing coffee culture in Dhaka.
              We support the growth of coffee culture partnering with other
              cafés and provide opportunities for working students to gather
              valuable work experience. Our vision is to make our customers
              experience our quality brew and create special memories. We value
              our customers and want to make sure that when you enter our cafés
              you become part of Arabika.
            </Typography>
          </Box>
          <Box>
            <Grid container>
              <Grid container bgcolor={"#0E0E0E"} md={6}>

                <Grid item md={6}>
                <Box><Typography variant="h5" sx={{paddingLeft:"50px",paddingTop:"30px"}}>Opening Hours</Typography></Box>
                <Box mt={2} mb={5}>
                <Typography variant="body1" sx={{padding:"5px 0 5px 50px"}}>Saturday</Typography>
                <Typography variant="body1" sx={{padding:"5px 0 5px 50px"}}>Sunday</Typography>
                <Typography variant="body1" sx={{padding:"5px 0 5px 50px"}}>Monday</Typography>
                <Typography variant="body1" sx={{padding:"5px 0 5px 50px"}}>Tuesday</Typography>
                <Typography variant="body1" sx={{padding:"5px 0 5px 50px"}}>Wednesday</Typography>
                <Typography variant="body1" sx={{padding:"5px 0 5px 50px"}}>Thursday</Typography>
                <Typography variant="body1" sx={{padding:"5px 0 5px 50px"}}>Friday</Typography>
                </Box>
                </Grid>
                <Grid item md={6}>
                <Box mt={10} mb={5}>
                <Typography variant="body1" sx={{padding:"5px 0 5px 50px",color:"#A35715"}}>10 AM - 11 PM</Typography>
                <Typography variant="body1" sx={{padding:"5px 0 5px 50px",color:"#A35715"}}>12 PM - 11 PM</Typography>
                <Typography variant="body1" sx={{padding:"5px 0 5px 50px",color:"#A35715"}}>09 AM - 10 PM</Typography>
                <Typography variant="body1" sx={{padding:"5px 0 5px 50px",color:"#A35715"}}>10 AM - 11 PM</Typography>
                <Typography variant="body1" sx={{padding:"5px 0 5px 50px",color:"#A35715"}}>11 AM - 11 PM</Typography>
                <Typography variant="body1" sx={{padding:"5px 0 5px 50px",color:"#A35715"}}>10 AM - 11 PM</Typography>
                <Typography variant="body1" sx={{padding:"5px 0 5px 50px",color:"#A35715"}}>09 AM - 12 AM</Typography>
                </Box>
                </Grid>
              </Grid>
              <Grid container item md={6} bgcolor={"white"}>
                <Grid item md={6} color={"black"} sx={{paddingLeft:"50px",paddingTop:"50px"}}>
                  <Typography variant="h5">Friday Offer</Typography>
                  <Typography sx={{color:"#A35715"}}  mt={2} variant="h3">05%</Typography>
                  <Typography sx={{color:"#A35715"}}  mt={2}  variant="h3">OFF</Typography>
                </Grid>
                <Grid item md={6}>
                  <img src={cup} alt="" />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HealthTips;
