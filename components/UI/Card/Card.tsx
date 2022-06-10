import React, { ReactNode } from "react";
import classes from "./Card.module.scss";

type CardPropTypes = {
  className?: string;
  children: ReactNode;
};

const Card = ({ children, className }: CardPropTypes) => {
  const allClasses = className ? `${classes.card} ${className}` : classes.card;

  return <div className={allClasses}>{children}</div>;
};

export default Card;
