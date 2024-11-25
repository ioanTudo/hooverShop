import { NavLink } from "react-router-dom";
import "./header.css";
import { useState } from "react";

export const HeaderDisplay = ({
  pathLink,
  name,
  id,
  submenu,
  navVisibility,
}) => {
  const [visibility, setVisibility] = useState("none");

  const onPageSelect = () => {
    console.log(`Page selected in header: ${name}`);
    document.body.style.overflow = "visible";
  };

  const handleToggleVisibility = () => {
    setVisibility(visibility === "none" ? "block" : "none");
  };

  return (
    <li
      style={{ display: navVisibility }}
      className={`nav_link ${name === "products" ? "dropdownIcon" : ""}`}
      key={id}
    >
      <NavLink
        onClick={() => {
          onPageSelect();
          handleToggleVisibility();
        }}
        to={pathLink}
      >
        {name}
      </NavLink>

      {submenu && submenu.length > 0 && (
        <div className="submenu_container" style={{ display: visibility }}>
          <ul className="submenu">
            {submenu.map((item) => (
              <NavLink
                to={item.pathLink}
                onClick={() => {
                  onPageSelect();
                  handleToggleVisibility();
                }}
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
