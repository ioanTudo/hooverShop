import { NavLink } from "react-router-dom";
import "./header.css";
import { useState } from "react";

export const HeaderDisplay = ({
  pathLink,
  name,
  id,
  submenu,
  navVisibility,
  setNavVisibility,
}) => {
  const [visibility, setVisibility] = useState("none");

  const onPageSelect = () => {
    document.body.style.overflow = "visible";
    if (window.innerWidth < 1200) {
      setNavVisibility("none");
      setVisibility("none");
    }
  };

  const handleToggleSubmenu = () => {
    if (name === "products") {
      setVisibility((prev) => (prev === "none" ? "block" : "none"));
    }

    if (window.innerWidth < 1200 && name !== "products") {
      setNavVisibility("none");
      setVisibility("none");
    }
  };

  return (
    <li
      style={{ display: navVisibility }}
      className={`nav_link ${name === "products" ? "dropdownIcon" : ""}`}
      key={id}
    >
      <NavLink
        className={`${name === "offers" ? "offersButton" : ""}`}
        onClick={handleToggleSubmenu}
        to={pathLink}
      >
        {name}
      </NavLink>

      {submenu && submenu.length > 0 && (
        <div
          key={id}
          className="submenu_container"
          style={{ display: visibility }}
        >
          <ul className="submenu">
            {submenu.map((item) => (
              <NavLink
                key={`${id}-${item.id}`}
                to={item.pathLink}
                onClick={onPageSelect}
                className="submenu_link"
              >
                <li key={item.id}>{item.name}</li>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};
