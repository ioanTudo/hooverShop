import { useEffect } from "react";
import { PRODUCTS } from "../../data";

import { TemplatePageDisplay } from "../templatePage/templatePageDisplay";
import { CordedVacDisplay } from "./cordedVacDisplay";

export const CordedVacPage = ({ cart, setCart }) => {
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
        <h1>Corded vaccum cleaners</h1>
        <div className="products_container">
          {PRODUCTS.map((product) => (
            <CordedVacDisplay
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              info={product.info}
              prodPageInfo={product.prodPageInfo}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </div>
    </TemplatePageDisplay>
  );
};
