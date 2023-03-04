import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React from "react";
import cover from "../../assets/images/cover.png";
import coverBg from "../../assets/images/coverBg.png";
import { Typography,Button } from "@mui/material";

const Cover = () => {
  return (
    // <Box sx={{ display: "flex", width: "100vw" ,  "& img":{maxWidth:"100%"}}}>
    //   <Box sx={{ width: "35%"}}>
    //     <img src={cover} alt="" />
    //   </Box>
    //   <Box sx={{ width: "65%" }}>
    //     <img src={cover2} alt="" />
    //   </Box>
    // </Box>
    <Box component={"section"} mt={13}>
      <Grid container spacing={0} sx={{ "& img": { maxWidth: "100%" } }}>
        <Grid item md={4} sx={{ backgroundColor: "white" }}>
          <img src={coverBg} alt="" />
          <Box color={"black"}>
            <Typography variant="h4">Freshly Brewed Coffee</Typography>
            <Typography variant="body1">
              Everyday in Arabika is like the colourful seasons of Bangladesh.
              Arabika welcomes all its customers to come and create special
              memories.
            </Typography>
            <Button variant="contained">Contained</Button>
          </Box>
        </Grid>
        <Grid item md={8}>
          <img src={cover} alt="" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cover;
