import "../../prodInfo.css";
import { PRODUCTS_CORDLESS } from "../../../../data";
import { TemplatePageDisplay } from "../../../templatePage/templatePageDisplay";
import { TemplateProdInfoPage } from "../../templateProdInfoPage";
export const IZ420UKTDBPage = ({ setCart, cart, addToCart }) => {
  return (
    <TemplatePageDisplay cart={cart} setCart={setCart}>
      <div className="iz400uktdb_container">
        {PRODUCTS_CORDLESS.filter((item) => item.id === 12).map((item) => (
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
