import { CordedVacDisplay } from "../cordedVacPage/cordedVacDisplay";
import "../cordedVacPage/products.css";

export const CordlessVacDisplay = ({
  name,
  price,
  image,
  info,
  onAddToCart,
  prodPagePath,
  salePrice,
  onSale,
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
    />
  );
};
