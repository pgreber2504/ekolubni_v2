import React from "react";
import classes from "./Workshops.module.scss";
import SectionWrapper from "../../components/UI/SectionWrapper/SectionWrapper";
import { WORKSHOPS_DATA } from "../../constants/workshops-data";
import ExpandableItem from "../../components/ExpandableItem/ExpandableItem";

type WorkshopsPropTypes = {
  id: string;
  title: string;
  description: string;
};

const Workshop = ({ id, title, description }: WorkshopsPropTypes) => {
  return (
    <SectionWrapper id={id} title={title} description={description}>
      <div className={classes.workshops}>
        {WORKSHOPS_DATA.map((el, i) => (
          <ExpandableItem
            key={i}
            id={el.id}
            title={el.title}
            heading={el.heading}
            description={el.description}
            type={el.type}
            footer={el.footer}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Workshop;
