import React from "react";
import "./CheckoutScreen.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../CheckoutProduct";
import SubTotal from "../Subtotal";

function CheckoutScreen() {
  const [{ basket }, dispatch] = useStateValue();

  let totalCost = 0;

  const checkout = basket.map((item) => {
    totalCost = totalCost + parseInt(item.price);
    return totalCost;
  });

  return (
    <div className="checkout__screen">
      <div className="checkout__left">
        <div className="basket__header">
          <img
            src="https://newsroom.aaa.com/wp-content/uploads/2022/07/22-1212-FIN-Credit-Card-Program-FAQ-Header-scaled.jpg"
            alt=""
            className="header__image"
          />
          {basket?.length === 0 ? (
            <div>
              <h3 className="header__title">Your Shopping Basket is Empty</h3>
              <p>
                You have no items in the basket. To buy one or more items, click
                "Add to basket" next to the item.
              </p>
            </div>
          ) : (
            <div>
              <h3>Your Shopping Basket</h3>
            </div>
          )}
        </div>

        {basket?.map((item) => {
          return (
            <CheckoutProduct
              price={item.price}
              title={item.title}
              image={item.image}
              rating={item.rating}
              id={item.id}
            />
          );
        })}
      </div>
      <div className="checkout__right">
        {basket?.length !== 0 && <SubTotal checkout={checkout} />}
      </div>
    </div>
  );
}

export default CheckoutScreen;
