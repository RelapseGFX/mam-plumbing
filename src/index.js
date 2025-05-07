import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";


ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback="loading...">
      <App />
    </React.Suspense>
  </React.StrictMode>
);
