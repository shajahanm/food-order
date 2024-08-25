import React, { useContext } from "react";
import Modal from "./UI/Modal";
import { CartContext } from "../state/CartContext";

import Button from "./UI/Button";
import UserProgressContext from "../state/UserProgressContext";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);
  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id} className="cart-item">
            <p>
              {item.name} - {item.quantity} * {item.price}
            </p>
            <p className="cart-item-actions">
              <button onClick={() => cartCtx.removeItem(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => cartCtx.addItem(item)}>+</button>
            </p>
          </li>
        ))}
      </ul>
      <p className="cart-total">{cartTotal}</p>
      <p className="modal-actions">
        <Button onClick={userProgressCtx.hideCart} textOnly>
          Close
        </Button>
        {cartCtx.items.length > 0 && <Button>Go to Checkout</Button>}
      </p>
    </Modal>
  );
};

export default Cart;
