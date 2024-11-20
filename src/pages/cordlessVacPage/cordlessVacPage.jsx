import { PRODUCTS_CORDLESS } from "../../data";

import { CordedVacDisplay } from "../cordedVacPage/cordedVacDisplay";
import { TemplatePageDisplay } from "../templatePage/templatePageDisplay";

export const CordlessVacPage = ({ cart, setCart }) => {
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
              image={product.image}
              imgHover={product.imgHover}
              info={product.info}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </div>
    </TemplatePageDisplay>
  );
};
