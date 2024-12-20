import { Link } from "react-router-dom";

export const CartHeader = ({ cart = [] }) => {
  const totalAmount = cart.reduce((sum, item) => sum + item.amount, 0);
  return (
    <li className="cart_list">
      <Link to={"/checkout-page"}>
        <i
          className="fa fa-shopping-cart"
          style={{ fontSize: "30px", color: "blueviolet" }}
        ></i>

        <span className="cart_amount">{totalAmount}</span>
      </Link>
    </li>
  );
};
