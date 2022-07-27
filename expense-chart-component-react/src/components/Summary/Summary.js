import React from "react";
import "./Summary.css";
import CountUp from "react-countup";

export default function Summary({ totalAmount }) {
  return (
    <div className="summary-container">
      <div className="total-amount-containter">
        <span>Total this week</span>
        <h1 className="amount-h1">
          {"$"}
          <CountUp
            start={0}
            end={totalAmount}
            decimals={2}
            style={{ color: "hsl(25, 47%, 15%)" }}
            duration={0.6}
          />
        </h1>
      </div>
      <div className="summary-change">
        <h4>{"+2.4%"}</h4>
        <span>form last week</span>
      </div>
    </div>
  );
}
