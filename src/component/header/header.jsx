import { NAVList } from "../../data";
import { HeaderDisplay } from "./headerDisplay";
import "./header.css";
import { HeaderLogo } from "./headerLogo";
import { SearchBar } from "./searchBar";
import { CartHeader } from "./cartHeader.jsx";
import { BurgerMenu } from "./burgerMenu.jsx";
import { SearchLogo } from "./searchLogo.jsx";
import { useState } from "react";

export const Header = () => {
  const [visibility, setVisibility] = useState("");
  const [navVisibility, setNavVisibility] = useState("");

  return (
    <header className="header">
      <nav className="topNav">
        <ul className="header_ul">
          <HeaderLogo />
          <SearchBar visibility={visibility} />
          <SearchLogo visibility={visibility} setVisibility={setVisibility} />
          <div className="navItm_container" style={{ display: navVisibility }}>
            {NAVList.map((navItems) => (
              <HeaderDisplay
                key={navItems.id}
                pathLink={navItems.pathLink}
                name={navItems.name}
                submenu={navItems.submenu}
                navVisibility={navVisibility}
              />
            ))}
          </div>
          <CartHeader />
          <BurgerMenu
            navVisibility={navVisibility}
            setNavVisibility={setNavVisibility}
          />
        </ul>
      </nav>
    </header>
  );
};
