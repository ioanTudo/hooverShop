import { PRODUCTS_CATEGORY } from "../../data";
import { TemplatePageDisplay } from "../templatePage/templatePageDisplay";
import { ProductsCategoryPageDisplay } from "./productsCategoryPageDisplay";

export const ProductsCategoryPage = () => {
  return (
    <TemplatePageDisplay>
      <div className="productsCategory_container_bigWrapper">
        <h1>Our Products</h1>
        <div className="prodCategory_flexWrapper">
          {PRODUCTS_CATEGORY.map((category) => (
            <ProductsCategoryPageDisplay
              key={category.id}
              name={category.name}
              info={category.info}
              pathLink={category.pathLink}
              title={category.title}
              bgImg={category.bgImg}
            />
          ))}
        </div>
      </div>
    </TemplatePageDisplay>
  );
};
