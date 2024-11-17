import React, { useEffect, useState } from "react";

import { globalMessage } from "../../../util/constant/StringConstants";
import { assetKeys } from "../../../util/constant/AssetsConstants";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedPath } from "../../../redux/reducer/SidebarReducer";

import Grid from "@mui/material/Grid2";
import { Divider, List, ListItem, ListItemButton, Paper, Typography } from "@mui/material";
import sidebarStyle from "./SidebarStyle";

const Sidebar = () => {
  const [activePath, setActivePath] = useState(null);
  const selectedPathLink = useSelector((state) => state.selectedPath.selectedPath);
  const pathName = useLocation();
  const dispatch = useDispatch();

  const handleItemClick = (path) => {
    setActivePath(path);
    dispatch(setSelectedPath(path));
  };

  useEffect(() => {
    dispatch(setSelectedPath(`/${pathName.pathname.split("/")[1]}`));
    handleItemClick(pathName.pathname);
  }, [selectedPathLink]);

  const sidebarList = [
    {
      itemName: "Dashboard",
      activeIcon: assetKeys.dashboardBlackIcon,
      deactivateIcon: assetKeys.dashboardWhiteIcon,
      path: "/",
    },
    {
      itemName: "New Account",
      activeIcon: assetKeys.accountBlackIcon,
      deactivateIcon: assetKeys.accountWhiteIcon,
      path: "/accountManagement",
    },
    {
      itemName: "Audit Logs",
      activeIcon: assetKeys.auditBlackIcon,
      deactivateIcon: assetKeys.auditWhiteIcon,
      path: "/auditLogs",
    },
    {
      itemName: "Documents",
      activeIcon: assetKeys.reportBlackIcon,
      deactivateIcon: assetKeys.reportWhiteIcon,
      path: "/documents",
    },
  ];

  // Component to render individual sidebar item
  const SidebarItem = ({ item, activePath }) => {
    const isActivePath = activePath === item.path;

    return (
      <>
        <ListItem>
          <ListItemButton
            sx={{
              ...sidebarStyle.buttonText,
              fontWeight: isActivePath ? 700 : 600,
              backgroundColor: isActivePath ? "#00FE99" : "transparent",
              color: isActivePath ? "black" : "white",
              "&:hover": {
                backgroundColor: isActivePath ? "#00FE99" : "none",
                color: isActivePath ? "black" : "none",
              },
            }}
            onClick={() => handleItemClick(item.path)}
          >
            <img
              src={isActivePath ? item.activeIcon : item.deactivateIcon}
              alt={item.itemName}
              style={sidebarStyle.iconStyle}
            />
            {item.itemName}
          </ListItemButton>
        </ListItem>
        <Divider variant="middle" sx={sidebarStyle.dividerStyle} />
      </>
    );
  };

  return (
    <Paper elevation={3}>
      <Grid container sx={sidebarStyle.container} spacing={2}>
        <Grid width={"100%"}>
          <Grid size={12} mt={2} ml={2}>
            <img src={assetKeys.siebertLogo} alt="Siebert Logo" width={120} height={35} />
            <Typography mt={1} sx={sidebarStyle.imageText}>
              {globalMessage.communicationPortal}
            </Typography>
          </Grid>
          <Grid mt={1}>
            <List>
              {sidebarList.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <SidebarItem key={index} item={item} index={index} activePath={activePath} />
                </Link>
              ))}
            </List>

            <List sx={sidebarStyle.logoutButton}>
              <Divider variant="middle" sx={sidebarStyle.dividerStyle} />
              <ListItem>
                {/* Need to implement login functionalities */}
                {/* <ListItemButton sx={{ ...sidebarStyle.logoutButtonStyle, fontWeight: 600 }}>
                  <img src={assetKeys.logoutWhiteIcon} alt={"logout"} style={sidebarStyle.iconStyle} />
                  {globalMessage.logout}
                </ListItemButton> */}
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Sidebar;
