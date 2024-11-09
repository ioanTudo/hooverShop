import { NavLink } from "react-router-dom";
import "./header.css";

export const HeaderDisplay = ({ pathLink, name, id }) => {
  const onPageSelect = () => {
    console.log(`Page selected in header: ${name}`);

    document.body.style.overflow = "visible";
  };
  const handlePageSelect = (name) => {
    onPageSelect(name);
  };

  return (
    <>
      <li key={id}>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "green" : "purple",
            textDecoration: isActive ? "underline" : "none",
          })}
          onClick={handlePageSelect}
          to={pathLink}
        >
          {name}
        </NavLink>
      </li>
    </>
  );
};
