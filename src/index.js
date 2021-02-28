import React from "react";
import ReactDOM from "react-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { getMovies } from "./services/movies";
import { getCategories } from "./services/categories";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

console.debug(`Category Dump from Fake Service:`, getCategories());
console.debug(`Movie Dump from Fake Service:`, getMovies());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
