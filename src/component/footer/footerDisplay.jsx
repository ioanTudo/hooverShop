import { NavLink } from "react-router-dom";

export const FooterDisplay = ({ pathLink, name, id }) => {
  return (
    <>
      <ul>
        <li key={id}>
          <NavLink to={pathLink}>{name}</NavLink>
        </li>
      </ul>
    </>
  );
};
