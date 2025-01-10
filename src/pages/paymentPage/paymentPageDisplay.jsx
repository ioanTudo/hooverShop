import { OrderInfo } from "./orderInfo";
import "./paymentPage.css";

export const PaymentPageDisplay = ({ amount = 1, cart = [] }) => {
  const subtotal = cart.reduce(
    (total, item) =>
      total + (item.onSale ? item.salePrice : item.price) * (item.amount || 1),
    0
  );
  return (
    <>
      <div className="paymentPage_container">
        <h1>Payment Page</h1>
        <div className="wrapper">
          <div>
            <p>master card</p>
          </div>
          <div className="orderDetails_container">
            <div className="">
              <h3>your order</h3>
              <hr />
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cart.map((item) => (
                  <OrderInfo
                    key={item.id}
                    name={item.name}
                    price={item.onSale ? item.salePrice : item.price}
                    image={item.image}
                    salePrice={item.salePrice}
                    onSale={item.onSale}
                    amount={item.amount}
                  />
                ))
              )}

              <div className="total_container">
                <p>Amount: {amount}</p>
                <p>total:{subtotal} </p>
              </div>
              <div className="buttonChange_container">
                <button>change the order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
