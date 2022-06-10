import React from "react";
import classes from "./Button.module.scss";

type ButtonPropTypes = {
  title: string;
  onClick: () => void;
};

const Button = ({ title, onClick }: ButtonPropTypes) => {
  return (
    <button className={classes.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
