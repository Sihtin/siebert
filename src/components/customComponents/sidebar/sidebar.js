import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { assetKeys } from "../../../util/constant/AssetsConstants";
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material";
import sidebarStyle from "./sidebarStyle";
import { globalMessage } from "../../../util/constant/StringConstants";

// Component to render individual sidebar item
const SidebarItem = ({ item, index, activeIndex, handleItemClick }) => {
  const isActive = activeIndex === index;

  return (
    <>
      <ListItem key={index}>
        <ListItemButton
          sx={{
            ...sidebarStyle.buttonText,
            fontWeight: isActive ? 700 : 600,
            backgroundColor: isActive ? "#00FE99" : "transparent",
            color: isActive ? "black" : "white",
            "&:hover": {
              backgroundColor: isActive ? "#00FE99" : "none",
              color: isActive ? "black" : "none",
            },
          }}
          onClick={() => handleItemClick(index)}
        >
          <img
            src={isActive ? item.activeIcon : item.deactivateIcon}
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

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const sidebarList = [
    {
      itemName: "Dashboard",
      activeIcon: assetKeys.dashboardBlackIcon,
      deactivateIcon: assetKeys.dashboardWhiteIcon,
    },
    {
      itemName: "Account Management",
      activeIcon: assetKeys.accountBlackIcon,
      deactivateIcon: assetKeys.accountWhiteIcon,
    },
    {
      itemName: "Audit Logs",
      activeIcon: assetKeys.auditBlackIcon,
      deactivateIcon: assetKeys.auditWhiteIcon,
    },
    {
      itemName: "Reports",
      activeIcon: assetKeys.reportBlackIcon,
      deactivateIcon: assetKeys.reportWhiteIcon,
    },
  ];

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
                <SidebarItem
                  key={index}
                  item={item}
                  index={index}
                  activeIndex={activeIndex}
                  handleItemClick={handleItemClick}
                />
              ))}
            </List>

            <List sx={sidebarStyle.logoutButton}>
              <Divider variant="middle" sx={sidebarStyle.dividerStyle} />
              <ListItem>
                <ListItemButton sx={{ ...sidebarStyle.logoutButtonStyle, fontWeight: 600 }}>
                  <img src={assetKeys.logoutWhiteIcon} alt={"logout"} style={sidebarStyle.iconStyle} />
                  {globalMessage.logout}
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Sidebar;
