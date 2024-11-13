import { CartComponentDisplay } from "../../component/cartComponentDisplay";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import "../../App.css";
import { TemplatePageDisplay } from "../templatePage/templatePageDisplay";

export const CheckoutPage = ({ cart, setCart }) => {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * (item.amount || 1),
    0
  );

  const updateItemAmount = useCallback(
    (index, newAmount) => {
      setCart((prevCart) =>
        prevCart.map((item, i) =>
          i === index ? { ...item, amount: newAmount } : item
        )
      );
    },
    [setCart]
  );

  const handleDelete = useCallback(
    (index) => {
      setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    },
    [setCart]
  );

  return (
    <TemplatePageDisplay cart={cart} setCart={setCart}>
      <div className="cart_container">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <CartComponentDisplay
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              amount={item.amount}
              onDelete={() => handleDelete(index)}
              onAmountChange={(newAmount) => updateItemAmount(index, newAmount)}
            />
          ))
        )}

        <div className="subtotal_container">
          <h4>
            Subtotal ({cart.length} {cart.length > 1 ? "items" : "item"})
          </h4>
          <h4>${subtotal.toFixed(2)}</h4>
        </div>

        <div className="checkout_container">
          <button
            disabled={cart.length === 0}
            onClick={() => console.log("went to checkout")}
          >
            Checkout
          </button>
          <Link
            to="/corded-hoovers"
            onClick={() => console.log("continue shopping btn clicked")}
          >
            <p>Continue Shopping</p>
          </Link>
        </div>
      </div>
    </TemplatePageDisplay>
  );
};
