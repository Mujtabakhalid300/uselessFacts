import { Button, ButtonGroup, Grid } from "@mui/material";
import React from "react";

const Pagination = ({ factsPerPage, totalFacts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFacts / factsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ padding: 30 }}
    >
      <Grid item xs={3}>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          {pageNumbers.map((number, key) => (
            <Button
              key={key}
              variant="contained"
              onClick={() => {
                paginate(number);
              }}
            >
              {number}
            </Button>
          ))}
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default Pagination;
