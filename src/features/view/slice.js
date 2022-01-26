import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  viewScrolled: false,
};

const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    toggleViewScrolled(state, action) {
      state.viewScrolled = action.payload;
    },
  },
});

export const { toggleViewScrolled } = viewSlice.actions;
export default viewSlice.reducer;
