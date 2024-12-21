import { TemplatePageDisplay } from "../templatePage/templatePageDisplay";
import { CordedVacDisplay } from "../cordedVacPage/cordedVacDisplay";
import {
  PRODUCTS,
  PRODUCTS_CORDLESS,
  PRODUCTS_AIRPURIFIERS,
  PRODUCTS_HAIRDRY,
} from "../../data";
import "./offersPage.css";
import headerOffersPageImg from "../../images/prodCatImgs/Shark-UK-Header-Template-Desktop-1500x720.webp";

export const OffersPage = ({ addToCart, cart, setCart }) => {
  const filteredCordedProducts = PRODUCTS.filter((product) =>
    [1, 2, 3].includes(product.id)
  );
  const filteredCordlessProducts = PRODUCTS_CORDLESS.filter((product) =>
    [7, 8, 9].includes(product.id)
  );
  const filteredAirPurifiers = PRODUCTS_AIRPURIFIERS.filter((product) =>
    [13, 15].includes(product.id)
  );
  const filteredHairDryers = PRODUCTS_HAIRDRY.filter((product) =>
    [16].includes(product.id)
  );

  return (
    <TemplatePageDisplay cart={cart} setCart={setCart}>
      <div className="offersPage_container">
        <h1>Special Offers</h1>
        <div
          className="headerImg"
          style={{ backgroundImage: `url(${headerOffersPageImg})` }}
        ></div>
        <div className="offersProd_container">
          <div className="design_container">
            <h2>Corded Vacuum Cleaners</h2>
          </div>
          <div className="products_grid">
            {filteredCordedProducts.map((product) => (
              <CordedVacDisplay
                key={product.id}
                name={product.name}
                price={product.price}
                onSale={product.onSale}
                salePrice={product.salePrice}
                image={product.image}
                info={product.info}
                prodPagePath={product.prodPagePath}
                rating={product.rating}
                onAddToCart={() => addToCart(product)}
              />
            ))}
          </div>
        </div>
        <div className="offersProd_container">
          <div className="design_container">
            <h2>Cordless Vacuum Cleaners</h2>
          </div>
          <div className="products_grid">
            {filteredCordlessProducts.map((product) => (
              <CordedVacDisplay
                key={product.id}
                name={product.name}
                price={product.price}
                onSale={product.onSale}
                salePrice={product.salePrice}
                image={product.image}
                info={product.info}
                prodPagePath={product.prodPagePath}
                rating={product.rating}
                onAddToCart={() => addToCart(product)}
              />
            ))}
          </div>
        </div>
        <div className="offersProd_container">
          <div className="design_container">
            <h2>Air Purifiers</h2>
          </div>
          <div className="products_grid">
            {filteredAirPurifiers.map((product) => (
              <CordedVacDisplay
                key={product.id}
                name={product.name}
                price={product.price}
                onSale={product.onSale}
                salePrice={product.salePrice}
                image={product.image}
                info={product.info}
                prodPagePath={product.prodPagePath}
                rating={product.rating}
                onAddToCart={() => addToCart(product)}
              />
            ))}
          </div>
        </div>
        <div className="offersProd_container">
          <div className="design_container">
            <h2>Hair Dryers</h2>
          </div>
          <div className="products_grid">
            {filteredHairDryers.map((product) => (
              <CordedVacDisplay
                key={product.id}
                name={product.name}
                price={product.price}
                onSale={product.onSale}
                salePrice={product.salePrice}
                image={product.image}
                info={product.info}
                prodPagePath={product.prodPagePath}
                rating={product.rating}
                onAddToCart={() => addToCart(product)}
              />
            ))}
          </div>
        </div>
      </div>
    </TemplatePageDisplay>
  );
};
