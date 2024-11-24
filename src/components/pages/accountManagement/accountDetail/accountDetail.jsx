import React, { useRef, useEffect } from "react";
import Grid from "@mui/material/Grid2";
import CenterCircularBar from "../../../customComponents/centercircularbar/CenterCircularBar";
import commonStyles from "../../../../util/common/commonStyle";
import { globalMessages } from "../../../../util/constant/StringConstants";
import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { getAccountDetail } from "../../../../redux/reducer/AccountDetailReducer";
import InputField from "../../../formUI/InputField";
import { accountDetailStyle } from "./accountDetailStyle";

const AccountDetails = ({ accountNumber, closePopup }) => {
  const accountDetail = useSelector((state) => state.accountDetail);
  const accountData = accountDetail?.data?.data ? accountDetail?.data?.data?.data : [];
  const dispatch = useDispatch();
  const initialRender = useRef(true);
  useEffect(() => {
    if (!!accountNumber && initialRender.current) {
      initialRender.current = false;
      dispatch(getAccountDetail({ accountNumber }));
    }
  }, [accountNumber]);

  const formik = useFormik({
    initialValues: {
      accountNumber: "",
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      address1: "",
      address2: "",
      address3: "",
      address4: "",
      address5: "",
      address6: "",
    },
    onSubmit: (values) => {},
  });

  useEffect(() => {
    if (!!accountData) {
      formik.setFieldValue("accountNumber", accountData?.accountNumber);
      formik.setFieldValue("firstName", accountData?.firstName);
      formik.setFieldValue("lastName", accountData?.lastName);
      formik.setFieldValue("dob", accountData?.dateofBirth);
      formik.setFieldValue("email", accountData?.emailAddress);
      formik.setFieldValue("address1", accountData?.addressLine1);
      formik.setFieldValue("address2", accountData?.addressLine2);
      formik.setFieldValue("address3", accountData?.addressLine3);
      formik.setFieldValue("address4", accountData?.addressLine4);
      formik.setFieldValue("address5", accountData?.addressLine5);
      formik.setFieldValue("address6", accountData?.addressLine6);
    }
  }, [accountData]);

  return (
    <>
      {accountDetail?.isLoading && !accountDetail?.isFetched ? (
        <CenterCircularBar />
      ) : (
        <Grid container height={"80vh"}>
          <Grid size={8}>
            <Typography sx={commonStyles.heading}>{globalMessages.accountDetails}</Typography>
          </Grid>
          <Grid container size={4} sx={{ display: "flex", alignItems: "center" }}>
            <IconButton sx={accountDetailStyle.closeIconStyle} onClick={closePopup}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <Box sx={accountDetailStyle.boxStyle}>
            <Grid container spacing={2}>
              <Grid size={12} mt={1}>
                <Grid size={6} mt={1}>
                  <InputField
                    name="accountNumber"
                    data-testid="accountNumber"
                    label={globalMessages.accountNumber}
                    placeholder={globalMessages.accountNumber}
                    shrink={true}
                    autoComplete="off"
                    value={formik.values.accountNumber}
                    onChange={formik.handleChange}
                    onBlur={(e) => formik.handleBlur(e)}
                    disabled={true}
                  />
                </Grid>
              </Grid>
              <Grid size={6} mt={1}>
                <InputField
                  name="firstName"
                  data-testid="firstName"
                  label={globalMessages.firstName}
                  placeholder={globalMessages.firstName}
                  shrink={true}
                  autoComplete="off"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={(e) => formik.handleBlur(e)}
                  disabled={true}
                />
              </Grid>
              <Grid size={6} mt={1}>
                <InputField
                  name="firstName"
                  data-testid="firstName"
                  label={globalMessages.lastName}
                  placeholder={globalMessages.lastName}
                  shrink={true}
                  autoComplete="off"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={(e) => formik.handleBlur(e)}
                  disabled={true}
                />
              </Grid>
              <Grid size={6} mt={1}>
                <InputField
                  name="dob"
                  data-testid="dob"
                  label={globalMessages.dateOfBirth}
                  placeholder={globalMessages.dateOfBirth}
                  shrink={true}
                  autoComplete="off"
                  value={formik.values.dob}
                  onChange={formik.handleChange}
                  onBlur={(e) => formik.handleBlur(e)}
                  disabled={true}
                />
              </Grid>
              <Grid size={6} mt={1}>
                <InputField
                  name="email"
                  data-testid="email"
                  label={globalMessages.email}
                  placeholder={globalMessages.email}
                  shrink={true}
                  autoComplete="off"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={(e) => formik.handleBlur(e)}
                  disabled={true}
                />
              </Grid>
              <Grid size={6} mt={1}>
                <InputField
                  name="address1"
                  data-testid="address1"
                  label={globalMessages.address1}
                  placeholder={globalMessages.address1}
                  shrink={true}
                  autoComplete="off"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={(e) => formik.handleBlur(e)}
                  disabled={true}
                />
              </Grid>
              <Grid size={6} mt={1}>
                <InputField
                  name="email"
                  data-testid="email"
                  label={globalMessages.email}
                  placeholder={globalMessages.email}
                  shrink={true}
                  autoComplete="off"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={(e) => formik.handleBlur(e)}
                  disabled={true}
                />
              </Grid>
              <Grid size={6} mt={1}>
                <InputField
                  name="address1"
                  data-testid="address1"
                  label={globalMessages.address1}
                  placeholder={globalMessages.address1}
                  shrink={true}
                  autoComplete="off"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={(e) => formik.handleBlur(e)}
                  disabled={true}
                />
              </Grid>
              <Grid size={6} mt={1}>
                <InputField
                  name="address2"
                  data-testid="address2"
                  label={globalMessages.address2}
                  placeholder={globalMessages.address2}
                  shrink={true}
                  autoComplete="off"
                  value={formik.values.address2}
                  onChange={formik.handleChange}
                  onBlur={(e) => formik.handleBlur(e)}
                  disabled={true}
                />
              </Grid>
              <Grid size={6} mt={1}>
                <InputField
                  name="address3"
                  data-testid="address3"
                  label={globalMessages.address3}
                  placeholder={globalMessages.address3}
                  shrink={true}
                  autoComplete="off"
                  value={formik.values.address3}
                  onChange={formik.handleChange}
                  onBlur={(e) => formik.handleBlur(e)}
                  disabled={true}
                />
              </Grid>
              <Grid size={6} mt={1}>
                <InputField
                  name="address4"
                  data-testid="address4"
                  label={globalMessages.address4}
                  placeholder={globalMessages.address4}
                  shrink={true}
                  autoComplete="off"
                  value={formik.values.address4}
                  onChange={formik.handleChange}
                  onBlur={(e) => formik.handleBlur(e)}
                  disabled={true}
                />
              </Grid>
              <Grid size={6} mt={1}>
                <InputField
                  name="address5"
                  data-testid="address5"
                  label={globalMessages.address5}
                  placeholder={globalMessages.address5}
                  shrink={true}
                  autoComplete="off"
                  value={formik.values.address5}
                  onChange={formik.handleChange}
                  onBlur={(e) => formik.handleBlur(e)}
                  disabled={true}
                />
              </Grid>
              <Grid size={6} mt={1}>
                <InputField
                  name="address6"
                  data-testid="address6"
                  label={globalMessages.address6}
                  placeholder={globalMessages.address6}
                  shrink={true}
                  autoComplete="off"
                  value={formik.values.address6}
                  onChange={formik.handleChange}
                  onBlur={(e) => formik.handleBlur(e)}
                  disabled={true}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      )}
    </>
  );
};

export default AccountDetails;
