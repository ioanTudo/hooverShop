import { useState, useEffect } from "react";
import "./products.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../component/contexts";

export const CordedVacDisplay = ({
  name,
  price,
  image,
  info,
  prodPagePath,
  salePrice,
  onSale,
  rating,
}) => {
  const [cart, setCart] = useContext(CartContext);
  const [hoverImgVisibility, setHoverImgVisibility] = useState("none");
  const [firstImgVisibility, setFirstImgVisibility] = useState("");
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1200);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1200);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleAddToCart = () => {
    setLoading(true);
    console.log(cart);
    setTimeout(() => setLoading(false), 3000);
    setCart([...cart, { image, name, price }]);
  };

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
        <p className="ratingValue">
          <span className="fa fa-star checked"></span>
          {rating}
        </p>
        <span className="prodInfoText">{info}</span>
      </div>
      <div className="product_paymentInfo">
        {onSale ? (
          <div>
            <s>Price: ${price}</s>
            <p>Sale Price: ${salePrice}</p>
          </div>
        ) : (
          <p>Price: ${price}</p>
        )}
        <button
          className="addCartButton"
          disabled={loading ? true : false}
          onClick={handleAddToCart}
        >
          {loading ? (
            <i className="fa fa-spinner fa-spin"></i>
          ) : (
            <span>Add to Cart</span>
          )}
        </button>
      </div>
    </div>
  );
};
