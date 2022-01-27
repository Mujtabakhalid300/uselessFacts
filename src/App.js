import { CssBaseline, Grid } from "@mui/material";
import React, { useState } from "react";
import NavBar from "./components/navbar/navbar";
import CardPost from "./components/card/card";
import { makeStyles } from "@mui/styles";
import list from "./data.json";
import Generator from "./components/randomFactGenerator/generator";
const usestyles = makeStyles({
  mainwrapper: {
    backgroundColor: "#e88a0e",
    height: "100%",
  },
});

function App() {
  const [generate, setGenerate] = useState(false);
  const classes = usestyles();
  function handlecallback(data) {
    setGenerate(data);
  }

  return (
    <>
      <CssBaseline />
      <Grid className={classes.mainwrapper} container spacing={2}>
        <Grid item xs={12}>
          <NavBar callback={handlecallback} />
        </Grid>
        <Grid item container spacing={3}>
          <Grid item xs={1}></Grid>
          {generate ? (
            <Generator data={list[Math.floor(Math.random() * 100)].fact} />
          ) : (
            <Grid item xs={10} container spacing={3}>
              {list.map((number) => (
                <Grid key={number.number} item xs={12} sm={6} md={4}>
                  <CardPost
                    number={number.number}
                    data={number.fact}
                  ></CardPost>
                </Grid>
              ))}
            </Grid>
          )}
          <Grid item xs={1}></Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
