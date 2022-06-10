import React from "react";
import classes from "./NavLinks.module.scss";

import { NAV_DATA } from "../../../constants/nav-data";
import NavLink from "../NavLink/NavLink";

const NavLinks = () => {
  return (
    <ul className={classes.navLinks}>
      {NAV_DATA.map((el) => (
        <NavLink key={el.id} title={el.title} id={el.id} />
      ))}
    </ul>
  );
};

export default NavLinks;
