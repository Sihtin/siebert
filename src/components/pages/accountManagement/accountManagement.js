import React from "react";
import Grid from "@mui/material/Grid2";
import Breadcrumb from "../../customComponents/breadcrumb/Breadcrumb";
import { globalMessages } from "../../../util/constant/StringConstants";
import { routingUrl } from "../../../util/constant/UrlConstants";
import { Card, CardContent, Typography } from "@mui/material";
import accountManagementStyles from "./accountManagementStyle";

const AccountManagement = () => {
  const breadcrumbsData = [
    {
      label: globalMessages.home,
      href: routingUrl.dashboard,
    },
    {
      href: "",
      label: globalMessages.newAccountManagement,
    },
  ];

  return (
    <Grid container mr={1.5}>
      <Grid size={12} mt={2}>
        <Breadcrumb items={breadcrumbsData} />
      </Grid>
      <Grid size={12} mt={1}>
        <Typography sx={accountManagementStyles.heading}>{globalMessages.accountManagement}</Typography>
      </Grid>
      <Grid size={12} mt={2}>
        {/* Need to add Table content */}
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
              continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default AccountManagement;
