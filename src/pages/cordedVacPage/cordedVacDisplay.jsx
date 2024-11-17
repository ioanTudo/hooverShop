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
        <span>{info}</span>
      </div>
      <div className="product_paymentInfo">
        <p>Price: ${price}</p>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};
