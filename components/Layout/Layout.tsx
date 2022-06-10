import React, { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type LayoutPropTypes = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutPropTypes) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
