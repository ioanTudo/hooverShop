import { PRODUCTS_CATEGORY } from "../../data";

import { ProductsCategoryPageDisplay } from "./productsCategoryPageDisplay";

export const ProductsCategoryPage = () => {
  return (
    <div className="productsCategory_container_bigWrapper">
      <h1>Our Products</h1>
      <div className="prodCategory_flexWrapper">
        {PRODUCTS_CATEGORY.map((category) => (
          <ProductsCategoryPageDisplay
            key={category.id}
            name={category.name}
            info={category.info}
            title={category.title}
            bgImg={category.bgImg}
            pathLink={category.pathLink}
          />
        ))}
      </div>
    </div>
  );
};
