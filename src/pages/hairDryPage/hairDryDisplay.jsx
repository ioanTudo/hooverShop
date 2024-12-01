import { CordedVacDisplay } from "../cordedVacPage/cordedVacDisplay";
import "../cordedVacPage/products.css";
export const HairDryDisplay = ({
  name,
  price,
  image,
  info,
  onAddToCart,
  prodPagePath,
}) => {
  return (
    <CordedVacDisplay
      name={name}
      info={info}
      image={image}
      onAddToCart={onAddToCart}
      price={price}
      prodPagePath={prodPagePath}
    />
  );
};
