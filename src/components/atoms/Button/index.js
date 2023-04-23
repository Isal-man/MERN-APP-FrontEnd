import React from "react";
import "./button.scss";

const Button = ({ title, color, ...rest }) => {
  const buttonColor = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    danger: "btn-danger",
    success: "btn-success",
    info: "btn-info",
    warning: "btn-warning",
  };
  
  const colorSet = buttonColor[color || 'primary'];

  return (
    <button className={`button ${colorSet}`} {...rest}>
      {title}
    </button>
  );
};

export default Button;
