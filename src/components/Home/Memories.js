import React from "react";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import memories1 from "../../assets/images/memories/memories1.png";
import memories2 from "../../assets/images/memories/memories2.png";
import memories3 from "../../assets/images/memories/memories3.png";

const Memories = () => {
  return (
    <Box component={"section"} mt={11}>
    <Container>
        <Typography variant="h4" sx={{ marginBottom: "48px" }}>
          Providing Unique Coffee Experiences
        </Typography>
        <Box>
          <Grid container>
            <Grid item md={4}>
              <Box>
                <Typography variant="body1">
                  {" "}
                  The morning is like a quiet winter day,ideal for alone time
                  and for reading books. The noon is like Autumn, full of
                  colours and banters. The evening is like a summer night
                  bustling with people and ideal for hangouts. Arabika welcomes
                  all its customers to come and create special memories.
                </Typography>
                <Box sx={{ "& img": { maxWidth: "100%" } }}>
                  <img src={memories1} alt="" />
                </Box>
              </Box>
            </Grid>
            <Grid item md={5}>
              <Box sx={{margin:"0 20px 0 20px"}}>
                <Box sx={{ "& img": { maxWidth: "100%" } }}>
                  <img src={memories2} alt="" />
                </Box>
                <Typography variant="body1">
                  Every cup is brewed with freshly roasted single origin beans.
                  100% premium Arabica blend is used to ensure the exquisite
                  taste of coffee. These beans are ground and then the shots are
                  timed to perfection; ready to serve fresh and hot. The house
                  blend is well balanced for both strong and mild coffee drinks.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={3} sx={{display:"flex",alignItems:"center"}}>
              <Box>
                <Box sx={{ "& img": { maxWidth: "100%" } }}>
                  <img src={memories3} alt="" />
                </Box>
                <Typography variant="body1">
                  Ready Every morning. The experience creates memories.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
    </Container>
    </Box>
  );
};

export default Memories;
