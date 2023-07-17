import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import pageReducer from "./pageSlice";

export default configureStore({
  reducer: {
    userState: userReducer,
    pageState: pageReducer,
  },
});
