import React from "react";
import logo from "../photos/money-logo.png";

export default function  () {
  return (
    <header id="header">
      <img src={logo} alt="Logo of a hand holding a coin" />   
      <h1>Investment Calculator</h1>
    </header>
  );
}
