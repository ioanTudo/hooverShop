import { FooterContainer } from "../../component/footer/footerContainer";
import { Header } from "../../component/header/header";

export const TemplatePageDisplay = ({
  children,
  cart,
  setCart,
  localAmount,
}) => {
  return (
    <>
      <Header localAmount={localAmount} cart={cart} setCart={setCart} />
      {children}
      <FooterContainer cart={cart} />
    </>
  );
};
