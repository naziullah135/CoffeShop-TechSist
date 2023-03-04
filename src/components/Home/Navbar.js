import { Padding } from "@mui/icons-material";
import {
  AppBar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Logo from "../../assets/icons/Logo.png"
const Navbar = () => {
  const navLeftItems = ["Home", "About Us", "Our Product", "Menu"];
  const navRightItems = ["Blog News", "Contact Us", "Cart", "Log in"];
  return (
    <AppBar sx={{ background:"black"}}>
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", py:2}}>
          <Box sx={{flex: 4}}>
            <List sx={{ display: "flex", borderBottom:"2px solid white", padding: 0}}>
              {navLeftItems.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: "center", whiteSpace: "nowrap"}}>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{flex:2, textAlign: "center"}}><img src={Logo} alt="" /></Box>
          <Box sx={{flex: 4}}>
            <List sx={{ display: "flex", borderBottom:"2px solid white", padding: 0}}>
              {navRightItems.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: "center", whiteSpace: "nowrap"}}>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
