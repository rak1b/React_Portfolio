import React from "react";
import ReactDOM from "react-dom";
import PortApp from "./PortApp";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <PortApp />
  </Router>,
  document.getElementById("root")
);
