import "../../prodInfo.css";

import { PRODUCTS_AIRPURIFIERS } from "../../../../data";
import { TemplatePageDisplay } from "../../../templatePage/templatePageDisplay";
import { TemplateProdInfoPage } from "../../templateProdInfoPage";

export const HP300UKPage = ({ setCart, cart, addToCart }) => {
  return (
    <TemplatePageDisplay cart={cart} setCart={setCart}>
      <div className="hp300ukContainer">
        {PRODUCTS_AIRPURIFIERS.filter((item) => item.id === 13).map((item) => (
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
