import React from "react";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
