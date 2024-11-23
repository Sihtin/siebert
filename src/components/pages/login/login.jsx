import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import InputField from "../../formUI/InputField";
import { globalMessages } from "../../../util/constant/StringConstants";
import { useFormik } from "formik";
import { Card, CardContent, Typography } from "@mui/material";
import ButtonWithIcon from "../../formUI/ButtonWithIcon";
import loginPageStyle from "./loginPageStyle";
import { loginApi } from "../../controllers/LoginController";
import CenterCircularBar from "../../customComponents/centercircularbar/CenterCircularBar";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const handleLogin = async (data) => {
    setLoading(true);
    let loginData = {
      username: data.userName,
      password: data.password,
    };
    const loginResponse = await loginApi(loginData);
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
          <Grid container justifyContent={"center"} alignContent={"center"} padding={20}>
            <Card sx={loginPageStyle.cardStyle}>
              <CardContent>
                <Grid size={12} mt={1.5}>
                  <Typography sx={loginPageStyle.heading}>{globalMessages.loginPageHeading}</Typography>
                </Grid>
                <Grid mt={1}>
                  <InputField
                    name="userName"
                    data-testid="userName"
                    label={globalMessages.userName}
                    placeholder={globalMessages.enterUserName}
                    shrink={true}
                    autoComplete="off"
                    value={formik.values.jobTitle}
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
                    value={formik.values.jobTitle}
                    sx={loginPageStyle.heading}
                    onChange={formik.handleChange}
                    onBlur={(e) => formik.handleBlur(e)}
                  />
                </Grid>
                <Grid mt={2} size={12}>
                  <ButtonWithIcon type={"submit"} sx={loginPageStyle.loginButtonStyle} fullWidth={true}>
                    {globalMessages.loginButton}
                  </ButtonWithIcon>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </form>
      )}
    </>
  );
};

export default Login;
