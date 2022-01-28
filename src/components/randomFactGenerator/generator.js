import React from "react";
import { Card, CardContent, Grid, Typography, Grow } from "@mui/material";

function Generator(props) {
  return (
    <Grow in timeout={750}>
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
    </Grow>
  );
}

export default Generator;
