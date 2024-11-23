import React from "react";
import Grid from "@mui/material/Grid2";
import Sidebar from "./sidebar/Sidebar";
import generalStyle from "./GeneralStyle";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
import AccountManagement from "../pages/accountManagement/accountManagement";
import { routingUrl } from "../../util/constant/UrlConstants";
import Login from "../pages/login/login";

const General = () => {
  const location = useLocation();

  const isLoginPage = location.pathname.includes(routingUrl.defaultRenderingPage || routingUrl.login);

  return (
    <Grid container>
      {!isLoginPage && (
        <Grid sx={generalStyle.sidebar}>
          <Sidebar />
        </Grid>
      )}
      <Grid ml={1} sx={generalStyle.children}>
        <Routes>
          <Route path={routingUrl.defaultRenderingPage} element={<Navigate to={routingUrl.login} />} />
          <Route path={routingUrl.login} element={<Login />} />
          <Route path={routingUrl.dashboard} element={<Dashboard />} />
          <Route path={routingUrl.accountManagement} element={<AccountManagement />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

const App = () => (
  <Router>
    <General />
  </Router>
);

export default App;
