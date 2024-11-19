import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { accountData } from "../../components/pages/accountManagement/emptyAccountData";

const initialState = {
  data: [],
  isFetched: false,
  isLoading: true,
  error: null,
};

export const getAccountList = createAsyncThunk("fetchAccountList", async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(accountData);
    }, 2000);
  });
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
