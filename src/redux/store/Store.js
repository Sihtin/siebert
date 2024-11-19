import { configureStore } from "@reduxjs/toolkit";
import { selectedPathReducer } from "../reducer/SidebarReducer";
import { accountListReducer } from "../reducer/AccountListReducer";

export const store = configureStore({
  reducer: {
    selectedPath: selectedPathReducer,
    accountList: accountListReducer,
  },
});
