import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       //middleware
//       console.log("Action type=", action.type);
//       next(action);
//     };
//   };
// };

const logger = (dispatch, getState) => (next) => (action) => {
  //logger code
  if (typeof action !== "function") {
    console.log("Action type=", action.type);
    next(action);
  }
};

// const thunk = (dispatch, getState) => (next) => (action) => {
//   if (typeof action == "function") {
//     action(dispatch);
//     return;
//   }
//   next(action);
// };

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
