import { FooterContainer } from "../../component/footer/footerContainer";
import { Header } from "../../component/header/header";

export const TemplatePageDisplay = ({ children, cart, setCart }) => {
  return (
    <>
      <Header cart={cart} setCart={setCart} />
      {children}
      <FooterContainer cart={cart} />
    </>
  );
};
