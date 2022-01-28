import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, Typography, Grow } from "@mui/material";
function CardPost(props) {
  return (
    <Grow in timeout={props.timing}>
      <Card
        sx={{
          height: {
            xs: "auto",
            sm: 300,
          },
          my: "1rem",
        }}
      >
        <CardHeader title={`Fact Number. ${props.number}`} />
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
    </Grow>
  );
}

export default CardPost;
