import { useEffect } from "react";
import { PRODUCTS_HAIRDRY } from "../../data.js";
import { TemplatePageDisplay } from "../templatePage/templatePageDisplay.jsx";
import { HairDryDisplayPage } from "./hairDryDisplayPage.jsx";

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
            <HairDryDisplayPage
              key={product.id}
              name={product.name}
              price={product.price}
              onSale={product.onSale}
              salePrice={product.salePrice}
              image={product.image}
              info={product.info}
              prodPagePath={product.prodPagePath}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </TemplatePageDisplay>
  );
};
