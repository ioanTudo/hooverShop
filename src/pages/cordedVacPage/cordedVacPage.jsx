import { useEffect } from "react";
import { PRODUCTS } from "../../data";

import { TemplatePageDisplay } from "../templatePage/templatePageDisplay";
import { CordedVacDisplay } from "./cordedVacDisplay";

export const CordedVacPage = ({ cart, setCart, addToCart }) => {
  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  return (
    <TemplatePageDisplay cart={cart} setCart={setCart}>
      <div className="products_wrapper">
        <h1>Corded vacuum cleaners</h1>
        <div className="products_container">
          {PRODUCTS.map((product) => (
            <CordedVacDisplay
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
