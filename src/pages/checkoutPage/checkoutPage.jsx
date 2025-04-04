import { CartComponentDisplay } from "../../component/cartComponentDisplay";
import { Link } from "react-router-dom";
import { useCallback, useContext } from "react";
import "../../App.css";
import { CartContext } from "../../component/contexts";
import { LocalAmount } from "../../component/localAmountProvider";

export const CheckoutPage = () => {
  const [cart, setCart] = useContext(CartContext);
  const { amount, setAmountForId } = useContext(LocalAmount);

  const totalPrice = cart.reduce((total, item) => {
    const qty = amount[item.id] || 1;
    const price = item.onSale ? item.salePrice : item.price;
    return total + price * qty;
  }, 0);

  const handleDelete = useCallback(
    (index) => {
      const deletedItem = cart[index];
      setCart((prevCart) => prevCart.filter((_, i) => i !== index));
      if (deletedItem?.id) {
      }
    },
    [cart, setCart, setAmountForId]
  );

  const handleCheckout = async () => {
    try {
      const formattedCartItems = cart.map((item) => ({
        price_id: item.price_id,
        quantity: amount[item.id] || 1,
      }));

      const response = await fetch(
        "http://localhost:4242/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            cartItems: formattedCartItems,
          }),
        }
      );

      const data = await response.json();
      window.location.href = data.url;
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  return (
    <div className="cart_container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <CartComponentDisplay
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.onSale ? item.salePrice : item.price}
            image={item.image}
            salePrice={item.salePrice}
            onSale={item.onSale}
            onDelete={() => handleDelete(index)}
          />
        ))
      )}

      <div className="subtotal_container">
        <h4>
          Subtotal ({cart.length} {cart.length > 1 ? "items" : "item"})
        </h4>
        <h4>${totalPrice.toFixed(2)}</h4>
      </div>

      <div className="checkout_container">
        <button disabled={cart.length === 0} onClick={handleCheckout}>
          Checkout with Stripe
        </button>

        <Link to={"/products-category"}>
          <p>Continue Shopping</p>
        </Link>
      </div>
    </div>
  );
};
