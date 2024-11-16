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

  const handlePageSelect = () => {
    onPageSelect(
      visibility === "none" ? setVisibility("block") : setVisibility("none")
    );
  };

  return (
    <li
      style={{ display: navVisibility }}
      className={`nav_link ${name === "products" ? "dropdownIcon" : ""}`}
      key={id}
    >
      <NavLink onClick={() => handlePageSelect(name)} to={pathLink}>
        {name}
      </NavLink>
      <div className="submenu_container" style={{ display: visibility }}>
        {submenu && submenu.length > 0 && (
          <ul className="submenu">
            {submenu.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.pathLink}
                  onClick={() => handlePageSelect(item.name)}
                  className="submenu_link"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};
