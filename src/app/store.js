import { configureStore } from "@reduxjs/toolkit";
import { searchRobots } from "./reducers";
import { requestRobots } from "./actions";

import { createLogger } from "redux-logger";

const logger = createLogger();
export const store = configureStore({
  reducer: {
    searchRobots,
    requestRobots,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
