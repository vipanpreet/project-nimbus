import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BACK_URI } from "../config";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (obj, { dispatch, getState, rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BACK_URI}/api/users/login/admin`, obj);
      localStorage.setItem("userInfo", JSON.stringify(data));
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

let initialState = {
  userInfo: {
    success: true,
    token:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmM0Y2EyM2EwNWFhYzZjMTRhMGRlNCIsImlhdCI6MTY3ODA4NDU0OSwiZXhwIjoxNjc5MzgwNTQ5fQ.GfK8X1FKdxVjhxZOKoDAW4TKG8VK4k8dweUgkrN5vHk",
    phoneNumber: "7009558130",
    role: "ROLE_CUSTOMER",
    numProfiles: 0,
  },
  loading: false,
  error: null,
};

if (typeof window !== "undefined") {
  var userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
}

if (userInfoFromStorage) {
  initialState.userInfo = userInfoFromStorage;
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
