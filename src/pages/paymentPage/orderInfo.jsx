import "./paymentPage.css";

export const OrderInfo = ({ name, price, image, onSale, salePrice }) => {
  return (
    <>
      <div className="orderInfo_container">
        <div
          className="prodImg"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <div>
          <span>{name}</span>
        </div>
        <div>
          <p> ${onSale ? salePrice : price}</p>
        </div>
      </div>
      <hr />
    </>
  );
};
