import { Link } from "react-router-dom";

import { CartContext } from "../contexts";
import { useContext } from "react";

export const CartHeader = () => {
  const [cart] = useContext(CartContext);

  return (
    <li className="cart_list">
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
