import { configureStore } from "@reduxjs/toolkit";
import { selectedPathReducer } from "../reducer/SidebarReducer";

export const store = configureStore({
  reducer: {
    selectedPath: selectedPathReducer,
  },
});
