import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../api/firebase";

export const HeaderDisplay = ({
  pathLink,
  name,
  id,
  submenu,
  navVisibility,
  setNavVisibility,
  currentUser,
}) => {
  const [visibility, setVisibility] = useState("none");
  const navigate = useNavigate();
  const onPageSelect = () => {
    if (window.innerWidth < 1200) {
      setNavVisibility("none");
      setVisibility("none");
    }
    if (window.innerWidth > 1200) {
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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if ((name === "log in" || name === "register") && currentUser) return null;
  if ((name === "dashboard" || name === "log out") && !currentUser) return null;

  return (
    <li
      style={{ display: navVisibility }}
      className={`nav_link ${name === "products" ? "dropdownIcon" : ""}`}
      key={id}
    >
      <NavLink
        className={`${name === "offers" ? "offersButton" : ""}`}
        onClick={name === "log out" ? handleLogout : handleToggleSubmenu}
        to={name === "log out" ? "#" : pathLink}
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
