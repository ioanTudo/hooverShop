import { useParams } from "react-router-dom";
import { TemplateProdInfoDisplay } from "./TemplateProdInfoPageDisplay.jsx";
import {
  PRODUCTS,
  PRODUCTS_AIRPURIFIERS,
  PRODUCTS_CORDLESS,
  PRODUCTS_HAIRDRY,
} from "../../data.js";

export const TemplateProdInfoPage = ({ technology, prodType = [] }) => {
  const { productName } = useParams();

  const allProducts = [
    ...PRODUCTS,
    ...PRODUCTS_CORDLESS,
    ...PRODUCTS_AIRPURIFIERS,
    ...PRODUCTS_HAIRDRY,
  ];

  const product = allProducts.find(
    (prod) => prod.name.toLowerCase() === productName.toLowerCase()
  );

  console.log(prodType);

  return (
    <>
      {product && (
        <TemplateProdInfoDisplay
          id={product.id}
          info={product.info}
          technology={technology}
          name={product.name}
          image={product.image}
          whatsIncluded={product.whatsIncluded}
          prodInfoImg={product.prodInfoImg}
          price={product.price}
          onSale={product.onSale}
          salePrice={product.salePrice}
          rating={product.rating}
          price_id={product.price_id}
        />
      )}
    </>
  );
};
