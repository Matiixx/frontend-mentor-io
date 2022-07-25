import React from "react";
import "./Grade.css";

export default function Grade({ gradeNumber, handleClick, isSelected }) {
  return (
    <div
      className={`grade-circle ${isSelected ? "selected" : ""}`}
      onClick={() => handleClick(gradeNumber)}
    >
      {gradeNumber}
    </div>
  );
}
