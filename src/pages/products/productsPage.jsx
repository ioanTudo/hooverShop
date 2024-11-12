import { PRODUCTS } from "../../data";
import { TemplatePageDisplay } from "../templatePage/templatePageDisplay.jsx";
import { ProductsDisplay } from "./productsDisplay.jsx";
import { useEffect } from "react";

export const ProductsPage = ({ cart, setCart }) => {
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
        <h1>Products</h1>
        <div className="products_container">
          {PRODUCTS.map((product) => (
            <ProductsDisplay
              key={product.id}
              name={product.name}
              price={product.price}
              prodImg={product.prodImg}
              info={product.info}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </div>
    </TemplatePageDisplay>
  );
};
