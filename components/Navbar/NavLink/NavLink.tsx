import React from "react";
import classes from "./NavLink.module.scss";

type NavLinkPropTypes = {
  id: string;
  title: string;
};

const NavLink = ({ id, title }: NavLinkPropTypes) => {
  return (
    <li className={classes.navLink} id={id}>
      {title}
    </li>
  );
};

export default NavLink;
