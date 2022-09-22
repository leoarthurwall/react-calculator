import React from "react";
import "./Button.css";

const Button = ({ symbol, color, handleClick }) => {
  return (
    <button
      className="button-wrapper"
      onClick={() => handleClick(symbol)}
      style={{ backgroundColor: color }}
    >
      {symbol}
    </button>
  );
};
export default Button;
