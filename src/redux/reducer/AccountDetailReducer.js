import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCall, apiMethods } from "../../service/axios/ApiHelper";
import { apiEndPoints } from "../../util/constant/UrlConstants";

const initialState = {
  data: [],
  isFetched: false,
  isLoading: true,
  error: null,
};

export const getAccountDetail = createAsyncThunk("fetchAccountDetail", async (param) => {
    const { accountNumber } = param;
    const endPoint = `${apiEndPoints.getAccount}/${accountNumber}`;
    
    return apiCall({
      method: apiMethods.GET,
      endPoint: endPoint,
    });
  });

const accountDetailSlice = createSlice({
  name: "accountDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAccountDetail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAccountDetail.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.isFetched = true;
        state.error = null;
      })
      .addCase(getAccountDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const accountDetailReducer = accountDetailSlice.reducer;
