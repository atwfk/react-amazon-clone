import React from "react";
import "./Product.css";
import { useStataValue } from "../../../store/context/StateProvider";

const Product = ({ id, title, image, price, rating, imgTitle }) => {
  const [, dispatch] = useStataValue();
  const addToBasketHandler = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        alt: imgTitle,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="img" key={i}>
                ⭐️
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt={imgTitle} />
      <button onClick={addToBasketHandler}>Add to basket</button>
    </div>
  );
};

export default Product;
