import { NavLink } from "react-router-dom";
import "./header.css";

export const HeaderLogo = () => {
  return (
    <div className="logo_li">
      <NavLink to={"/"}>
        <h1 className="header_logo">logo</h1>
      </NavLink>
    </div>
  );
};