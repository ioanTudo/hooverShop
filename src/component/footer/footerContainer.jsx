import { FOOTER_items } from "../../data";
import { FooterDisplay } from "./footerDisplay";
import "./footer.css";

export const FooterContainer = () => {
  return (
    <footer>
      <nav className="footerNav_link">
        {FOOTER_items.map((navItem) => (
          <FooterDisplay
            name={navItem.name}
            pathLink={navItem.pathLink}
            key={navItem.id}
            submenu={navItem.submenu}
          />
        ))}
      </nav>

      <div className="copyright_container">
        <p>&copy; 2024 Hoover Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};
