import React from "react";
import "./Bar.css";

export default function Bar({
  day,
  amount,
  maxAmount,
  isMaxAmount,
  maxHeight,
}) {
  const calculateHeight = () => {
    return (amount / maxAmount) * (maxHeight * 0.65);
  };

  return (
    <div className="chart-bar">
      <div className="amount">
        {"$"}
        {amount}
      </div>
      <div
        className={`bar ${isMaxAmount ? "max-amount" : ""}`}
        style={{ height: calculateHeight() }}
      ></div>
      <span>{day}</span>
    </div>
  );
}
