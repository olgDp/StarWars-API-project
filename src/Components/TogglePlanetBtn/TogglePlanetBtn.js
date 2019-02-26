import React from "react";
import "./TogglePlanetBtn.css";

const TogglePlanetBtn = ({ onTogglePlanet }) => {
  return (
    <button
      type="button"
      className="TogglePlanetBtn btn btn-secondary"
      onClick={onTogglePlanet}
    >
      Toggle random StarWars item
    </button>
  );
};

export default TogglePlanetBtn;
