import React from "react";
import ReactDOM from "react-dom";
// import Users from './components/users';
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App.js";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <Users /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
