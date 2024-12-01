import "../../prodInfo.css";
import { PRODUCTS } from "../../../../data";
import { TemplatePageDisplay } from "../../../templatePage/templatePageDisplay";
import { TemplateProdInfoPage } from "../../templateProdInfoPage";

export const AZ3000UKTPage = ({ setCart, cart, addToCart }) => {
  return (
    <TemplatePageDisplay cart={cart} setCart={setCart}>
      <div className="az3000uktContainer">
        {PRODUCTS.filter((item) => item.id === 3).map((item) => (
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
