import React from "react";
import { useStateValue } from "./StateProvider";
import "./SubTotal.css";

function SubTotal({ checkout }) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <div className="checkout__info">
        <p>
          SubTotal ({basket?.length} items): ${checkout} <strong></strong>
        </p>
        <div className="checkbox__container">
          <input type="checkbox" className="checkbox" />
          <p>This order contains a gift</p>
        </div>
        <button className="checkout__button">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default SubTotal;
