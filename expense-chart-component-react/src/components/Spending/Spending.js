import React from "react";
import Chart from "../Chart/Chart";
import Summary from "../Summary/Summary";
import "./Spending.css";

export default function Spending({ spendings }) {
  const getTotalAmount = () => {
    return spendings.reduce((a, b) => a + b.amount, 0);
  };

  return (
    <div className="spenging-container">
      <h1>Spending - Last 7 days</h1>
      <Chart data={spendings} />
      <Summary totalAmount={getTotalAmount()} />
    </div>
  );
}
