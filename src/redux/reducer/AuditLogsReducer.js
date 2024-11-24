import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCall, apiMethods } from "../../service/axios/ApiHelper";
import { apiEndPoints } from "../../util/constant/UrlConstants";

const initialState = {
  data: [],
  isFetched: false,
  isLoading: true,
  error: null,
};

export const getAuditLogsList = createAsyncThunk("fetchAuditLogsList", async () => {
    return apiCall({
      method:apiMethods.GET,
      endPoint:apiEndPoints.getAuditLogs
    })
  });

const auditLogsListSlice = createSlice({
    name: "auditLogsList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getAuditLogsList.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(getAuditLogsList.fulfilled, (state, action) => {
          state.data = action.payload;
          state.isLoading = false;
          state.isFetched = true;
          state.error = null;
        })
        .addCase(getAuditLogsList.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export const auditLogsListReducer = auditLogsListSlice.reducer;
