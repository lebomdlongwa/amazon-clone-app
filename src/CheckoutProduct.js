import React from "react";
import { useStateValue } from "./StateProvider";
import StarIcon from "@mui/icons-material/Star";
import "./CheckoutProduct.css";

function CheckoutProduct({ price, rating, title, image, id }) {
  const [state, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  return (
    <div className="checkout__item">
      <img src={image} alt="" className="checkout__ItemImage" />

      <div className="item__info">
        <h4 className="item__description">{title}</h4>
        <div className="item__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <StarIcon className="product__rating__star" />
            ))}
        </div>
        <button className="removeFromBasket__button" onClick={removeFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
