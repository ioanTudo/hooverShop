import { PRODUCTS } from "../../data"; // Update with your actual path
import { ProductsDisplay } from "./productsDisplay.jsx"; // Update with your actual path

export const ProductsPage = ({ cart, setCart }) => {
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Cart:", [...cart, product]);
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
