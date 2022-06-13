import React, { useState } from "react";
import classes from "./ExpandableItem.module.scss";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import { AnimatePresence, motion } from "framer-motion";
import { WorkshopDataType } from "../../shared/types/types";

const ExpandableItem = ({
  title,
  heading,
  description,
  type,
  footer,
}: WorkshopDataType) => {
  return (
    <div className={classes.card}>
      <div className={`${classes.face} ${classes.face1} ${classes[type]}`}>
        <div className={classes.content}>
          {/* <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" /> */}
          <h4>{title}</h4>
        </div>
      </div>
      <div className={`${classes.face} ${classes.face2}`}>
        <div className={classes.content}>
          <h5>{heading}</h5>
          <ul>
            {description.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
          <p>{footer}</p>
          <Button title="Zapytaj o więcej" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ExpandableItem;
