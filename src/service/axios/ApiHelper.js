/* eslint-disable no-unused-vars */
import axios from "axios";
import Cookies from "js-cookie";

import { errorCodes } from "@/app/util/constant/apiErrorConstants";
import { routingUrl } from "@/app/util/constant/UrlConstants";

const navigate = (path) => {
  window.location.href = `${window.location.origin}/${path}`;
};

// Replace enum with an object for API methods
const apiMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
};

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (request) => {
    return request;
  },
  (error) => {
    if (error?.response?.status === statusCode.internal_server_error) {
      navigate(routingUrl.internalServerErrorURL);
    } else if (error?.response?.status === statusCode.server_error) {
      navigate(routingUrl.serverDown);
    } else if (error?.response?.status === statusCode.unauthorized_user) {
      if (error?.response?.data?.messageCode !== errorCodes.er004) {
        navigate(routingUrl.loginURL);
        Cookies.remove("validUser");
      }
      return error?.response;
    }
    return error?.response;
  },
);

export const apiCall = async (params) => {
  let authHeader = {
    Authorization: `Bearer ${Cookies.get("token") ?? ""}`,
    AuthorizationRefresh: `Bearer ${Cookies.get("refresh_token") ?? ""}`,
  };
  switch (params.method) {
    case apiMethods.GET: {
      const response = await axiosInstance({
        method: params.method,
        url: params.endPoint,
        headers: authHeader,
      });
      const refreshToken = response?.headers["refresh_token"];
      const token = response?.headers["token"];
      if (token && refreshToken) {
        Cookies.set("token", token);
        Cookies.set("refresh_token", refreshToken);
      }
      return { data: response?.data, status: response?.status };
    }
    case apiMethods.POST:
    case apiMethods.PATCH:
    case apiMethods.PUT: {
      const response = await axiosInstance({
        method: params.method,
        url: params.endPoint,
        data: params.data,
        headers: authHeader,
      });
      return { data: response?.data, status: response?.status };
    }
  }
};

// Status codes remain the same
export const statusCode = {
  success: 200,
  inserted: 201,
  bad_request: 400,
  not_found: 404,
  internal_server_error: 500,
  unauthorized_user: 401,
  server_error: 503,
};
