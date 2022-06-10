import React, { ReactNode } from "react";
import classes from "./SectionWrapper.module.scss";

type SectionWrapperPropTypes = {
  title: string;
  description: string;
  children?: ReactNode;
};

const SectionWrapper = ({
  title,
  description,
  children,
}: SectionWrapperPropTypes) => {
  return (
    <section className={classes.section}>
      <h2>{title.toUpperCase()}</h2>
      <h3>{description}</h3>
      <article>{children}</article>
    </section>
  );
};

export default SectionWrapper;
