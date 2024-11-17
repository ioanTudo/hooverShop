import { TemplatePageDisplay } from "../templatePage/templatePageDisplay";
import { OffersDisplay } from "./offersDisplay";

export const OffersPage = ({ cart, setCart }) => {
  return (
    <TemplatePageDisplay cart={cart} setCart={setCart}>
      <OffersDisplay />
    </TemplatePageDisplay>
  );
};
