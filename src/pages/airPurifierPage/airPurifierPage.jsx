import { useEffect } from "react";
import { PRODUCTS_AIRPURIFIERS } from "../../data.js";
import { TemplatePageDisplay } from "../templatePage/templatePageDisplay.jsx";

import { AirPurifierDisplay } from "./airPurifierDisplay.jsx";

export const AirPurifierPage = ({ cart, setCart }) => {
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, amount: 1 }];
      }
    });
  };

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);
  return (
    <TemplatePageDisplay cart={cart} setCart={setCart}>
      <div className="products_wrapper">
        <h1>air purifiers</h1>
        <div className="products_container">
          {PRODUCTS_AIRPURIFIERS.map((product) => (
            <AirPurifierDisplay
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              info={product.info}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </div>
    </TemplatePageDisplay>
  );
};