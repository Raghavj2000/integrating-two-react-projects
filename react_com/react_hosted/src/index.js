import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

window.renderReact = (rootID) => {
  const root = ReactDOM.createRoot(document.getElementById(rootID));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
