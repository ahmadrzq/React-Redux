import { configureStore } from "@reduxjs/toolkit";
import TestReducer from "./Reducers/TestReducer";

export const store = configureStore({
  reducer: {
    TestReducer
  },
});
