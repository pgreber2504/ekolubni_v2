import React from "react";
import { FOOTER_NAV_DATA } from "../../../constants/footer-nav-data";
import FooterNavLink from "../FooterNavLink/FooterNavLink";
import classes from "./FooterNavLinks.module.scss";

const FooterNavLinks = () => {
  return (
    <ul className={classes["footer--links"]}>
      {FOOTER_NAV_DATA.map((el) => (
        <FooterNavLink key={el.id} title={el.title} />
      ))}
    </ul>
  );
};

export default FooterNavLinks;
