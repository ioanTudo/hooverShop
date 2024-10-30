import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
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
          <Link to={"/checkout-page"}>cart</Link>
        </li>
      </ul>
    </header>
  );
};
