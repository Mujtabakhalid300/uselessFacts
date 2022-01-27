import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";

function Generator(props) {
  return (
    <Grid item xs={10}>
      <Card
        sx={{
          height: {
            xs: "100vh",
          },
          my: "1rem",
        }}
      >
        <CardContent>
          <Typography
            sx={{
              fontSize: {
                xs: 25,
                sm: 16,
              },
            }}
            variant="p"
          >
            {props.data}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Generator;
