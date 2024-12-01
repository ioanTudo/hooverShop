import { useState } from "react";
import "./products.css";
import { Link } from "react-router-dom";
export const CordedVacDisplay = ({
  name,
  price,
  image,
  info,
  onAddToCart,
  prodPagePath,
}) => {
  const [hoverImgVisibility, setHoverImgVisibility] = useState("none");
  const [firstImgVisibility, setFirstImgVisibility] = useState("");

  return (
    <div
      onMouseLeave={() => {
        setFirstImgVisibility("block");
        setHoverImgVisibility("none");
      }}
      className="product_item"
    >
      <Link to={prodPagePath}>
        <div className="prodImg_container">
          <div
            onMouseEnter={() => {
              setFirstImgVisibility("none");
              setHoverImgVisibility("block");
            }}
            className="product_img"
            style={{
              backgroundImage: `url(${image})`,
              display: firstImgVisibility,
            }}
          ></div>

          <div
            style={{ display: hoverImgVisibility }}
            className="secondImgHover"
          >
            <span>hoover img</span>
          </div>
        </div>
      </Link>

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
