import { CartComponentDisplay } from "../../component/cartComponentDisplay"; // Update with your actual path
import { Link } from "react-router-dom";

export const CheckoutPage = ({ cart, setCart }) => {
  const updateItemAmount = (index, newAmount) => {
    const updatedCart = [...cart];
    updatedCart[index].amount = newAmount;
    setCart(updatedCart);
  };

  const deleteItem = (e) => {
    var updatedCart = [...this.state.cart];
    var index = updatedCart.indexOf(cart.length - 1);
    if (index !== -1) {
      updatedCart.splice(index, 1);
      this.setState({ cart: updatedCart });
    }
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + (item.price * item.amount || 0),
    0
  );

  return (
    <div className="cart_container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <CartComponentDisplay
            key={index}
            name={item.name}
            price={item.price}
            prodImg={item.prodImg}
            amount={item.amount}
            onChangeAmount={(newAmount) => updateItemAmount(index, newAmount)}
            onDelete={() => deleteItem(index)}
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
        <div>
          <button onClick={() => console.log("went to checkout")}>
            checkout
          </button>
        </div>
        <div className="optionsBtn_container">
          <Link
            onClick={() => console.log("continue shopping btn clicked")}
            to={"/products-page"}
          >
            continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
};
