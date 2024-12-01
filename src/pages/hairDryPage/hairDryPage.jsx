import { useEffect } from "react";
import { PRODUCTS_HAIRDRY } from "../../data.js";
import { TemplatePageDisplay } from "../templatePage/templatePageDisplay.jsx";
import { HairDryDisplay } from "./hairDryDisplay.jsx";

export const HairDryPage = ({ cart, setCart, addToCart }) => {
  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);
  return (
    <TemplatePageDisplay cart={cart} setCart={setCart}>
      <div className="products_wrapper">
        <h1>hair dryers</h1>
        <div className="products_container">
          {PRODUCTS_HAIRDRY.map((product) => (
            <HairDryDisplay
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              info={product.info}
              prodPagePath={product.prodPagePath}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </div>
    </TemplatePageDisplay>
  );
};
