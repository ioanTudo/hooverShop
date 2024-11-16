import { NAVList } from "../../data";
import { FooterDisplay } from "./footerDisplay";

import "./footer.css";

export const FooterContainer = () => {
  return (
    <footer>
      <ul className="nav_ul">
        {NAVList.map((navItem) => (
          <FooterDisplay
            name={navItem.name}
            pathLink={navItem.pathLink}
            key={navItem.id}
          />
        ))}
      </ul>
      <div className="copyright_container">
        <p>&copy; 2024 Hoover Shop. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};
