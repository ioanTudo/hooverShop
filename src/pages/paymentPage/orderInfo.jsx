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
          <p>{name}</p>
        </div>
        <div>
          <p>Price: ${onSale ? salePrice : price}</p>
        </div>
      </div>
      <hr />
    </>
  );
};
