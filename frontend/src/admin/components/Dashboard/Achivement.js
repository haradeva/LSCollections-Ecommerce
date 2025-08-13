import { Button, Card, CardContent, styled, Typography } from "@mui/material";
import React from "react";

const TriangleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});

const Achivement = () => {
  return (
    <Card
      sx={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
            LS Collections
          </Typography>
          <Typography variant="body2">Congratulations 🥳</Typography>
          <Typography variant="h5" sx={{ my: 3.1 }}>
            420.8k
          </Typography>
        </div>

        <Button size="small" variant="contained" sx={{ alignSelf: "start" }}>
          View Sales
        </Button>
      </CardContent>
      <TriangleImg src=""></TriangleImg>
      <TrophyImg src="https://cdn.pixabay.com/photo/2016/03/31/15/17/achievement-1293132_1280.png" />
    </Card>
  );
};

export default Achivement;
