import { PRODUCTS } from "../../../data";
import { TemplatePageDisplay } from "../../templatePage/templatePageDisplay";
import { TemplateProdInfoPage } from "../templateProdInfoPageDisplay";
import "../prodInfo.css";

export const NZ801UKTPage = ({ setCart, cart }) => {
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, amount: 1 }];
      }
    });
  };
  return (
    <TemplatePageDisplay cart={cart} setCart={setCart}>
      <div className="nz801uktContainer">
        {PRODUCTS.filter((item) => item.id === 6).map((item) => (
          <TemplateProdInfoPage
            name={item.name}
            key={item.id}
            whatsIncluded={item.whatsIncluded}
            info={item.info}
            technology={item.technology}
            prodInfoImg={item.prodInfoImg}
            price={item.price}
            onAddToCart={() => addToCart(item)}
          />
        ))}
      </div>
    </TemplatePageDisplay>
  );
};
