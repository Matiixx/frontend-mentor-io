import React from "react";
import "./VoteButton.scss";
import plusImage from "../../../../images/icon-plus.svg";
import minusImage from "../../../../images/icon-minus.svg";

export default function VoteButton({ score }) {
  return (
    <div className="vote">
      <div className="vote-btn up">
        <img src={plusImage} alt="VoteUp" />
      </div>
      <p>{score}</p>
      <div className="vote-btn down">
        <img src={minusImage} alt="VoteDown" />
      </div>
    </div>
  );
}
