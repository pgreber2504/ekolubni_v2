import React from "react";
import classes from "./FooterNavLink.module.scss";

type FooterNavLinkPropTypes = {
  title: string;
};

const FooterNavLink = ({ title }: FooterNavLinkPropTypes) => {
  return <li className={classes["footer--link"]}>{title}</li>;
};

export default FooterNavLink;
