import React from "react";
import Image from "next/image";
import classes from "./Logo.module.scss";
import { LOGO_DATA } from "../../../constants/logo-data";

type LogoPropTypes = {
  className?: string;
};

const Logo = ({ className }: LogoPropTypes) => {
  const allClasses = className ? `${classes.logo} ${className}` : classes.logo;

  return (
    <div className={allClasses}>
      <Image layout="fill" src={LOGO_DATA.src} alt={LOGO_DATA.alt} />
    </div>
  );
};

export default Logo;
