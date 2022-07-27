import React from "react";
import Chart from "../Chart/Chart";
import "./Spending.css";

export default function Spending({ spendings }) {
  return (
    <div className="spenging-container">
      <h1>Spending - Last 7 days</h1>
      <Chart data={spendings} />
    </div>
  );
}
