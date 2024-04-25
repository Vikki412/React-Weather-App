import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Weather from "./Weather";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Weather city="Kyiv" />
    <footer>
      This project was coded by{" "}
      <a
        href="https://www.linkedin.com/in/viktoriia-prokipchuk-4123862a1/"
        target="_blank"
        rel="noreferrer"
      >
        Viktoriia Prokipchuk
      </a>{" "}
      and is open-sourced on{" "}
      <a
        href="https://github.com/Vikki412/React-Weather"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>{" "}
      and is hosted on{" "}
      <a
        href="https://react-weather-app-vikki-proki.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Netlify{" "}
      </a>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
