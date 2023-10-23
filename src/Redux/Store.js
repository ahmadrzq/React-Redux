import { configureStore } from "@reduxjs/toolkit";
import TestReducer from "./Reducers/TestReducer";
import TestReducerCopy from "./Reducers/TestReducerCopy";

export const store = configureStore({
  reducer: {
    TestReducer,
    TestReducerCopy,
  },
});
