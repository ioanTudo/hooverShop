import { NAVList } from "../../data";
import { FooterDisplay } from "./footerDisplay";

export const FooterContainer = () => {
  return (
    <footer>
      {NAVList.map((navItem) => (
        <FooterDisplay
          name={navItem.name}
          pathLink={navItem.pathLink}
          key={navItem.id}
        />
      ))}
      <p>�� 2022 My Website. All rights reserved.</p>
      <p>Privacy Policy | Terms of Service</p>
    </footer>
  );
};
