import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import searchReducer from "./app/searchSlice";
import robotReducer from "./app/robotSlice";

import "./index.css";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    search: searchReducer,
    robot: robotReducer,
  },
});
// const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
