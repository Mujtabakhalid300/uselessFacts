import {
  AppBar,
  Button,
  IconButton,
  Slide,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import React, { useState } from "react";

function NavBar(props) {
  const [random, setRandom] = useState(true);
  function handleRandom() {
    setRandom((prevstate) => {
      return !prevstate;
    });
    props.callback(random);
  }
  return (
    <Slide direction="left" in timeout={500}>
      <AppBar sx={{ backgroundColor: "#bf7c1f" }} position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            USELESS FACTS
          </Typography>
          <Button variant="inherit" onClick={handleRandom}>
            RANDOM
          </Button>
          <TextField
            variant="outlined"
            label="Search Facts"
            sx={{ flexGrow: 1 }}
            onChange={(e) => props.Search(e.target.value)}
          ></TextField>
          <IconButton color="inherit" size="Large">
            <SpeedIcon></SpeedIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

export default NavBar;
