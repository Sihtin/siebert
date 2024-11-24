import { createSlice } from "@reduxjs/toolkit";

const initialSelectedPath = {
  selectedPath: "/",
};

const selectedItemSlice = createSlice({
  name: "selectedPath",
  initialState: initialSelectedPath,
  reducers: {
    setSelectedPath: (state, action) => {
      state.selectedPath = action.payload;
    },
  },
});

export const { setSelectedPath } = selectedItemSlice.actions;
export const selectedPathReducer = selectedItemSlice.reducer;
