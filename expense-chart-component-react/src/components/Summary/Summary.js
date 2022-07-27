import React from "react";
import "./Summary.css";

export default function Summary({ totalAmount }) {
  return (
    <div className="summary-container">
      <div className="total-amount-containter">
        <span>Total this week</span>
        <h1 className="amount-h1">
          {"$"}
          {totalAmount}
        </h1>
      </div>
      <div className="summary-change">
        <h4>{"+2.4%"}</h4>
        <span>form last week</span>
      </div>
    </div>
  );
}
