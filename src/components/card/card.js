import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";
function CardPost(props) {
  return (
    <Card
      sx={{
        height: {
          xs: 200,
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
  );
}

export default CardPost;
