import { CordedVacDisplay } from "../cordedVacPage/cordedVacDisplay";
import "../cordedVacPage/products.css";
export const HairDryDisplayPage = ({
  name,
  price,
  image,
  info,
  onAddToCart,
  prodPagePath,
  salePrice,
  onSale,
  rating,
}) => {
  return (
    <CordedVacDisplay
      name={name}
      info={info}
      image={image}
      onAddToCart={onAddToCart}
      price={price}
      prodPagePath={prodPagePath}
      salePrice={salePrice}
      onSale={onSale}
      rating={rating}
    />
  );
};
