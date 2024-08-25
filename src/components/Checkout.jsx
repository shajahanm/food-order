import React from "react";
import Modal from "./UI/Modal";
import Input from "./UI/Input";
import Button from "./UI/Button";

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);
  return (
    <Modal>
      <form action="">
        <h2>Checkout</h2>
        <p>Total Amount:{cartTotal}</p>
        <Input id={"full-name"} label={"Full Name"} type={"text"} />
        <Input id={"email"} label={"Email"} type={"email"} />
        <Input id={"street"} label={"Street"} type={"text"} />
        <div className="control-row">
          <Input id={"postal-code"} label={"Postal Code"} type={"text"} />
          <Input id={"city"} label={"City"} type={"text"} />
        </div>
        <div className="modal-action">
          <Button textOnly type={"button"}>
            Close
          </Button>
          <Button>Submit</Button>
        </div>
      </form>
    </Modal>
  );
};

export default Checkout;
