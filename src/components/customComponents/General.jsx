import React, {useState, useEffect} from "react";
import Grid from "@mui/material/Grid2";
import Sidebar from "./sidebar/Sidebar";
import generalStyle from "./GeneralStyle";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useNavigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
import AccountManagement from "../pages/accountManagement/accountManagement";
import { routingUrl } from "../../util/constant/UrlConstants";
import Login from "../pages/login/login";
import { getFromLocalStorage } from "../../util/common/LocalStorageUtils";


const PrivateRoute = ({ element, ...rest }) => {
  if (!getFromLocalStorage("isValidUser")) {
    return <Navigate to={routingUrl.login} replace />;
  }
  return element;
};


const General = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname.includes(routingUrl.login);
  useEffect(()=>{
    setIsAuthenticated(getFromLocalStorage("isValidUser"))
  },[getFromLocalStorage("isValidUser")])

  return (
    <Grid container>
      {!isLoginPage && isAuthenticated && (
        <Grid sx={generalStyle.sidebar}>
          <Sidebar />
        </Grid>
      )}
      <Grid ml={1} sx={generalStyle.children}>
        <Routes>
          <Route path={routingUrl.defaultRenderingPage} element={<Navigate to={routingUrl.login} />} />
          <Route path={routingUrl.login} element={<Login />} />
          <Route path={routingUrl.dashboard} element={<PrivateRoute element={<Dashboard />} />} />
          <Route path={routingUrl.accountManagement} element={<PrivateRoute element={<AccountManagement />} />} />
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
