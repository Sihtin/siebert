import React, { useEffect, useRef } from "react";
import Grid from "@mui/material/Grid2";
import Breadcrumb from "../../customComponents/breadcrumb/Breadcrumb";
import { globalMessages } from "../../../util/constant/StringConstants";
import { routingUrl } from "../../../util/constant/UrlConstants";
import { Card, CardContent, Typography } from "@mui/material";
import TableUI from "../../customComponents/table/TableUI";

import { useSelector, useDispatch } from "react-redux";
import CenterCircularBar from "../../customComponents/centercircularbar/CenterCircularBar";
import { getAuditLogsList } from "../../../redux/reducer/AuditLogsReducer";
import commonStyles from "../../../util/common/commonStyle";
import { auditLogsConfig } from "./auditLogsTableConfig";

const AuditLogs = () => {
  const getAuditLogsListData = useSelector((state) => state.auditLogsList);
  const dispatch = useDispatch();
  const initialRender = useRef(true);
  const auditLogListData = getAuditLogsListData?.data?.data ?  getAuditLogsListData?.data?.data?.data : []

  useEffect(() => {
    if(initialRender.current){
        initialRender.current = false;
        dispatch(getAuditLogsList());
    }
  }, []);

  const breadcrumbsData = [
    {
      label: globalMessages.home,
      href: routingUrl.dashboard,
    },
    {
      href: "",
      label: globalMessages.auditLogs,
    },
  ];

  const handleSendEmail = () => {
    //Need to Implement functionalities
  };

  const accountTableData = {
    tableHeaders: auditLogsConfig.tableHeaders,
    tableFields: auditLogsConfig.tableFields,
    tableContents: auditLogListData ? [] : [],
};

  return (
    <>
      {getAuditLogsListData?.isLoading && !getAuditLogsListData?.isFetched ? (
        <CenterCircularBar />
      ) : (
        <Grid container mr={1.5}>
          <Grid size={12} mt={2}>
            <Breadcrumb items={breadcrumbsData} />
          </Grid>
          <Grid size={12} mt={1}>
            <Typography sx={commonStyles.heading}>{globalMessages.auditHistory}</Typography>
          </Grid>
          <Grid size={12} mt={2}>

            <Card sx={{ height: "80vh" }}>
              <CardContent>
                <Grid mt={3}>
                  <TableUI tableData={accountTableData} tableHeight={"55vh"} />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default AuditLogs;
