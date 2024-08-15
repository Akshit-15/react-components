import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
//import FetchDataComponent from "./FetchDataComponent";
//import WeatherApi from "./WeatherApi";
//import IntervalComponent from "./IntervalComponent";
//import ControlledInput from "./ControlledInput";
//import UncontrolledForm from "./UncontrolledForm";
//import LoginComponent from "./LoginComponent";
//import TextStyler from "./TextStyler";
//import LowercaseCounter from "./LowercaseCounter";
import ThirdChar from "./ThirdCharacterDisplay";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThirdChar />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
