import "./products.css";

export const ProductsDisplay = ({
  name,
  price,
  prodImg,
  info,
  onAddToCart,
}) => {
  return (
    <div className="product_item">
      <div
        className="product_img"
        style={{ backgroundImage: `url(${prodImg})` }}
      ></div>
      <div className="product_info">
        <h3>{name}</h3>
        <h4>{info}</h4>
        <p>Price: ${price}</p>
      </div>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};
