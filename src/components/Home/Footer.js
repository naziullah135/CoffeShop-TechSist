import { Box, Button, Grid, IconButton } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import logo from "../../assets/icons/Logo.png";
import upArrow from "../../assets/icons/lineArrow.png"; 
import facebook from "../../assets/icons/facebook.png";
import insta from "../../assets/icons/insta.png";
import twitter from "../../assets/icons/twitter.png";
import youtube from "../../assets/icons/you.png";
import pin from "../../assets/icons/pin.png";


const Footer = () => {
    // const { children } = props;
    // const trigger = useScrollTrigger({
    //     disableHysteresis: true,
    //     threshold: 100,
    // });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
        console.log("from function");
    };
  return (
    <Box component={"section"} mt={11} sx={{ borderTop: "1px solid grey" }}>
        <Box sx={{textAlign:"center"}}>
        <IconButton onClick={handleClick} sx={{width:63,height:63,border:"1px solid grey",mt:-4,backgroundColor:"black !important"}}> <img src={upArrow} alt="" /> </IconButton>
        </Box>
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
          <Grid sx={{paddingLeft:"100px"}} item md={4}>
            <IconButton aria-label="" >
              <img src={facebook} alt="" />
            </IconButton>
            <IconButton aria-label="" >
              <img src={insta} alt="" />
            </IconButton>
            <IconButton aria-label="" >
              <img src={twitter} alt="" />
            </IconButton>
            <IconButton aria-label="" >
              <img src={pin} alt="" />
            </IconButton>
            <IconButton aria-label="" >
              <img src={youtube} alt="" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container sx={{paddingBottom:"20px"}}>
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
