import { AboutUs_data } from "../../data";
import { TemplatePageDisplay } from "../templatePage/templatePageDisplay";
import { AboutUsPageDisplay } from "./aboutUsPageDisplay";
import "./aboutUs.css";
import "../../component/footer/footer.css";

export const AboutUsPage = ({ cart, setCart }) => {
  return (
    <>
      <TemplatePageDisplay cart={cart} setCart={setCart}>
        {AboutUs_data.map((data) => (
          <AboutUsPageDisplay
            key={data.id}
            text={data.text}
            title={data.title}
            moreInfo={data.moreInfo}
            companyDetails={data.companyDetails}
            companyAdress={data.companyAdress}
            companyLocation={data.companyLocation}
          />
        ))}
      </TemplatePageDisplay>
    </>
  );
};
