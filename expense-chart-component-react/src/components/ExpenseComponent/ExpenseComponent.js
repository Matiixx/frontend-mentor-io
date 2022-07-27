import React, { useEffect, useState } from "react";
import "./ExpenseComponent.css";

import dataJSON from "../../data.json";
import Balance from "../Balance/Balance";
import Spending from "../Spending/Spending";

export default function ExpenseComponent() {
  const [spendings, setSpendings] = useState([]);

  useEffect(() => {
    console.log(dataJSON);
    setSpendings(dataJSON);
    return () => {
      setSpendings([]);
    };
  }, []);
  return (
    <div className="expense-component">
      <Balance balance={921.48} />
      <Spending spendings={spendings} />
    </div>
  );
}
