import React from "react";
import "./Balance.css";
import logo from "../../images/logo.svg";

export default function Balance({ balance }) {
  return (
    <div className="balance-container">
      <div className="balance-count">
        <span>My balance</span>
        <h2>
          {"$"}
          {balance}
        </h2>
      </div>
      <img src={logo} alt="logo" />
    </div>
  );
}
