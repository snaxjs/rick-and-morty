import React from "react";
import App from "./app";
import "./scss/index.scss";
import { Provider } from "react-redux";
import { store } from "./store";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
