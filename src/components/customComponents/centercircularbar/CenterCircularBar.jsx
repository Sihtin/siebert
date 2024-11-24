import React from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid2";

const CenterCircularBar = ({ height = "75vh" }) => {
  return (
    <Grid container justifyContent="center" alignItems="center" height={height}>
      <CircularProgress color="black" />
    </Grid>
  );
};

export default CenterCircularBar;
