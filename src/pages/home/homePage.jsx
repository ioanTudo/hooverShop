import { HeroHome } from "../../component/hero/homeHero.jsx";
import { TemplatePageDisplay } from "../templatePage/templatePageDisplay.jsx";

export const HomePage = ({ cart, setCart }) => {
  return (
    <TemplatePageDisplay cart={cart} setCart={setCart}>
      <HeroHome setCart={setCart} cart={cart} />
    </TemplatePageDisplay>
  );
};
