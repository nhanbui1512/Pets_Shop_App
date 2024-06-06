import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./GlobalStyles";
import Storage from "./Contexts/StorageContext";
import { isMobile } from "react-device-detect";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <GlobalStyles>
      <Storage>
        {isMobile ? (
          <div
            style={{
              display: "flex",
              height: "100vh",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Only Support Desktop UI
          </div>
        ) : (
          <App />
        )}
      </Storage>
    </GlobalStyles>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
