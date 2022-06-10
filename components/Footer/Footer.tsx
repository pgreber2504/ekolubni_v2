import React from "react";
import classes from "./Footer.module.scss";
import Logo from "../UI/Logo/Logo";
import FooterNavLinks from "./FooterNavLinks/FooterNavLinks";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Logo className={classes["footer--logo"]} />
      <FooterNavLinks />
      <p>Copyright by Przemysław Greber</p>
    </footer>
  );
};

export default Footer;
