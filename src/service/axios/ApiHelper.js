/* eslint-disable no-unused-vars */
import axios from "axios";
import Cookies from "js-cookie";

import { errorCodes } from "../../util/constant/apiErrorConstants";
import { routingUrl } from "../../util/constant/UrlConstants";

const navigate = (path) => {
  window.location.href = `${window.location.origin}/${path}`;
};

// Replace enum with an object for API methods
export const apiMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
};

export const axiosInstance = axios.create({
  baseURL:  process.env.REACT_APP_SERVER_URL,
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
  switch (params.method) {
    case apiMethods.GET: {
      const response = await axiosInstance({
        method: params.method,
        url: params.endPoint,
      });
      return { data: response?.data, status: response?.status };
    }
    case apiMethods.POST:
    case apiMethods.PATCH:
    case apiMethods.PUT: {
      const response = await axiosInstance({
        method: params.method,
        url: params.endPoint,
        data: params.data,
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
