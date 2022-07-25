import React from "react";
import "./LogoStar.css";
import logoStar from "../../images/icon-star.svg";

export default function LogoStar() {
  return (
    <div className="logo-container">
      <img src={logoStar} alt="logo" />
    </div>
  );
}
