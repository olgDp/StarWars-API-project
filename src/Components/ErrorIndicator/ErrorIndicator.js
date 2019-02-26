import React from "react";
import "./ErrorIndicator.css";
import icon from "./death-star.svg";

const ErrorIndicator = () => {
  return (
    <div className="ErrorIndicator">
      <img src={icon} alt="error svg icon" width="64" />
      <h2>BOOM!</h2>
      <p>
        Something has gone terribly wrong
        <br />
        But we already sent droids to fix it.
      </p>
    </div>
  );
};

export default ErrorIndicator;
