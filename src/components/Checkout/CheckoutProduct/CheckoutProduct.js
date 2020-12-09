import React from "react";
import "./CheckoutProduct.css";
import { useStataValue } from "../../../store/context/StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating, imgTitle }) => {
  const [, dispatch] = useStataValue();
  const removeFromBasketHandler = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={imgTitle} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <span role="img" aria-label="image">
                  ⭐️
                </span>
              </p>
            ))}
        </div>
        <button onClick={removeFromBasketHandler}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
