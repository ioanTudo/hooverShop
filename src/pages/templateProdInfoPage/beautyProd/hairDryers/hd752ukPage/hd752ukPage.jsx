import "../../../prodInfo.css";

import { PRODUCTS_HAIRDRY } from "../../../../../data";
import { TemplatePageDisplay } from "../../../../templatePage/templatePageDisplay";
import { TemplateProdInfoPage } from "../../../templateProdInfoPage";
export const HD752UKPage = ({ setCart, cart, addToCart }) => {
  return (
    <TemplatePageDisplay cart={cart} setCart={setCart}>
      <div className="hd752ukContainer">
        {PRODUCTS_HAIRDRY.filter((item) => item.id === 17).map((item) => (
          <TemplateProdInfoPage
            name={item.name}
            key={item.id}
            whatsIncluded={item.whatsIncluded}
            info={item.info}
            technology={item.technology}
            prodInfoImg={item.prodInfoImg}
            price={item.price}
            rating={item.rating}
            onAddToCart={() => addToCart(item)}
          />
        ))}
      </div>
    </TemplatePageDisplay>
  );
};
