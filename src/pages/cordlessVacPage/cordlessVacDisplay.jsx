import { CordedVacDisplay } from "../cordedVacPage/cordedVacDisplay";
import "../cordedVacPage/products.css";

export const CordlessVacDisplay = ({
  name,
  info,
  image,
  onAddToCart,
  price,
}) => {
  return (
    <CordedVacDisplay
      name={name}
      info={info}
      image={image}
      onAddToCart={onAddToCart}
      price={price}
    />
  );
};
