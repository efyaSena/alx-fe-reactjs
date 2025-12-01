import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";      // imports your App component
import "./index.css";         // imports Tailwind CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />                  // renders your App component
  </React.StrictMode>
);
