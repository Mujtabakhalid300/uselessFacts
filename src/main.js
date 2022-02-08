import { CssBaseline, Grid } from "@mui/material";
import React, { useState } from "react";
import NavBar from "./components/navbar/navbar";
import CardPost from "./components/card/card";
import { makeStyles } from "@mui/styles";
import list from "./data.json";
import Generator from "./components/randomFactGenerator/generator";
import Pagination from "./components/pagination";

const usestyles = makeStyles({
  mainwrapper: {
    backgroundColor: "#e88a0e",
    height: "100%",
  },
});

function App() {
  const [facts] = useState(list);
  const [currentPage, setCurrentPage] = useState(1);
  const [factsPerPage] = useState(25);
  const [generate, setGenerate] = useState(false);
  const classes = usestyles();
  function handlecallback(data) {
    setGenerate(data);
  }
  const indexOfLastFacts = currentPage * factsPerPage;
  const indexOfFirstFacts = indexOfLastFacts - factsPerPage;
  const currentFacts = facts.slice(indexOfFirstFacts, indexOfLastFacts);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
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
              {currentFacts.map((number, key) => (
                <Grid key={key} item xs={12} sm={6} md={4}>
                  <CardPost
                    number={number.number}
                    data={number.fact}
                    timing={1000}
                  ></CardPost>
                </Grid>
              ))}
            </Grid>
          )}
          <Grid item xs={1}></Grid>
        </Grid>

        <Pagination
          factsPerPage={factsPerPage}
          totalFacts={facts.length}
          paginate={paginate}
        />
      </Grid>
    </>
  );
}

export default App;
