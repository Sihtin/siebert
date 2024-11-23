import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCall, apiMethods } from "../../service/axios/ApiHelper";
import { apiEndPoints } from "../../util/constant/UrlConstants";

const initialState = {
  data: [],
  isFetched: false,
  isLoading: true,
  error: null,
};

export const getAccountList = createAsyncThunk("fetchAccountList", async () => {
  return apiCall({
    method:apiMethods.GET,
    endPoint:apiEndPoints.getAccount
  })
});

const accountListSlice = createSlice({
  name: "accountManagementList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAccountList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAccountList.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.isFetched = true;
        state.error = null;
      })
      .addCase(getAccountList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const accountListReducer = accountListSlice.reducer;
