import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
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
    <AppBar sx={{ backgroundColor: "#bf7c1f" }} position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          USELESS FACTS
        </Typography>
        <Button variant="inherit" onClick={handleRandom}>
          RANDOM
        </Button>
        <IconButton color="inherit" size="Large">
          <SpeedIcon></SpeedIcon>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
