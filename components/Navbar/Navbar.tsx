import React from "react";
import Button from "../UI/Button/Button";
import Logo from "../UI/Logo/Logo";
import classes from "./Navbar.module.scss";
import NavLinks from "./NavLinks/NavLinks";

const Navbar = () => {
  const clickButtonHandler = () => {};

  return (
    <nav className={classes.navbar}>
      <Logo />
      <NavLinks />
      <Button title={"Zapisz się już teraz"} onClick={clickButtonHandler} />
    </nav>
  );
};

export default Navbar;
