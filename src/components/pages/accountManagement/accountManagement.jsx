import React, { useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Grid2";
import Breadcrumb from "../../customComponents/breadcrumb/Breadcrumb";
import { globalMessages } from "../../../util/constant/StringConstants";
import { routingUrl } from "../../../util/constant/UrlConstants";
import { Card, CardContent,useMediaQuery, Typography } from "@mui/material";
import accountManagementStyles from "./accountManagementStyle";
import ButtonWithIcon from "../../formUI/ButtonWithIcon";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { assetKeys } from "../../../util/constant/AssetsConstants";
import TableUI from "../../customComponents/table/TableUI";
import { accountManagementConfig } from "./accountManagementConfig";
import { useSelector, useDispatch } from "react-redux";
import { getAccountList } from "../../../redux/reducer/AccountListReducer";
import CenterCircularBar from "../../customComponents/centercircularbar/CenterCircularBar";
import AccountDetails from "./accountDetail/accountDetail";

const AccountManagement = () => {
  const isMobile = useMediaQuery("(max-width:648px)");
  const getAccountListData = useSelector((state) => state.accountList);
  const [viewDataContent, setViewDataContent] = useState();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const dispatch = useDispatch();
  const initialRender = useRef(true);
  const accountListData = getAccountListData?.data?.data ? getAccountListData?.data?.data?.data : []

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      dispatch(getAccountList());
    }

  }, []);

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

  const handleSendEmail = () => {
    //Need to Implement functionalities
  };

  const handleSelectedViewRowContent = (data) => {
    if (data) {
      setViewDataContent(data);
      setPopupOpen(true)
    }
  }

  const handleExitPopupClose = (popupClose) => {
    setViewDataContent();
    setPopupOpen(false)
  }

  const accountTableData = {
    tableHeaders: accountManagementConfig.tableHeaders,
    tableFields: accountManagementConfig.tableFields,
    tableContents: accountListData ? accountListData?.map((data, index) => ({
      id: index,
      ...data,
    })) : [],
  };

  return (
    <>
      {getAccountListData?.isLoading && !getAccountListData?.isFetched ? (
        <CenterCircularBar />
      ) : (
        <Grid container mr={1.5}>
          <Grid size={12} mt={2}>
            <Breadcrumb items={breadcrumbsData} />
          </Grid>
          {
            isPopupOpen ? (
              <Grid container sx={accountManagementStyles.popupOverlay} spacing={2} padding={2}>
                <Grid size={12} mr={{lg:38, md:30, sm: isMobile ? 3 : 28, xs:3}} sx={accountManagementStyles.popupContent}>
                  <AccountDetails accountNumber={viewDataContent?.accountNumber} closePopup={handleExitPopupClose}/>
                </Grid>
              </Grid>
            ) : (
              <>
                <Grid size={12} mt={1}>
                  <Typography sx={accountManagementStyles.heading}>{globalMessages.accountManagement}</Typography>
                </Grid>
                <Grid size={12} mt={2}>
                  <Card sx={{ height: "80vh" }}>
                    <CardContent>
                      <Grid container gap={2}>
                        <Grid>
                          <ButtonWithIcon
                            onClick={handleSendEmail}
                            sx={accountManagementStyles.sendEmailButtonStyle}
                            startIcon={<NotificationsNoneOutlinedIcon sx={{ mr: -0.8, mt: -0.3 }} />}
                          >
                            {globalMessages.sendEmail}
                          </ButtonWithIcon>
                        </Grid>
                        <Grid>
                          <ButtonWithIcon
                            onClick={handleSendEmail}
                            sx={accountManagementStyles.sendEmailButtonStyle}
                            startIcon={
                              <img src={assetKeys.sendMailIcon} alt="Send Mail Icon" width={"16px"} height={"16px"} />
                            }
                          >
                            {globalMessages.printMail}
                          </ButtonWithIcon>
                        </Grid>
                      </Grid>
                      <Grid mt={3}>
                        <TableUI tableData={accountTableData} tableHeight={"55vh"} setTableRowContent={handleSelectedViewRowContent} />
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </>
            )
          }

        </Grid>
      )}
    </>
  );
};
export default AccountManagement;
