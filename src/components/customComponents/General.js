import React from "react";
import Grid from "@mui/material/Grid2";
import Sidebar from "./sidebar/sidebar";
import generalStyle from "./generalStyle";

const General = () => {
  return (
    <Grid container>
      <Grid sx={generalStyle.sidebar}>
        <Sidebar />
      </Grid>
    </Grid>
  );
};
export default General;
