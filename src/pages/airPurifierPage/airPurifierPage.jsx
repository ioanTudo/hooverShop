import { useEffect } from "react";
import { PRODUCTS_AIRPURIFIERS } from "../../data.js";
import { TemplatePageDisplay } from "../templatePage/templatePageDisplay.jsx";

import { AirPurifierDisplay } from "./airPurifierDisplay.jsx";

export const AirPurifierPage = ({ cart, setCart, addToCart }) => {
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
              onSale={product.onSale}
              salePrice={product.salePrice}
              image={product.image}
              info={product.info}
              prodPagePath={product.prodPagePath}
              rating={product.rating}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </div>
    </TemplatePageDisplay>
  );
};
