import { NAVList } from "../../data";
import { HeaderDisplay } from "./headerDisplay";
import "./header.css";
import { HeaderLogo } from "./headerLogo";
import { SearchBar } from "./searchBar";
import { CartHeader } from "./cartHeader.jsx";

export const Header = ({ cart }) => {
  return (
    <header className="header">
      <ul className="header_ul">
        <HeaderLogo />
        <SearchBar />
        {NAVList.map((navItems) => (
          <HeaderDisplay
            key={navItems.id}
            pathLink={navItems.pathLink}
            name={navItems.name}
          />
        ))}

        <CartHeader cart={cart || []} />
      </ul>
    </header>
  );
};
