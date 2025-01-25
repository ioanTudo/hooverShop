import { TemplateProdInfoPageDisplay } from "./templateProdInfoPageDisplay";

export const TemplateProdInfoPage = ({
  info,
  technology,
  name,
  id,
  whatsIncluded,
  prodInfoImg,
  price,
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
      onSale={onSale}
      salePrice={salePrice}
      rating={rating}
    />
  );
};
