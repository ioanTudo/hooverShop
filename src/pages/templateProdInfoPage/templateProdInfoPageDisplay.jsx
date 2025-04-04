import { useContext, useState } from "react";
import "./prodInfo.css";
import { CartContext } from "../../component/contexts";

export const TemplateProdInfoDisplay = ({
  info,
  technology,
  name,
  id,
  whatsIncluded,
  prodInfoImg,
  price,
  onSale,
  salePrice,
  rating,
  image,
  price_id,
}) => {
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useContext(CartContext);

  const handleAddToCart = () => {
    setLoading(true);

    console.log(cart);
    setTimeout(() => setLoading(false), 3000);
    setCart([...cart, { image, name, price, price_id }]);
  };
  return (
    <div className="prodInfoContainer" key={id}>
      <div
        className="prodInfoImg"
        style={{ backgroundImage: `url(${prodInfoImg})` }}
      ></div>
      <div>
        <h2>{name}</h2>
        <p className="ratingValue">
          <span class="fa fa-star checked"></span>
          {rating}
        </p>
        <h3>{info}</h3>
        <ul key={id}>
          <li>Technology: {technology}</li>
        </ul>
        <h3>What's Included:</h3>
        <ul className="whatsIncluded_ul">
          {whatsIncluded.map((item, index) => (
            <li style={{ listStyleType: "none" }} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="paymentProdInfo_container">
        <div className="priceProdInfo_container">
          {onSale ? (
            <div className="priceInfo_container">
              <s>${price}</s>

              <span>Sale: ${salePrice}</span>
            </div>
          ) : (
            <div>
              <span>Price: ${price}</span>
            </div>
          )}
        </div>
        <div className="buttonPayment_container">
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
    </div>
  );
};
