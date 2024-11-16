import { NavLink } from "react-router-dom";
import { useState } from "react";

export const FooterDisplay = ({ pathLink, name, submenu, id }) => {
  const [email, setEmail] = useState("");

  const handlePageSelect = (pageName) => {
    console.log(`Page selected in footer: ${pageName}`);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Submitted email: ${email}`);
  };

  return (
    <>
      <div>
        <h4>{name}</h4>
        {submenu && submenu.length > 0 && (
          <ul className="footer_submenu">
            {submenu.map((item) => (
              <li className="footer_nav_links" key={item.id}>
                <NavLink
                  to={pathLink}
                  onClick={() => handlePageSelect(item.name)}
                  className="submenu_link"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
        {name === "join our mailing list" && (
          <div className="footer_form_container">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};
