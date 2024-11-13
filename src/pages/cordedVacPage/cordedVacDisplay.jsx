import "./products.css";
export const CordedVacDisplay = ({ name, price, image, info, onAddToCart }) => {
  return (
    <div className="product_item">
      <div
        className="product_img"
        style={{ backgroundImage: `url(${image})` }}
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
