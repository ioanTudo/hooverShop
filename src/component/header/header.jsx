import { Link } from "react-router-dom";
import "./header.css";
import { HeaderLogo } from "./logo";

export const Header = ({ cart }) => {
  return (
    <header className="header">
      <ul className="header_ul">
        <li className="logo_li">
          <Link to={"/"}>
            <HeaderLogo />
          </Link>
        </li>
        <li>
          <input
            className="searchBar_header"
            type="text"
            placeholder="search..."
          />
        </li>
        <li>
          <Link to={"/"}>home</Link>
        </li>
        <li>
          <Link to={"/products-page"}>products</Link>
        </li>
        <li>
          <Link to={"/sign-in"}>sign in</Link> |{" "}
          <Link to={"/log-in"}>log in</Link>
        </li>
        <li>
          <Link to={"/checkout-page"}>
            <i className="fa fa-shopping-cart" style={{ fontSize: "30px" }}></i>
            <span className="cart_amount">{cart.length}</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};
