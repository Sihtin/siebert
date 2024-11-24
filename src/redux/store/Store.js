import { configureStore } from "@reduxjs/toolkit";
import { selectedPathReducer } from "../reducer/SidebarReducer";
import { accountListReducer } from "../reducer/AccountListReducer";
import { auditLogsListReducer } from "../reducer/AuditLogsReducer";
import { accountDetailReducer } from "../reducer/AccountDetailReducer";

export const store = configureStore({
  reducer: {
    selectedPath: selectedPathReducer,
    accountList: accountListReducer,
    accountDetail: accountDetailReducer,
    auditLogsList:auditLogsListReducer,

  },
});
