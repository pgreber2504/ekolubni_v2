import React, { ReactNode } from "react";
import classes from "./SectionWrapper.module.scss";

type SectionWrapperPropTypes = {
  id: string;
  title?: string;
  description?: string;
  children?: ReactNode;
};

const SectionWrapper = ({
  id,
  title,
  description,
  children,
}: SectionWrapperPropTypes) => {
  const newTitle = title ? title.toUpperCase() : "";

  return (
    <section id={id} className={classes.section}>
      <h2>{newTitle}</h2>
      <h3>{description}</h3>
      <article>{children}</article>
    </section>
  );
};

export default SectionWrapper;
