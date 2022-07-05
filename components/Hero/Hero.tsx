import Image from "next/image";
import React from "react";
import { HERO_IMAGES_DATA } from "../../constants/images-data";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <h1>Ekologiczne warsztaty mobilne</h1>
      <p>
        Jeśli Państwa podopieczni źle znoszą jazdę komunikacją miejską, ich
        zachowanie w autobusie jest dalekie od ideału, cena autokaru jest poza waszym budżetem lub macie grupę/klasę integracyjną z dziećmi z
        różnymi deficytami… <br />
        Ekolubni przyjadą do WAS
      </p>
      <Button onClick={() => {}} title={"Skontaktuj się z nami"} />
    </div>
  );
};

export default Hero;
