import { TemplatePageDisplay } from "../templatePage/templatePageDisplay";
import { PaymentPageDisplay } from "./paymentPageDisplay";

export const PaymentPage = ({ cart, setCart }) => {
  return (
    <TemplatePageDisplay cart={cart} setCart={setCart}>
      <PaymentPageDisplay cart={cart} setCart={setCart} />
    </TemplatePageDisplay>
  );
};
