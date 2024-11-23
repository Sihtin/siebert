import * as React from "react";
import { globalMessages } from "../../../util/constant/StringConstants";
import Grid from "@mui/material/Grid2";
import { Card, CardContent, Typography } from "@mui/material";
import dashboardStyles from "./dashboardStyle";
import LineChartUI from "../../customComponents/chart/LineChart";

const Dashboard = () => {
  return (
    <Grid container mr={1.5}>
      <Grid size={12} mt={1}>
        <Typography sx={dashboardStyles.heading}>{globalMessages.accountManagement}</Typography>
      </Grid>
      <Grid size={12} mt={2}>
        <Card sx={{ height: "90vh" }}>
          <CardContent>
            <Grid container gap={2}>
              <Grid size={12}>
                <LineChartUI />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default Dashboard;
