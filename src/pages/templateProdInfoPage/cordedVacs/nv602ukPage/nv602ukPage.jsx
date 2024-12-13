import "../../prodInfo.css";
import { PRODUCTS } from "../../../../data";
import { TemplatePageDisplay } from "../../../templatePage/templatePageDisplay";
import { TemplateProdInfoPage } from "../../templateProdInfoPage";

export const NV602UKPage = ({ setCart, cart, addToCart }) => {
  return (
    <TemplatePageDisplay cart={cart} setCart={setCart}>
      <div className="nv602ukContainer">
        {PRODUCTS.filter((item) => item.id === 5).map((item) => (
          <TemplateProdInfoPage
            name={item.name}
            key={item.id}
            whatsIncluded={item.whatsIncluded}
            info={item.info}
            technology={item.technology}
            prodInfoImg={item.prodInfoImg}
            price={item.price}
            onAddToCart={() => addToCart(item)}
            onSale={item.onSale}
            salePrice={item.salePrice}
          />
        ))}
      </div>
    </TemplatePageDisplay>
  );
};
