import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

export const Context = createContext();



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router >
    <App />
  </Router>
);
