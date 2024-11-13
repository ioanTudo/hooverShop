import { NavLink } from "react-router-dom";
import "./header.css";

export const HeaderLogo = () => {
  return (
    <li className="logo_li">
      <NavLink to={"/"}>
        <span className="header_logo">logo</span>
      </NavLink>
    </li>
  );
};
