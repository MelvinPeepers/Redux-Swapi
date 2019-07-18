import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";
import "./index.css";
import App from "./App";
// needed dependancies
// applyMiddleware from redux added
// thunk from redux-thunk added
// logger from redux-logger add
// rootReducer from ./reducers added
// added compose

const store = createStore(
  rootReducer,
  compose(
    /* applyMiddleware goes here */
    applyMiddleware(thunk, logger),

    // Redux DevTool
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
