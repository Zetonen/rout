import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { storeAppState } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={storeAppState}>
      <BrowserRouter basename="/rout/">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
