import { NavLink } from "react-router-dom";

export const FooterDisplay = ({ pathLink, name, id }) => {
  return (
    <>
      <li key={id}>
        <NavLink to={pathLink}>{name}</NavLink>
      </li>
    </>
  );
};
