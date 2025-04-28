import { NAVList } from "../../data";
import { HeaderDisplay } from "./headerDisplay";
import "./header.css";
import { HeaderLogo } from "./headerLogo";
import { SearchBar } from "./searchBar";
import { CartHeader } from "./cartHeader.jsx";
import { BurgerMenu } from "./burgerMenu.jsx";
import { SearchLogo } from "./searchLogo.jsx";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../api/firebase.jsx";
export const Header = () => {
  const [visibility, setVisibility] = useState("");
  const [navVisibility, setNavVisibility] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setNavVisibility("");
      } else {
        setNavVisibility("none");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  const filteredNavList = NAVList.filter((item) => {
    if ((item.name === "log in" || item.name === "register") && currentUser)
      return false;
    if ((item.name === "dashboard" || item.name === "log out") && !currentUser)
      return false;
    return true;
  });

  return (
    <header className="header">
      <nav className="topNav">
        <ul className="header_ul">
          <HeaderLogo />
          <SearchBar visibility={visibility} />
          <SearchLogo visibility={visibility} setVisibility={setVisibility} />
          <div className="navItm_container" style={{ display: navVisibility }}>
            {filteredNavList.map((navItems) => (
              <HeaderDisplay
                key={navItems.id}
                pathLink={navItems.pathLink}
                name={navItems.name}
                id={navItems.id}
                submenu={navItems.submenu}
                navVisibility={navVisibility}
                setNavVisibility={setNavVisibility}
                currentUser={currentUser}
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
