import { CartComponentDisplay } from "../../component/cartComponentDisplay";
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useContext } from "react";
import "../../App.css";
import { TemplatePageDisplay } from "../templatePage/templatePageDisplay";
import { CartContext } from "../../component/contexts";

export const CheckoutPage = () => {
  const [cart, setCart] = useContext(CartContext);
  const navigate = useNavigate();
  const subtotal = cart.reduce(
    (total, item) =>
      total + (item.onSale ? item.salePrice : item.price) * (item.amount || 1),
    0
  );

  const handleDelete = useCallback(
    (index) => {
      setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    },
    [setCart]
  );

  return (
    <TemplatePageDisplay>
      <div className="cart_container">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <CartComponentDisplay
              key={index}
              name={item.name}
              price={item.onSale ? item.salePrice : item.price}
              image={item.image}
              salePrice={item.salePrice}
              onSale={item.onSale}
              amount={item.amount}
              onDelete={() => handleDelete(index)}
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
          <Link to={"/payment-page"}>
            <button
              disabled={cart.length === 0}
              onClick={() => console.log("went to checkout")}
            >
              To Payment
            </button>
          </Link>
          <Link onClick={() => navigate(-1)}>
            <p>Continue Shopping</p>
          </Link>
        </div>
      </div>
    </TemplatePageDisplay>
  );
};
