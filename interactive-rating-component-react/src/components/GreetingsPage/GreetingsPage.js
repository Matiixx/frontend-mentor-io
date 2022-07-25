import React from "react";
import "./GreetingsPage.css";
import greetingsImage from "../../images/illustration-thank-you.svg";

export default function GreetingsPage({ selectedGrade }) {
  return (
    <div className="greetings-container">
      <img src={greetingsImage} alt="greetings" />
      <div className="selected-grade">
        You selected {selectedGrade} out of 5
      </div>
      <h1 className="greetings-h1">Thank you!</h1>
      <p className="greetings-p">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hestitate to get in touch!
      </p>
    </div>
  );
}
