import { Link } from "react-router-dom";
import { OrderInfo } from "./orderInfo";
import "./paymentPage.css";

import { PaymentForm } from "./paymentForm";

export const PaymentPageDisplay = ({ cart = [], setCart }) => {
  const subtotal = cart.reduce(
    (total, item) =>
      total + (item.onSale ? item.salePrice : item.price) * (item.amount || 1),
    0
  );

  return (
    <>
      <div className="paymentPage_container">
        <div className="wrapper">
          <PaymentForm cart={cart} setCart={setCart} />
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
                  />
                ))
              )}

              <div className="total_container">
                <h3>Total: </h3>
                <p>${subtotal} </p>
              </div>
              <div className="buttonChange_container">
                <Link to={"/checkout-page"}>
                  <button
                    disabled={cart.length === 0}
                    className="changeOrder_btn"
                  >
                    change the order
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
