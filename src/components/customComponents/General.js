import React from "react";
import Grid from "@mui/material/Grid2";
import Sidebar from "./sidebar/Sidebar";
import generalStyle from "./GeneralStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
import AccountManagement from "../pages/accountManagement/accountManagement";
import { routingUrl } from "../../util/constant/UrlConstants";

const General = () => {
  return (
    <Router>
      <Grid container>
        <Grid sx={generalStyle.sidebar}>
          <Sidebar />
        </Grid>
        <Grid ml={1} sx={generalStyle.children}>
          <Routes>
            <Route path={routingUrl.dashboard} element={<Dashboard />} />
            <Route path={routingUrl.accountManagement} element={<AccountManagement />} />
          </Routes>
        </Grid>
      </Grid>
    </Router>
  );
};
export default General;
