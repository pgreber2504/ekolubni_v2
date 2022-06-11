import React from "react";
import { Link } from "react-scroll";
import classes from "./NavLink.module.scss";

type NavLinkPropTypes = {
  id: string;
  title: string;
};

const NavLink = ({ id, title }: NavLinkPropTypes) => {
  return (
    <Link to={id}>
      <li className={classes.navLink} id={id}>
        {title}
      </li>
    </Link>
  );
};

export default NavLink;
