import { PRODUCTS } from "../../data"; // Update with your actual path
import { ProductsDisplay } from "./productsDisplay.jsx"; // Update with your actual path

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
