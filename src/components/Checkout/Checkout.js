import React from "react";
import { useStataValue } from "../../store/context/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import Subtotal from "./Subtotal/Subtotal";

const Checkout = () => {
  const [{ basket, user }] = useStataValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="advertise"
        />
        <div>
          <h3>{user ? user.email : null}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.length === 0
            ? 'You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.'
            : basket.map((item, index) => (
                <CheckoutProduct
                  key={index}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  alt={item.imgTitle}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
