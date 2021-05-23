import React from "react";
import ReactDOM from "react-dom";
import "../src/assets/style/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LanguageWrapper from "../src/components/LenguageWrapper";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <LanguageWrapper>
      <App />
    </LanguageWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
