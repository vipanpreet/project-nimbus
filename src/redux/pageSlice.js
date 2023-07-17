import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  loading: null,
  presets: [],
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {},
});

export const {} = pageSlice.actions;

export default pageSlice.reducer;
