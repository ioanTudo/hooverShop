import { useState, useEffect } from "react";
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
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1200);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      onMouseLeave={() => {
        if (isLargeScreen) {
          setFirstImgVisibility("block");
          setHoverImgVisibility("none");
        }
      }}
      className="product_item"
    >
      <Link to={prodPagePath}>
        <div className="prodImg_container">
          <div
            onMouseEnter={() => {
              if (isLargeScreen) {
                setFirstImgVisibility("none");
                setHoverImgVisibility("block");
              }
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
