import { Link } from "react-router-dom";

export const CartHeader = ({ cart = [] }) => {
  return (
    <li>
      <Link to={"/checkout-page"}>
        <i
          className="fa fa-shopping-cart"
          style={{ fontSize: "30px", color: "blueviolet" }}
        ></i>
        <span className="cart_amount">{cart.length}</span>
      </Link>
    </li>
  );
};
