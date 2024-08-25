import React, { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import { CartContext } from "../state/CartContext";
import UserProgressContext from "../state/UserProgressContext";
const Header = () => {
  const carCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalItems = carCtx.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header" id="main-header">
      <div id="title">
        <img src={logo} alt="" />
        <h1>Food</h1>
      </div>
      <nav>
        <Button onClick={userProgressCtx.showCart} textOnly={true}>
          cart {totalItems}
        </Button>
      </nav>
    </header>
  );
};

export default Header;
