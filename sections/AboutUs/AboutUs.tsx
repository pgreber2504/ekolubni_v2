import Image from "next/image";
import React from "react";
import classes from "./AboutUs.module.scss";
import Card from "../../components/UI/Card/Card";
import SectionWrapper from "../../components/UI/SectionWrapper/SectionWrapper";
import { ABOUT_US_DATA } from "../../constants/about-us-data";

type AboutUsPropTypes = {
  id: string;
  title: string;
  description: string;
  aboutUsDescription: string;
};

const AboutUs = ({
  id,
  title,
  description,
  aboutUsDescription,
}: AboutUsPropTypes) => {
  return (
    <SectionWrapper id={id} title={title} description={description}>
      <p className={classes["about--desc"]}>{aboutUsDescription}</p>
      {ABOUT_US_DATA.map((el, i) => (
        <div className={classes["about--item"]} key={i}>
          <Card className={classes["about--item_photo"]}>
            <Image layout="fill" src={el.img} alt="eeasd" />
          </Card>
          <div className={classes["about--item_desc"]}>
            <h4>{el.name}</h4>
            <p>{el.description}</p>
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default AboutUs;
