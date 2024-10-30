import { useState } from "react";
import { PRODUCTS } from "../../data";
import { ProductsDisplay } from "./productsDisplay.jsx";

export const ProductsPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Cart:", cart);
  };

  return (
    <>
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
    </>
  );
};
