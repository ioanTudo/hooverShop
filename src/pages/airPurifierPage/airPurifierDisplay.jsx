import { CordedVacDisplay } from "../cordedVacPage/cordedVacDisplay.jsx";
import "../cordedVacPage/products.css";
export const AirPurifierDisplay = ({
  name,
  price,
  image,
  info,
  onAddToCart,
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
