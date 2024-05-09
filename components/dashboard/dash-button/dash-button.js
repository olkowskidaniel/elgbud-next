import React from "react";
import css from "./dash-button.module.css";

const DashButton = ({ children, type, onClick, disabled, style }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={css.container}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default DashButton;
