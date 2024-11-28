import "./prodInfo.css";

export const TemplateProdInfoPage = ({
  info,
  technology,
  name,
  id,
  whatsIncluded,
  prodInfoImg,
  onAddToCart,
  price,
}) => {
  return (
    <div className="prodInfoContainer" key={id}>
      <div
        className="prodInfoImg"
        style={{ backgroundImage: `url(${prodInfoImg})` }}
      ></div>
      <div>
        <h2>{name}</h2>
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
          <span>${price}</span>
        </div>
        <div className="buttonPayment_container">
          <button onClick={onAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
