import React from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
const Header = () => {
  return (
    <header className="header" id="main-header">
      <div id="title">
        <img src={logo} alt="" />
        <h1>Food</h1>
      </div>
      <nav>
        <Button textOnly={true}>cart (0)</Button>
      </nav>
    </header>
  );
};

export default Header;
