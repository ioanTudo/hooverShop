import { PRODUCTS } from "../../../data";
import { TemplatePageDisplay } from "../../templatePage/templatePageDisplay";
import { TemplateProdInfoPage } from "../templateProdInfoPageDisplay";
import "../prodInfo.css";

export const NZ801UKTPage = ({ setCart, cart, addToCart }) => {
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
