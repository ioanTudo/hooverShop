import {
  PRODUCTS,
  PRODUCTS_CORDLESS,
  PRODUCTS_AIRPURIFIERS,
  PRODUCTS_HAIRDRY,
} from "../../data";
import "../../index.css";
import "./offersPage.css";
import headerOffersPageImg from "../../images/prodCatImgs/Shark-UK-Header-Template-Desktop-1500x720.webp";

import { TemplatePage } from "../TemplatePage/TemplatePage.jsx";

const filteredCorded = PRODUCTS.filter((item) => item.onSale === true);
const filteredCordless = PRODUCTS_CORDLESS.filter(
  (item) => item.onSale === true
);
const filteredPurifiers = PRODUCTS_AIRPURIFIERS.filter(
  (item) => item.onSale === true
);
const filteredHair = PRODUCTS_HAIRDRY.filter((item) => item.onSale === true);

export const OffersPage = () => {
  return (
    <div className="offersPage_container">
      <div>
        <div
          className="headerImg"
          style={{ backgroundImage: `url(${headerOffersPageImg})` }}
        ></div>
      </div>
      <div>
        <h1>Offers</h1>
      </div>

      <div className="offersProd_container">
        <div className="offerCategory">
          <TemplatePage
            titleClass={"offerTitleStlye"}
            title={"Corded Hoovers"}
            prodType={filteredCorded}
          />
        </div>
        <div className="offerCategory">
          <TemplatePage
            titleClass={"offerTitleStlye"}
            title={"Cordless Hoovers"}
            prodType={filteredCordless}
          />
        </div>
        <div className="offerCategory">
          <TemplatePage
            titleClass={"offerTitleStlye"}
            title={"Air Purifiers"}
            prodType={filteredPurifiers}
          />
        </div>

        <div className="offerCategory">
          <TemplatePage
            titleClass={"offerTitleStlye"}
            title={"Hair Dryers"}
            prodType={filteredHair}
          />
        </div>
      </div>
    </div>
  );
};
