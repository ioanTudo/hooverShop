import { HeroHome } from "../../component/hero/homeHero.jsx";
import { TemplatePageDisplay } from "../templatePage/templatePageDisplay.jsx";
import "./homePage.css";

export const HomePage = ({ cart }) => {
  return (
    <TemplatePageDisplay>
      <HeroHome cart={cart} />
    </TemplatePageDisplay>
  );
};
