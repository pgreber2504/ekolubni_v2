import React, { useState } from "react";
import classes from "./ExpandableItem.module.scss";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import { AnimatePresence, motion } from "framer-motion";

type ExpandableItemTypes = {
  title: string;
  description: string;
  type: string;
};

const ExpandableItem = ({ title, description, type }: ExpandableItemTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const expandedDiv = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ opacity: { duration: 0.5 } }}
    >
      <p>{description}</p>
    </motion.div>
  );
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
          <p>{description}</p>
          <Button title="Zapytaj o więcej" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ExpandableItem;
