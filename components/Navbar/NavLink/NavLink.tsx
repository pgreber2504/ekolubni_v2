import React from "react";
import { Link } from "react-scroll";
import classes from "./NavLink.module.scss";

type NavLinkPropTypes = {
  id: string;
  title: string;
};

const NavLink = ({ id, title }: NavLinkPropTypes) => {
  return (
    <Link to={id} smooth activeClass={classes.active}>
      <li className={classes.navLink}>{title}</li>
    </Link>
  );
};

export default NavLink;
