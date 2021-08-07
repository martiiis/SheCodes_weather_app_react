/** @format */

import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-header">
        <h1 className="pageTitle">What's the weather like?</h1>
        <img src="images/header.png" alt="icons" className="image-header" />
      </div>
      <div className="container-fluid">
        <Weather defaultCity="Tel Aviv" />
      </div>
      <Footer />
    </div>
  );
}
