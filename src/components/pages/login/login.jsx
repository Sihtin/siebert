import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import InputField from "../../formUI/InputField";
import { globalMessages } from "../../../util/constant/StringConstants";
import { useFormik } from "formik";
import { Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import ButtonWithIcon from "../../formUI/ButtonWithIcon";
import loginPageStyle from "./loginPageStyle";
import { logInApi } from "../../controllers/LoginController";
import CenterCircularBar from "../../customComponents/centercircularbar/CenterCircularBar";
import { statusCode } from "../../../service/axios/ApiHelper";
import { saveToLocalStorage } from "../../../util/common/LocalStorageUtils";
import { useNavigate } from "react-router-dom";
import { routingUrl } from "../../../util/constant/UrlConstants";
import { assetKeys } from "../../../util/constant/AssetsConstants";
import { toast } from "react-toastify";

const Login = () => {
  const router = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [loading, setLoading] = useState(false);
  const handleLogin = async (data) => {
    setLoading(true);
    let loginData = {
      username: data.userName,
      password: data.password,
    };
    const loginResponse = await logInApi(loginData);
    if (loginResponse?.status === statusCode.success) {
      setLoading(true);
      saveToLocalStorage("isValidUser", true);
      router(routingUrl.dashboard);
    } else {
      setLoading(false);
      saveToLocalStorage("isValidUser", false);
      toast.error(globalMessages.invalidUser)
      router(routingUrl.login);
    }
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      handleLogin(values);
    },
  });
  return (
    <>
      {loading ? (
        <CenterCircularBar />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <Grid container height={"100vh"}>
            {!isMobile && (
              <Grid size={5}>
                <Grid height={"100vh"} container>
                <img src={assetKeys.loginPageImage} alt="Login Page Image" />
                </Grid>
              </Grid>
            )}
            <Grid size={isMobile ? 12 : 7} sx={loginPageStyle.loginFormGridStyle}>
              <Grid container spacing={2} padding={isMobile ? 5 : 0}>
                <Grid size={12} height={isMobile ? 150 : 200} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                  <img src={assetKeys.siebertLogo} alt={"sidebar Logo"} width={160}/>
                </Grid>
                <Grid size={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Card sx={loginPageStyle.cardStyle}>
                  <CardContent>
                    <Grid size={12} mt={1.5}>
                      <Typography sx={loginPageStyle.heading}>{globalMessages.loginPageHeading.toLocaleUpperCase()}</Typography>
                    </Grid>
                    <Grid mt={1}>
                      <InputField
                        name="userName"
                        data-testid="userName"
                        label={globalMessages.userName}
                        placeholder={globalMessages.enterUserName}
                        shrink={true}
                        autoComplete="off"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={(e) => formik.handleBlur(e)}
                      />
                    </Grid>
                    <Grid mt={1.5}>
                      <InputField
                        name="password"
                        data-testid="password"
                        label={globalMessages.password}
                        placeholder={globalMessages.enterPassword}
                        shrink={true}
                        autoComplete="off"
                        value={formik.values.password}
                        sx={loginPageStyle.heading}
                        onChange={formik.handleChange}
                        onBlur={(e) => formik.handleBlur(e)}
                      />
                    </Grid>
                    <Grid mt={2} mb={1.5} size={12}>
                      <ButtonWithIcon type={"submit"} sx={loginPageStyle.loginButtonStyle} fullWidth={true}>
                        {globalMessages.loginButton}
                      </ButtonWithIcon>
                    </Grid>
                  </CardContent>
                </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      )}
    </>
  );
};

export default Login;
