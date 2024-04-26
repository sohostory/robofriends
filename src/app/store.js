import { configureStore } from "@reduxjs/toolkit";
import { searchRobots } from "./reducers";
import { requestRobots } from "../actions";

export const store = configureStore({
  reducer: {
    searchRobots,
    requestRobots,
  },
});
