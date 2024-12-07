import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import Storage from "./Contexts/StorageContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <GlobalStyles>
      <Storage>
        <App />
      </Storage>
    </GlobalStyles>
  </React.Fragment>
);
