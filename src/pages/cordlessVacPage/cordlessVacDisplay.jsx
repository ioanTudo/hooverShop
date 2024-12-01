import { CordedVacDisplay } from "../cordedVacPage/cordedVacDisplay";
import "../cordedVacPage/products.css";

export const CordlessVacDisplay = ({
  name,
  info,
  image,
  onAddToCart,
  price,
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
