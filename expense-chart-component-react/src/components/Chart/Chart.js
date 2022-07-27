import React, { useRef } from "react";
import Bar from "../Bar/Bar";
import "./Chart.css";

export default function Chart({ data }) {
  const maxAmount = () => {
    return Math.max(...data.map((el) => el.amount));
  };

  const refHeight = useRef();

  const maxHeight = () => {
    return 100;
  };

  return (
    <div className="chart-container" ref={refHeight}>
      {data &&
        data.map((el) => {
          return (
            <Bar
              key={el.day}
              day={el.day}
              amount={el.amount}
              maxAmount={maxAmount()}
              isMaxAmount={maxAmount() === el.amount}
              maxHeight={refHeight.current.clientHeight}
            />
          );
        })}
    </div>
  );
}
