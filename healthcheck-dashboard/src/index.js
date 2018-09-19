import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainDashboard from "./MainDashboard";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<MainDashboard />, document.getElementById("root"));
registerServiceWorker();
