import { PRODUCTS_CORDLESS } from "../../data";

import { CordedVacDisplay } from "../cordedVacPage/cordedVacDisplay";
import { TemplatePageDisplay } from "../templatePage/templatePageDisplay";

export const CordlessVacPage = ({ cart, setCart, addToCart }) => {
  return (
    <TemplatePageDisplay cart={cart} setCart={setCart}>
      <div className="products_wrapper">
        <h1>Cordless Vacuum Cleaners</h1>
        <div className="products_container">
          {PRODUCTS_CORDLESS.map((product) => (
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
            />
          ))}
        </div>
      </div>
    </TemplatePageDisplay>
  );
};
