import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import rootReducer from "./reducers";

const store = configureStore(
  { reducer: rootReducer }
  // { devTools: composeWithDevTools() }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </NextUIProvider>
  </React.StrictMode>
);
