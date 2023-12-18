import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./Number";

export default configureStore({
  reducer: {
    number: numberReducer,
  },
});
