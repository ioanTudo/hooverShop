import { Link } from "react-router-dom";
import "./header.css";

export const Header = ({ cart }) => {
  return (
    <header className="header">
      <ul className="header_ul">
        <li>
          <Link to={"/"}>home</Link>
        </li>
        <li>
          <Link to={"/products-page"}>products</Link>
        </li>
        <li>
          <Link to={"/checkout-page"}>cart({cart.length})</Link>
        </li>
      </ul>
    </header>
  );
};
