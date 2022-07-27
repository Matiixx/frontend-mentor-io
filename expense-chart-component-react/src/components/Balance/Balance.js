import React from "react";
import "./Balance.css";
import logo from "../../images/logo.svg";
import CountUp from "react-countup";

export default function Balance({ balance }) {
  return (
    <div className="balance-container">
      <div className="balance-count">
        <span style={{ color: "hsl(33, 100%, 98%)" }}>My balance</span>
        <h2>
          {"$"}
          <CountUp
            start={0}
            end={balance}
            decimals={2}
            style={{ color: "hsl(33, 100%, 98%)" }}
            duration={0.6}
          />
        </h2>
      </div>
      <img src={logo} alt="logo" />
    </div>
  );
}
