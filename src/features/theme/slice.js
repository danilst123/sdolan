import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTheme: "viol",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state, action) {
      state.selectedTheme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
