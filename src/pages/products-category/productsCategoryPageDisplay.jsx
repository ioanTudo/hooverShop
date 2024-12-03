import { Link } from "react-router-dom";
import "./products-category.scss";

export const ProductsCategoryPageDisplay = ({
  name,
  pathLink,
  title,
  info,
  id,
}) => {
  return (
    <div key={id} className="productsCategory_container">
      <div className="prod_category container-sizing">
        <Link to={pathLink}>
          <div className="tiles">
            <h1>{name}</h1>
            <div className="details">
              <span className="title">{title}</span>
              <span className="info">{info}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
