import { TemplateProdInfoPageDisplay } from "./templateProdInfoPageDisplay";

export const TemplateProdInfoPage = ({
  info,
  technology,
  name,
  id,
  whatsIncluded,
  prodInfoImg,
  price,
  onAddToCart,
  onSale,
  salePrice,
  rating,
}) => {
  return (
    <TemplateProdInfoPageDisplay
      info={info}
      technology={technology}
      name={name}
      key={id}
      whatsIncluded={whatsIncluded}
      prodInfoImg={prodInfoImg}
      price={price}
      onAddToCart={onAddToCart}
      onSale={onSale}
      salePrice={salePrice}
      rating={rating}
    />
  );
};
