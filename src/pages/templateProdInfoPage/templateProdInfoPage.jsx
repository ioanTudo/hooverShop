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
    />
  );
};