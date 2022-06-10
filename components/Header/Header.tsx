import React from "react";
import classes from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

const Header = () => {
  return (
    <header className={classes.header}>
      <Navbar></Navbar>
      <Hero />
    </header>
  );
};

export default Header;
